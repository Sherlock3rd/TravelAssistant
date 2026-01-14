import SimpleHTTPServer
import BaseHTTPServer
import json
import os

PORT = 8080

# Configure paths
SERVER_DIR = os.path.dirname(os.path.abspath(__file__))
PUBLIC_DIR = os.path.join(SERVER_DIR, '../public')
DB_FILE = os.path.join(SERVER_DIR, 'travel_db.json')

# Change working directory to public to serve static files
if os.path.exists(PUBLIC_DIR):
    os.chdir(PUBLIC_DIR)

class RequestHandler(SimpleHTTPServer.SimpleHTTPRequestHandler):
    def do_OPTIONS(self):
        self.send_response(200)
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        self.end_headers()

    def do_GET(self):
        # Serve normal files
        if self.path == '/api/comments':
            self.send_response(200)
            self.send_header('Content-type', 'application/json')
            self.send_header('Access-Control-Allow-Origin', '*')
            self.send_header('Cache-Control', 'no-cache')
            self.end_headers()
            if os.path.exists(DB_FILE):
                with open(DB_FILE, 'r') as f:
                    self.wfile.write(f.read())
            else:
                self.wfile.write(json.dumps({"comments": []}))
        else:
            SimpleHTTPServer.SimpleHTTPRequestHandler.do_GET(self)

    def do_POST(self):
        if self.path == '/api/comments':
            content_length = int(self.headers.getheader('content-length', 0))
            post_data = self.rfile.read(content_length)
            
            try:
                new_comment = json.loads(post_data)
                
                # Read existing data
                data = {"comments": []}
                if os.path.exists(DB_FILE):
                    with open(DB_FILE, 'r') as f:
                        try:
                            data = json.load(f)
                        except ValueError:
                            pass # File might be empty or corrupted
                
                # Add new comment
                data['comments'].append(new_comment)
                
                # Write back
                with open(DB_FILE, 'w') as f:
                    json.dump(data, f, indent=2, ensure_ascii=False)
                
                self.send_response(200)
                self.send_header('Content-type', 'application/json')
                self.send_header('Access-Control-Allow-Origin', '*')
                self.end_headers()
                self.wfile.write(json.dumps({"status": "success"}))
                
            except Exception as e:
                self.send_response(500)
                self.send_header('Access-Control-Allow-Origin', '*')
                self.end_headers()
                self.wfile.write(str(e))
        else:
            self.send_error(404)

print "Serving at port", PORT
server = BaseHTTPServer.HTTPServer(('', PORT), RequestHandler)
server.serve_forever()
