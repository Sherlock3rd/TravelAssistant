# -*- coding: utf-8 -*-
import json
import os
import io

def generate_html(plan):
    title = plan.get('title', 'Unknown Quest')
    desc = plan.get('desc', '')
    days = plan.get('days', 'N/A')
    price = plan.get('price', 'N/A')
    route = plan.get('route', '')
    features = plan.get('features', [])
    
    features_html = "".join(["<li>{}</li>".format(f.encode('utf-8') if isinstance(f, unicode) else f) for f in features])
    
    html = """
    <div class="module-box">
        <div class="module-title">📋 1. 基本情报 (Briefing)</div>
        <ul style="list-style: none; padding: 0; margin-bottom: 15px;">
            <li><strong>⏱️ Time:</strong> {days}</li>
            <li><strong>💰 Budget:</strong> {price}</li>
        </ul>
        <p>{desc}</p>
    </div>
    
    <div class="module-box">
        <div class="module-title">🗺️ 路线 (Route)</div>
        <div style="background: #f9f9f9; padding: 15px; border-radius: 5px; border-left: 4px solid #2980b9;">
            <strong>{route}</strong>
        </div>
    </div>

    <div class="module-box">
        <div class="module-title">✨ 亮点 (Highlights)</div>
        <ul>
            {features_html}
        </ul>
    </div>
    
    <div class="module-box" style="text-align: center; color: #7f8c8d;">
        <p><em>Detailed timeline data is currently being restored...</em></p>
    </div>
    """.format(days=days, price=price, desc=desc, route=route, features_html=features_html)
    return html

def run():
    print("Loading data...")
    if not os.path.exists('data_dump.json'):
        print("Error: data_dump.json not found")
        return

    # Try utf-16 for data_dump.json (PowerShell artifact)
    try:
        with io.open('data_dump.json', 'r', encoding='utf-16') as f:
            data_js = json.load(f)
    except Exception:
        # Fallback to utf-8 if utf-16 fails
        with io.open('data_dump.json', 'r', encoding='utf-8') as f:
            data_js = json.load(f)

    plans_path = os.path.join('server', 'data', 'plans.json')
    if os.path.exists(plans_path):
        with io.open(plans_path, 'r', encoding='utf-8') as f:
            plans_json = json.load(f)
    else:
        plans_json = {}

    new_plans = {}

    # Helper to merge
    def merge_variant(new_key, source_data, variants_map):
        if not source_data:
            return
        
        entry = source_data.copy()
        if variants_map:
            entry['seasonal_variants'] = variants_map
        
        if 'content' not in entry or not entry['content']:
            entry['content'] = generate_html(entry)
            
        new_plans[new_key] = entry

    # 1. Beijiang
    variants_7 = {'winter': 'quest7', 'summer': 'quest7_summer', 'autumn': 'quest7_autumn'}
    merge_variant('quest7', data_js.get('quest7'), variants_7)
    merge_variant('quest7_summer', data_js.get('quest7_summer'), variants_7)
    merge_variant('quest7_autumn', plans_json.get('quest_beijiang'), variants_7)

    # 2. Nanjiang
    variants_8 = {'winter': 'quest8', 'summer': 'quest8_summer', 'autumn': 'quest8_autumn'}
    merge_variant('quest8', data_js.get('quest8'), variants_8)
    merge_variant('quest8_summer', data_js.get('quest8_summer'), variants_8)
    merge_variant('quest8_autumn', plans_json.get('quest_nanjiang'), variants_8)

    # 3. Tengchong
    variants_25 = {'winter': 'quest25', 'summer': 'quest25_summer', 'autumn': 'quest25_autumn'}
    merge_variant('quest25', data_js.get('quest25'), variants_25)
    merge_variant('quest25_summer', data_js.get('quest25_summer'), variants_25)
    merge_variant('quest25_autumn', plans_json.get('quest_tengchong'), variants_25)

    # 4. Xishuangbanna
    q26_data = plans_json.get('quest26')
    if q26_data:
        if 'quest26' in data_js and 'content' in data_js['quest26']:
            q26_data['content'] = data_js['quest26']['content']
        merge_variant('quest26', q26_data, None)

    # 5. Chuanxi
    q2_data = plans_json.get('quest2')
    if q2_data:
        merge_variant('quest_chuanxi', q2_data, None)
        
    # Write back
    print("Writing {} plans to {}...".format(len(new_plans), plans_path))
    with io.open(plans_path, 'w', encoding='utf-8') as f:
        f.write(json.dumps(new_plans, indent=2, ensure_ascii=False))
    print("Done.")

if __name__ == '__main__':
    run()
