# -*- coding: utf-8 -*-
import json
import os
import codecs
import sys

reload(sys)
sys.setdefaultencoding('utf-8')

def load_json(path):
    if not os.path.exists(path):
        print "File not found: {}".format(path)
        return {}
    with codecs.open(path, 'r', 'utf-8') as f:
        try:
            return json.load(f)
        except Exception as e:
            print "Error loading {}: {}".format(path, e)
            return {}

def save_json(path, data):
    with codecs.open(path, 'w', 'utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)

base_dir = os.path.dirname(os.path.abspath(__file__))
data_dump_path = os.path.join(base_dir, 'data_dump.json')
plans_path = os.path.join(base_dir, 'server', 'data', 'plans.json')
quests_path = os.path.join(base_dir, 'server', 'data', 'quests.json')

full_data = load_json(data_dump_path)
if not full_data:
    print "No data found in data_dump.json. Aborting."
    sys.exit(1)

# We want to keep user-added quests in quests.json if they are NOT in full_data
# But for this task, let's assume quests.json should be initialized with the simple quests from data.js
# and plans.json with detailed quests.

current_quests = load_json(quests_path)
plans = {} 
quests = {}

# Populate from full_data
for key, item in full_data.items():
    is_plan = item.get('hasPlan', False)
    is_variant = item.get('isVariant', False)
    
    if is_plan or is_variant:
        plans[key] = item
    else:
        quests[key] = item

# Preserve user-added quests that are not in full_data
# Identify user-added by checking if key is NOT in full_data
for key, item in current_quests.items():
    if key not in full_data:
        quests[key] = item

save_json(plans_path, plans)
save_json(quests_path, quests)

print "Updated plans.json with {} items".format(len(plans))
print "Updated quests.json with {} items".format(len(quests))
