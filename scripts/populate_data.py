# -*- coding: utf-8 -*-
import re
import json
import random

# Existing data extraction is complex with regex because it's JS, not JSON.
# Instead, I will append a new JS block that extends the existing data.
# But to do that effectively, I need to know what's already there to avoid duplicates.
# I'll just append new unique quests.

categories = {
    '1d': [
        u"洛带古镇", u"平乐古镇", u"安仁古镇", u"西岭雪山(前山)", u"鸡冠山", 
        u"白鹿中法风情小镇", u"海螺沟(一日特种兵)", u"天府艺术公园", u"东安湖公园",
        u"青龙湖湿地", u"锦城湖", u"桂湖公园", u"宝光寺", u"文殊院", u"大慈寺"
    ],
    'weekend': [
        u"四姑娘山(双桥沟)", u"毕棚沟", u"孟屯河谷", u"喇叭河", u"神木垒", 
        u"达瓦更扎", u"轿顶山", u"九皇山", u"药王谷", u"窦团山", 
        u"李白故里", u"剑门关", u"昭化古镇", u"阆中古镇", u"光雾山"
    ],
    'drive': [
        u"川西小环线", u"稻城亚丁", u"色达", u"九寨沟", u"黄龙", 
        u"若尔盖草原", u"红原月亮湾", u"莫斯卡", u"党岭", u"莲宝叶则",
        u"格聂之眼", u"措普沟", u"墨石公园", u"塔公草原", u"鱼子西"
    ],
    'flight': [
        u"西安", u"重庆", u"贵阳", u"昆明", u"大理", 
        u"丽江", u"西双版纳", u"长沙", u"武汉", u"南京", 
        u"杭州", u"苏州", u"上海", u"北京", u"青岛"
    ],
    'long': [
        u"新疆伊犁", u"新疆喀什", u"西藏拉萨", u"西藏林芝", u"青海湖", 
        u"甘肃敦煌", u"内蒙古呼伦贝尔", u"海南三亚", u"万宁", u"涠洲岛",
        u"泰国普吉岛", u"日本东京", u"日本大阪", u"韩国首尔", u"新加坡"
    ],
    'secret': [
        u"冷噶厝", u"子梅垭口", u"雅哈垭口", u"三奥雪山", u"玛嘉沟", 
        u"虹桥沟", u"凉台沟", u"结斯沟", u"霸王山", u"华尖山", 
        u"牛背山", u"九峰山", u"狮子王峰", u"阿坝县", u"壤塘"
    ]
}

# Features pool
features_pool = [
    u"拍照神地 (Photography)", u"美食众多 (Foodie)", u"空气清新 (Fresh Air)", 
    u"适合徒步 (Hiking)", u"亲子游 (Family)", u"人文历史 (History)", 
    u"网红打卡 (Instagrammable)", u"避暑胜地 (Summer Resort)", u"赏雪佳地 (Snow View)",
    u"温泉疗养 (Hot Spring)"
]

# Read existing file to find max quest ID
import io
import os
# Path relative to script location
SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
DATA_JS_PATH = os.path.join(SCRIPT_DIR, '../public/data.js')

with io.open(DATA_JS_PATH, 'r', encoding='utf-8') as f:
    content = f.read()
    
existing_ids = re.findall(r'\'(quest\d+)\':', content)
max_id = 0
for qid in existing_ids:
    num = int(qid.replace('quest', ''))
    if num > max_id:
        max_id = num

new_entries = []
start_id = max_id + 1

for cat, places in categories.items():
    for place in places:
        # Check if place already exists in content (simple check)
        if place in content:
            continue
            
        current_id = "quest{}".format(start_id)
        start_id += 1
        
        # Generate random features
        feats = random.sample(features_pool, 3)
        
        # Determine season randomly or generic
        season = u"📅 全年 (All Year)"
        if u"雪" in place or u"冬" in place:
            season = u"❄️ 冬季 (Winter)"
        elif u"避暑" in place or u"海" in place or u"草" in place:
            season = u"🌿 夏季 (Summer)"
            
        entry = u"""
    '{qid}': {{
        title: "{title}",
        category: "{cat}",
        season: "{season}",
        desc: "{title}，这里是{cat}旅行的绝佳选择，拥有独特的风景。",
        hasPlan: false,
        features: {features},
        route: "成都 -> {title} -> 成都"
    }},""".format(
            qid=current_id,
            title=place,
            cat=cat,
            season=season,
            features=json.dumps(feats, ensure_ascii=False)
        )
        new_entries.append(entry)

# Append to data.js
# We need to insert before the closing brace '};'
if new_entries:
    new_data_str = u"\n".join(new_entries)
    # Remove the last closing brace
    new_content = re.sub(r'\s*\}\s*;?\s*$', '', content)
    # Add new data and close
    final_content = new_content + u",\n" + new_data_str + u"\n};\n"
    
    with io.open(DATA_JS_PATH, 'w', encoding='utf-8') as f:
        f.write(final_content)
        
    print("Added {} new quests.".format(len(new_entries)))
else:
    print("No new quests added.")
