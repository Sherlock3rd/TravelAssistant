const fs = require('fs');
const path = require('path');

const dataDir = path.join('d:', 'charlie', 'TravelAssistant', 'server', 'data');
const questsFile = path.join(dataDir, 'quests.json');
const plansFile = path.join(dataDir, 'plans.json');

const quests = JSON.parse(fs.readFileSync(questsFile, 'utf8'));
const plans = JSON.parse(fs.readFileSync(plansFile, 'utf8'));

let maxId = 0;
for (const q of Object.keys(quests)) {
    if (q.startsWith('quest')) {
        const num = parseInt(q.replace('quest', ''));
        if (num > maxId) {
            maxId = num;
        }
    }
}

const newQuestId = `quest${maxId + 1}`;

const dunhuangQuest = {
    "category": "flight",
    "features": [
        "莫高窟特窟 (Mogao Caves)",
        "鸣沙山日落 (Desert Sunset)",
        "大漠古城 (Ancient City)"
    ],
    "title": "敦煌 (Dunhuang)",
    "season": "🌸 春/秋 (Spring/Autumn)",
    "route": "出发地 -> 敦煌市区 -> 莫高窟 -> 鸣沙山 -> 雅丹魔鬼城 -> 返程",
    "hasPlan": true,
    "static_scores": {
        "crowd": 4,
        "fatigue": 3,
        "match": 5,
        "value": 4,
        "time": 3
    },
    "desc": "西出阳关无故人。清明时节避开人潮，感受千年的信仰与荒凉。"
};

quests[newQuestId] = dunhuangQuest;
fs.writeFileSync(questsFile, JSON.stringify(quests, null, 2), 'utf8');

const htmlContent = `
        <div class="module-box">
            <div class="module-title">📋 1. 基本情报 (Briefing)</div>
            <ul style="list-style: none; padding: 0; margin-bottom: 15px;">
                <li><strong>🚗 出行方式:</strong> 飞机直达 (Flight) 或 高铁至柳园转车</li>
                <li><strong>💰 预算范围:</strong> 4000 - 6000 RMB</li>
                <li><strong>⏱️ 预期时间:</strong> 4 Days</li>
                <li><strong>🌡️ 气温推测:</strong> 5°C ~ 20°C (昼夜温差大)</li>
                <li><strong>🏨 住宿建议:</strong> 敦煌市区 (方便就餐与出行) 或 鸣沙山附近民宿</li>
            </ul>
            <p>清明小长假是错峰游敦煌的绝佳时机。没有盛夏的酷暑和国庆的人海，你可以静静站在莫高窟前，感受跨越千年的文化震撼。大漠孤烟，长河落日，都在这里等你。</p>
            <div style="background-color: #fee; border-left: 5px solid #e74c3c; padding: 10px; margin-top: 10px; color: #c0392b;">
                <strong>Charlie's Warning:</strong> 莫高窟门票极其紧俏 (Sell out fast)! 必须提前通过官方小程序抢A类票。春季风沙大，务必带好防风沙装备。
            </div>
        </div>

        <div class="module-box">
            <div class="module-title">🗺️ 2. 每日行程 (Itinerary)</div>
            <div class="timeline">
                <div class="timeline-item">
                    <div class="timeline-date">Day 1: 初识敦煌</div>
                    <div class="timeline-content">
                        <strong>抵达与预热:</strong> 飞抵敦煌，入住酒店。下午前往【敦煌博物馆】预习历史，看1:1复原特窟。晚上逛【沙洲夜市】，品尝驴肉黄面和杏皮水。<br>
                        <em>💡 Charlie's Tip: 博物馆是免票的，但需要提前预约。这里的文创很有特色。</em>
                    </div>
                </div>
                <div class="timeline-item">
                    <div class="timeline-date">Day 2: 千年信仰与大漠日落</div>
                    <div class="timeline-content">
                        <strong>东线精景:</strong> 上午前往【莫高窟】（需预留4-5小时），先看两部震撼的数字电影，再进入实体洞窟。下午4点后进入【鸣沙山·月牙泉】，骑骆驼，爬沙山等候绝美日落。晚上推荐观看《又见敦煌》情景剧。<br>
                        <em>💡 Charlie's Tip: 鸣沙山防沙鞋套必租。带上长焦镜头拍日落效果极佳。</em>
                    </div>
                </div>
                <div class="timeline-item">
                    <div class="timeline-date">Day 3: 西线探秘·苍凉戈壁</div>
                    <div class="timeline-content">
                        <strong>重走丝路:</strong> 包车西线一日游。途径【敦煌古城】(可租西域服饰旅拍) -> 【阳关遗址】(办理通关文牒) -> 【玉门关】 -> 傍晚抵达【雅丹魔鬼城】看震撼的风蚀地貌日落。<br>
                        <em>💡 Charlie's Tip: 西线往返300多公里，沿途无补给，请自备干粮和充足饮水。</em>
                    </div>
                </div>
                <div class="timeline-item">
                    <div class="timeline-date">Day 4: 悠闲慢时光与返程</div>
                    <div class="timeline-content">
                        <strong>查漏补缺:</strong> 早上可前往唐风古刹【雷音寺】清心，或在市区采购伴手礼（李广杏干、鸣山大枣）。根据航班时间返程。<br>
                    </div>
                </div>
            </div>
        </div>
`;

const dunhuangPlan = {
    "features": [
        "莫高窟特窟 (Mogao Caves)",
        "鸣沙山日落 (Desert Sunset)",
        "大漠古城 (Ancient City)"
    ],
    "title": "敦煌 (Dunhuang)",
    "season": "🌸 春季 (Spring)",
    "route": "出发地 -> 敦煌市区 -> 莫高窟 -> 鸣沙山 -> 雅丹魔鬼城 -> 返程",
    "days": "4 Days",
    "hasPlan": true,
    "content": htmlContent,
    "static_scores": {
        "value": 4,
        "fatigue": 3,
        "match": 5,
        "crowd": 4,
        "time": 3
    },
    "desc": "清明假期的最佳选择。避开人海，探秘千年石窟与大漠戈壁。"
};

plans[newQuestId] = dunhuangPlan;
fs.writeFileSync(plansFile, JSON.stringify(plans, null, 2), 'utf8');

console.log(`Successfully added Dunhuang as ${newQuestId}`);
