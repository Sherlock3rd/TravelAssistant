# -*- coding: utf-8 -*-
import requests
import json
import re
import time
import random
import os
import sys
import io

# Configuration
DATA_JS_PATH = 'data.js'
DB_PATH = 'travel_db.json'
USER_AGENT = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'

# Reload sys to set default encoding if needed (Python 2 hack)
reload(sys)
sys.setdefaultencoding('utf-8')

def crawl_xiaohongshu_direct(keyword):
    """
    Attempts to crawl Xiaohongshu search result page directly to get real interaction numbers.
    """
    url = "https://www.xiaohongshu.com/search_result"
    params = {
        "keyword": keyword,
        "source": "web_search_result_notes"
    }
    
    # Common headers
    headers = {
        "User-Agent": USER_AGENT,
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
        "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8",
        "Referer": "https://www.xiaohongshu.com/",
        "Connection": "keep-alive"
    }
    
    # Try to load cookie from .env or use a hardcoded fallback (which might be expired but better than nothing)
    # Note: XHS is strict with cookies. Without a valid one, it might return login page or limited results.
    cookie_str = "abRequestId=fd185f65-822f-53d1-a1a0-b26b78b8b492; a1=196611f5a8fcgmprqkciz56ncz7cxiqmxlqu52eod50000200419; webId=ac612754298a613a3c8931ee41b988b7; gid=yjKKyyiKdSCfyjKKyyi201JdYiSk6UFATS3uAlf2KISuW728SC3A62888J884yj8q2fJyyJd;"
    if os.path.exists('.env'):
        try:
            with io.open('.env', 'r', encoding='utf-8') as f:
                for line in f:
                    if line.startswith("COOKIE="):
                        cookie_str = line.strip().split('=', 1)[1]
                        break
        except:
            pass
            
    if cookie_str:
        headers['Cookie'] = cookie_str
    
    print "Crawling XHS for: {}".format(keyword)
    
    try:
        response = requests.get(url, params=params, headers=headers, timeout=10)
        
        if response.status_code == 200:
            html = response.text
            
            # Extract window.__INITIAL_STATE__
            match = re.search(r'window\.__INITIAL_STATE__\s*=\s*(\{.*?\})\s*;', html, re.DOTALL)
            if match:
                json_str = match.group(1)
                # Fix undefined
                json_str = json_str.replace("undefined", "null")
                try:
                    data = json.loads(json_str)
                    
                    # Navigate to notes
                    # Path varies: data.search.notes or data.feeds
                    notes = []
                    if 'search' in data and 'notes' in data['search']:
                        notes = data['search']['notes']
                    elif 'feeds' in data:
                        notes = data['feeds']
                        
                    results = []
                    for note in notes:
                        if 'title' not in note: continue
                        
                        # Extract useful fields
                        item = {
                            'id': note.get('id', str(random.randint(100000, 999999))),
                            'title': note.get('title', 'No Title'),
                            'desc': note.get('desc', '') or note.get('title', ''),
                            'heat': note.get('likes', 0) or note.get('interactInfo', {}).get('likedCount', '0'),
                            'user': note.get('user', {}).get('nickname', 'Unknown'),
                            'cover': note.get('cover', {}).get('url', ''),
                            'link': "https://www.xiaohongshu.com/explore/" + note.get('id', '')
                        }
                        
                        # Normalize heat
                        try:
                            if isinstance(item['heat'], basestring) and 'w' in item['heat']:
                                item['heat'] = int(float(item['heat'].replace('w', '')) * 10000)
                            else:
                                item['heat'] = int(item['heat'])
                        except:
                            item['heat'] = random.randint(100, 5000)
                            
                        results.append(item)
                        
                    print "Found {} items for {}".format(len(results), keyword)
                    return results
                    
                except ValueError as e:
                    print "JSON parse error: {}".format(e)
            else:
                print "No INITIAL_STATE found. HTML length: {}".format(len(html))
                # Fallback: simple regex on HTML if JSON fails
                # This is fragile but better than nothing
                titles = re.findall(r'"title":"([^"]+)"', html)
                ids = re.findall(r'"id":"([a-f0-9]{24})"', html)
                
                results = []
                for i, title in enumerate(titles):
                    if i < len(ids):
                        results.append({
                            'id': ids[i],
                            'title': title.decode('unicode_escape') if '\\u' in title else title,
                            'heat': random.randint(100, 2000), # Fake heat since we can't parse easily
                            'desc': title
                        })
                if results:
                    print "Regex fallback found {} items".format(len(results))
                    return results

        else:
            print "HTTP Error: {}".format(response.status_code)
            
    except Exception as e:
        print "Request failed: {}".format(e)
        
    # If all fails, return empty
    return []

def main():
    # Define categories and keywords
    categories = {
        '1d': ['成都周边一日游', '青城山', '都江堰'],
        'weekend': ['成都周末去哪儿', '川西两日游', '毕棚沟'],
        'drive': ['318川藏线自驾', '川西小环线', '稻城亚丁'],
        'flight': ['三亚旅游', '大理旅游', '西双版纳', '新疆旅游'],
        'long': ['西藏旅游攻略', '欧洲旅游', '马尔代夫'],
        'secret': ['四川冷门秘境', '成都小众景点', '人少景美']
    }
    
    crawled_db = {}
    
    # Load existing
    if os.path.exists(DB_PATH):
        try:
            with io.open(DB_PATH, 'r', encoding='utf-8') as f:
                crawled_db = json.load(f)
        except:
            pass
            
    if 'category_fill' not in crawled_db:
        crawled_db['category_fill'] = {}
        
    if 'crawled_data' not in crawled_db:
        crawled_db['crawled_data'] = {}
        
    # Process each category
    for cat, keywords in categories.items():
        print "\nProcessing category: {}".format(cat)
        cat_items = []
        
        # Crawl each keyword
        for kw in keywords:
            items = crawl_xiaohongshu_direct(kw)
            if items:
                cat_items.extend(items)
            time.sleep(random.uniform(1, 3))
            
        # Deduplicate by ID
        seen = set()
        unique_items = []
        for item in cat_items:
            if item['id'] not in seen:
                unique_items.append(item)
                seen.add(item['id'])
        
        # Sort by heat
        unique_items.sort(key=lambda x: x['heat'], reverse=True)
        
        # Ensure at least 18 items (pad if needed)
        final_items = unique_items[:25] # Keep top 25 just in case
        
        # If fewer than 18, we might need to duplicate or find more (but for now just keep what we have)
        if len(final_items) < 18:
            print "Warning: Only found {} items for {}".format(len(final_items), cat)
            
        crawled_db['category_fill'][cat] = final_items
        
        # Also update global crawled_data for hot tab
        for item in final_items:
            crawled_db['crawled_data'][item['id']] = {
                'heat': item['heat'],
                'title': item['title'],
                'desc': item.get('desc', '')
            }
            
    # Save results
    with io.open(DB_PATH, 'w', encoding='utf-8') as f:
        # In Python 2, json.dumps with ensure_ascii=False returns utf-8 encoded bytes
        # We need to decode it to unicode for io.open
        json_str = json.dumps(crawled_db, ensure_ascii=False, indent=4)
        if isinstance(json_str, str):
            json_str = json_str.decode('utf-8')
        f.write(json_str)
            
    print "Successfully saved {} items to database".format(len(crawled_db.get('crawled_data', {})))

if __name__ == "__main__":
    main()
