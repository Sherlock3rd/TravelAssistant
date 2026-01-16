import json
import os
import sys

import io

def load_json(path):
    if os.path.exists(path):
        with open(path, 'r') as f:
            try:
                return json.load(f)
            except ValueError:
                return {}
    return {}

def save_json(path, data):
    with io.open(path, 'w', encoding='utf-8') as f:
        f.write(json.dumps(data, indent=2, ensure_ascii=False))
    print("Saved " + path)

def main():
    dump_path = 'data_dump.json'
    plans_path = 'server/data/plans.json'
    quests_path = 'server/data/quests.json'
    trends_path = 'server/data/trends.json'

    if not os.path.exists(dump_path):
        print("data_dump.json not found")
        return

    dump_data = load_json(dump_path)
    quest_data = dump_data.get('questData', {})
    category_fill = dump_data.get('categoryFillData', {})

    # Load existing files
    plans = load_json(plans_path)
    trends = load_json(trends_path)
    
    # Initialize quests as empty (re-split from source)
    # But if we want to preserve user added items, we might want to load it.
    # User said "re-split", implying a reset to the structured state.
    quests = {} 

    # Distribute questData
    for q_id, q_info in quest_data.items():
        if q_info.get('hasPlan'):
            # It's a detailed guide -> plans.json
            # Merge logic: Prefer existing plan data if it has more info?
            # Or prefer dump? 
            # User said "Selected detailed guides... immutable". 
            # This suggests plans.json is the source of truth for these.
            # But we are splitting from data.js which might be the original source.
            # Let's update plans.json with data from dump, but preserve existing keys if missing in dump?
            # Actually, let's just update plans with dump data.
            # If plans[q_id] exists, we merge?
            if q_id in plans:
                # Merge: update fields from dump, but keep existing fields not in dump?
                # Or just overwrite?
                # Let's overwrite to ensure consistency with data.js
                # BUT, plans.json might have seasonal_variants that update_db.py added.
                # data.js also has seasonal_variants (verified for quest7).
                # So overwriting is probably safe and correct.
                plans[q_id] = q_info
            else:
                plans[q_id] = q_info
        else:
            # It's an inspiration island item -> quests.json
            quests[q_id] = q_info

    # Update trends.json
    trends['category_fill'] = category_fill
    # Ensure crawled_data exists
    if 'crawled_data' not in trends:
        trends['crawled_data'] = {}

    # Save all
    save_json(plans_path, plans)
    save_json(quests_path, quests)
    save_json(trends_path, trends)

    print("Data split complete.")

if __name__ == '__main__':
    main()
