import json
import os
import sys
import io

# Python 2/3 Compatibility
if sys.version_info[0] > 2:
    from http.server import SimpleHTTPRequestHandler, HTTPServer
    # Define aliases to match Python 2 usage
    class BaseHTTPServer:
        HTTPServer = HTTPServer
    class SimpleHTTPServer:
        SimpleHTTPRequestHandler = SimpleHTTPRequestHandler
else:
    import SimpleHTTPServer
    import BaseHTTPServer

PORT = 8080

# Configure paths
SERVER_DIR = os.path.dirname(os.path.abspath(__file__))
PUBLIC_DIR = os.path.join(SERVER_DIR, '../public')
DATA_DIR = os.path.join(SERVER_DIR, 'data')

PLANS_FILE = os.path.join(DATA_DIR, 'plans.json')
QUESTS_FILE = os.path.join(DATA_DIR, 'quests.json')
TRENDS_FILE = os.path.join(DATA_DIR, 'trends.json')
COMMENTS_FILE = os.path.join(DATA_DIR, 'comments.json')

# Change working directory to public to serve static files
if os.path.exists(PUBLIC_DIR):
    os.chdir(PUBLIC_DIR)

class RequestHandler(SimpleHTTPServer.SimpleHTTPRequestHandler):
    def do_OPTIONS(self):
        self.send_response(200)
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        self.end_headers()

    def _send_json_file(self, file_path, default_content):
        self.send_response(200)
        self.send_header('Content-type', 'application/json; charset=utf-8')
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Cache-Control', 'no-cache')
        self.end_headers()
        
        if os.path.exists(file_path):
            with open(file_path, 'r') as f:
                content = f.read()
                if sys.version_info[0] > 2:
                    self.wfile.write(content.encode('utf-8'))
                else:
                    self.wfile.write(content)
        else:
            content = json.dumps(default_content)
            if sys.version_info[0] > 2:
                self.wfile.write(content.encode('utf-8'))
            else:
                self.wfile.write(content)

    def do_GET(self):
        # Parse URL path (ignore query parameters for routing)
        path = self.path.split('?')[0]
        
        if path == '/api/plans':
            self._send_json_file(PLANS_FILE, {})
        elif path == '/api/quests' or path == '/api/inspiration':
            self._send_json_file(QUESTS_FILE, {})
        elif path == '/api/trends':
            self._send_json_file(TRENDS_FILE, {"crawled_data": {}, "category_fill": {}})
        elif path == '/api/comments':
            self._send_json_file(COMMENTS_FILE, {"comments": []})
        else:
            # Serve static files
            SimpleHTTPServer.SimpleHTTPRequestHandler.do_GET(self)

    def do_POST(self):
        if sys.version_info[0] > 2:
            content_length = int(self.headers.get('content-length', 0))
        else:
            content_length = int(self.headers.getheader('content-length', 0))
        
        post_data = self.rfile.read(content_length)
        
        try:
            if sys.version_info[0] > 2:
                data_received = json.loads(post_data.decode('utf-8'))
            else:
                data_received = json.loads(post_data)
            
            if self.path == '/api/comments':
                self._update_json_list(COMMENTS_FILE, 'comments', data_received)
            elif self.path == '/api/quests' or self.path == '/api/inspiration':
                # Expecting data_received to be { "id": "...", "data": { ... } } or just { ... with id }
                # Let's assume the body IS the quest object and it has an ID key, or the key is the ID.
                # User said "add from Hot to Inspiration".
                # Let's handle { "id": "questId", ...data } and upsert it into the dict.
                self._upsert_quest(QUESTS_FILE, data_received)
            else:
                self.send_error(404)
                return

            self.send_response(200)
            self.send_header('Content-type', 'application/json')
            self.send_header('Access-Control-Allow-Origin', '*')
            self.end_headers()
            resp = json.dumps({"status": "success"})
            if sys.version_info[0] > 2:
                self.wfile.write(resp.encode('utf-8'))
            else:
                self.wfile.write(resp)
                
        except Exception as e:
            self.send_response(500)
            self.send_header('Access-Control-Allow-Origin', '*')
            self.end_headers()
            err = str(e)
            if sys.version_info[0] > 2:
                self.wfile.write(err.encode('utf-8'))
            else:
                self.wfile.write(err)

    def do_DELETE(self):
        # Handle /api/inspiration?id=xxx
        if self.path.startswith('/api/quests') or self.path.startswith('/api/inspiration'):
            if sys.version_info[0] > 2:
                from urllib.parse import urlparse, parse_qs
            else:
                from urlparse import urlparse, parse_qs
                
            query = urlparse(self.path).query
            params = parse_qs(query)
            quest_id = params.get('id', [None])[0]
            
            if quest_id:
                try:
                    self._delete_quest(QUESTS_FILE, quest_id)
                    self.send_response(200)
                    self.send_header('Access-Control-Allow-Origin', '*')
                    self.end_headers()
                    resp = json.dumps({"status": "deleted", "id": quest_id})
                    if sys.version_info[0] > 2:
                        self.wfile.write(resp.encode('utf-8'))
                    else:
                        self.wfile.write(resp)
                except Exception as e:
                    self.send_error(500, str(e))
            else:
                self.send_error(400, "Missing id parameter")
        else:
            self.send_error(404)

    def _update_json_list(self, file_path, list_key, new_item):
        data = {list_key: []}
        if os.path.exists(file_path):
            with open(file_path, 'r') as f:
                try:
                    data = json.load(f)
                except ValueError:
                    pass
        
        data[list_key].append(new_item)
        
        with io.open(file_path, 'w', encoding='utf-8') as f:
            f.write(json.dumps(data, indent=2, ensure_ascii=False))

    def _upsert_quest(self, file_path, quest_data):
        # quest_data should have an 'id' or we use the key
        # We will store quests as a dict { "id": { ... }, ... }
        data = {}
        if os.path.exists(file_path):
            with open(file_path, 'r') as f:
                try:
                    data = json.load(f)
                except ValueError:
                    pass
        
        # If input is a list, process each
        # If input is dict with id, use id as key
        # If input is dict without id, that's a problem, but let's assume valid data
        
        if 'id' in quest_data:
            q_id = quest_data['id']
            data[q_id] = quest_data
        else:
            # Maybe it's a map of id->data?
            for k, v in quest_data.items():
                data[k] = v
                
        with io.open(file_path, 'w', encoding='utf-8') as f:
            f.write(json.dumps(data, indent=2, ensure_ascii=False))

    def _delete_quest(self, file_path, quest_id):
        data = {}
        if os.path.exists(file_path):
            with open(file_path, 'r') as f:
                try:
                    data = json.load(f)
                except ValueError:
                    pass
        
        if quest_id in data:
            del data[quest_id]
            
        with io.open(file_path, 'w', encoding='utf-8') as f:
            f.write(json.dumps(data, indent=2, ensure_ascii=False))

print("Serving at port", PORT)
server = BaseHTTPServer.HTTPServer(('', PORT), RequestHandler)
server.serve_forever()
