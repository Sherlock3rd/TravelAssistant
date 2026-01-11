const questData = {
    'quest1': { title: "毕棚沟 (Bipenggou)", desc: "位于理县，距离成都极近的高原雪景。虽然被称为'小瑞士'，但其实更有东方水墨感。适合想要看雪又不想太累的周末。", features: ["滑雪场坡度平缓，适合复健", "龙王海/磐羊湖景色无需滤镜", "全程大巴+电瓶车，徒步极少"], route: "成都 -> 汶川 -> 理县 -> 毕棚沟景区 -> 娜姆湖酒店 -> 成都" },
    'quest2': { title: "达古冰川 (Dagu Glacier)", desc: "黑水县境内，拥有全球海拔最高的索道和咖啡厅(4860m)。有一种孤寂的科幻感。", features: ["缆车直冲云霄，视觉冲击强", "山顶咖啡厅适合发呆/装X拍照", "注意高反，行动要慢"], route: "成都 -> 汶川 -> 黑水 -> 达古冰川景区 -> 羊茸哈德 -> 成都" },
    'quest3': { title: "莫斯卡 (Mosca)", desc: "丹巴县深处的村落，这里的土拨鼠被僧人喂养得不怕人。是一场治愈系的'动物森友会'之旅。", features: ["与野生动物零距离互动", "极其安静，没有商业化喧嚣", "路况一般，考验驾驶技术"], route: "成都 -> 丹巴 -> 莫斯卡村 -> 丹巴甲居藏寨 -> 泸定桥 -> 成都" },
    'quest4': { title: "麓湖 (Luxelakes)", desc: "成都南门的富人区水域，拥有极高密度的现代建筑设计。不用出城就能体验开船。", features: ["各类皮划艇、帆船体验", "建筑摄影圣地", "周末遛弯首选"], route: "成都 -> 麓湖水城 -> 麓客岛 -> 红石公园 -> 成都" },
    'quest5': { title: "王岗坪 (Wanggangping)", desc: "雅安石棉县，这里是直面贡嘎主峰最近的观景平台之一。一边滑雪一边看7556m的雪山。", features: ["贡嘎雪山C位观景台", "滑雪场设施新", "云海日出概率高"], route: "成都 -> 雅安 -> 石棉 -> 王岗坪景区 -> 观景平台 -> 成都" },
    'quest6': { title: "北海道 (Hokkaido)", desc: "日本最北端，冬天的北海道是纯白的世界。对于熟悉日语的你，这里是第二主场。", features: ["网走破冰船 (Aurora) 体验极佳", "小樽运河夜景是Vlog神机位", "粉雪世界第一"], route: "札幌 -> 小樽 -> 旭川动物园 -> 网走破冰船 -> 知床半岛 -> 札幌" },
    'quest7': { 
        title: "北疆阿勒泰 (Beijiang Altay)", 
        desc: "人类滑雪起源地。粉雪、木屋、图瓦人。真正的冰雪童话，不是东北那种商业化的雪乡。", 
        season: "❄️ 冬季 (Winter)",
        days: "5 Days",
        seasonal_variants: { winter: 'quest7', summer: 'quest7_summer' },
        features: ["将军山滑雪 (Skiing)", "禾木晨雾 (Morning Mist)", "雪地摩托穿越 (Snowmobile)"], 
        route: "阿勒泰 -> 禾木 -> 喀纳斯 -> 阿勒泰",
        hasPlan: true,
        plan: `
        <div class="module-box">
            <div class="module-title">📋 1. 基本情报 (Briefing)</div>
            <div class="briefing-grid">
                <div><strong>🚗 出行方式:</strong> 包车 (Chartered Car) - <strong>必须四驱+雪地胎</strong></div>
                <div><strong>💰 预算范围:</strong> 6000 - 10000 RMB</div>
                <div><strong>⏱️ 预期时间:</strong> 5 Days</div>
                <div><strong>🌡️ 气温推测:</strong> -20°C ~ -30°C (极寒)</div>
                <div><strong>✈️ 飞行参考:</strong> 直飞阿勒泰 (Altay) 机场</div>
                <div class="atmosphere-text">
                    <p>这里是人类滑雪的起源地。不同于商业化的雪乡，阿勒泰的冬是静谧而厚重的。当你踩着雪板从将军山冲下，或者在禾木的晨雾中醒来，你会明白什么是真正的“冰雪奇缘”。</p>
                    <p style="font-size: 0.9em; color: #666;"><strong>Warning:</strong> 公共交通不可用 (Public Transport Unavailable). 必须包车且需老司机驾驶。极寒天气需顶级保暖装备。</p>
                </div>
            </div>
        </div>

        <div class="module-box">
            <div class="module-title">🗺️ 2. 抽象地图 (Abstract Map)</div>
            <div class="map-container">
                <svg width="100%" height="300" viewBox="0 0 600 300" style="font-family: 'Comic Sans MS', 'Microsoft YaHei', sans-serif;">
                    <defs>
                        <marker id="arrow-blue" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
                            <path d="M0,0 L0,6 L9,3 z" fill="#2980b9" />
                        </marker>
                        <marker id="arrow-flight" markerWidth="12" markerHeight="12" refX="6" refY="6" orient="auto">
                            <text x="0" y="9" font-size="12">✈️</text>
                        </marker>
                    </defs>

                    <!-- Background Region Hint -->
                    <rect x="250" y="20" width="330" height="260" rx="20" fill="#f0f8ff" stroke="#bdc3c7" stroke-dasharray="5,5" />
                    <text x="415" y="270" text-anchor="middle" font-size="14" fill="#95a5a6" font-weight="bold">北疆阿勒泰区域</text>

                    <!-- Chengdu (Home) -->
                    <g transform="translate(60, 150)">
                        <circle r="6" fill="#e74c3c" />
                        <text x="0" y="25" text-anchor="middle" font-size="16" font-weight="bold" fill="#333">成都</text>
                        <text x="0" y="45" text-anchor="middle" font-size="12" fill="#7f8c8d">(出发地)</text>
                    </g>

                    <!-- Flight Path -->
                    <path d="M60,150 Q200,50 350,230" fill="none" stroke="#bdc3c7" stroke-width="2" stroke-dasharray="8,4" />
                    <text x="200" y="100" text-anchor="middle" font-size="12" fill="#bdc3c7" transform="rotate(-15, 200, 100)">直飞 4h</text>

                    <!-- Altay Hub -->
                    <g transform="translate(350, 230)">
                        <circle r="8" fill="#2980b9" stroke="white" stroke-width="2"/>
                        <text x="0" y="25" text-anchor="middle" font-size="16" font-weight="bold" fill="#2980b9">阿勒泰</text>
                        <text x="0" y="45" text-anchor="middle" font-size="12" fill="#555">集散中心</text>
                    </g>

                    <!-- Route Loop -->
                    <!-- Altay -> Hemu (NE) -> Kanas (NW) -> Altay -->
                    <path d="M350,230 L480,130 L350,60 L350,230" fill="none" stroke="#2980b9" stroke-width="3" stroke-dasharray="8,4" marker-end="url(#arrow-blue)"/>
                    
                    <!-- Hemu (Top Right) -->
                    <g transform="translate(480, 130)">
                        <circle r="5" fill="white" stroke="#2980b9" stroke-width="2"/>
                        <text x="15" y="5" text-anchor="start" font-size="14" font-weight="bold" fill="#333">禾木</text>
                        <text x="15" y="25" text-anchor="start" font-size="12" fill="#7f8c8d">晨雾/木屋</text>
                    </g>

                    <!-- Kanas (Top Left) -->
                    <g transform="translate(350, 60)">
                        <circle r="5" fill="white" stroke="#2980b9" stroke-width="2"/>
                        <text x="0" y="-15" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">喀纳斯</text>
                        <text x="0" y="-35" text-anchor="middle" font-size="12" fill="#7f8c8d">雪蘑菇/湖怪</text>
                    </g>

                    <!-- Compass -->
                    <g transform="translate(550, 40)">
                        <text x="0" y="-15" text-anchor="middle" font-size="12" font-weight="bold" fill="#bdc3c7">北</text>
                        <path d="M0,-10 L-5,5 L0,2 L5,5 Z" fill="#bdc3c7" />
                    </g>
                </svg>
            </div>
        </div>

        <div class="module-box">
            <div class="module-title">⏳ 3. 时间轴 (Timeline - 5 Days)</div>
            <div class="day-block">
                <h3>Day 1: 降落雪都 - 将军山夜滑</h3>
                <div class="time-slot"><strong>📍 地点:</strong> 阿勒泰市</div>
                <div class="time-slot"><strong>🌡️ 气温:</strong> -15°C</div>
                <div class="time-slot"><strong>🌞 上午:</strong> 飞抵阿勒泰。入住市区酒店。</div>
                <div class="time-slot"><strong>☕ 下午:</strong> 前往【将军山滑雪场】。这里是全国唯一就在城市边缘的雪场。</div>
                <div class="time-slot"><strong>🌙 晚上:</strong> 体验【夜滑】(夕阳下的粉雪极其浪漫) 或在山顶咖啡屋看城市灯火。</div>
            </div>

            <div class="day-block">
                <h3>Day 2: 深入雪原 - 前往禾木</h3>
                <div class="time-slot"><strong>📍 地点:</strong> 阿勒泰 -> 禾木</div>
                <div class="time-slot"><strong>🌡️ 气温:</strong> -20°C (极寒)</div>
                <div class="time-slot"><strong>🌞 上午:</strong> 包车出发 (约4h)。沿途是茫茫雪原，偶尔可见野狐狸。</div>
                <div class="time-slot"><strong>☕ 下午:</strong> 抵达【禾木村】。入住小木屋。在村里漫步，看炊烟升起。</div>
                <div class="time-slot"><strong>🌙 晚上:</strong> 这里的星空极其纯净，但注意保暖 (室外停留勿超15分钟)。</div>
            </div>

            <div class="day-block">
                <h3>Day 3: 晨雾与泼水成冰</h3>
                <div class="time-slot"><strong>📍 地点:</strong> 禾木</div>
                <div class="time-slot"><strong>🌡️ 气温:</strong> -30°C (清晨)</div>
                <div class="time-slot"><strong>🌞 上午:</strong> 乘坐【雪地摩托】上观景台看晨雾 (必体验)。尝试“泼水成冰”摄影。</div>
                <div class="time-slot"><strong>☕ 下午:</strong> 在木屋里喝奶茶，发呆。或者去白桦林踩雪。</div>
                <div class="time-slot"><strong>🌙 晚上:</strong> 吃土火锅，暖身。</div>
            </div>

            <div class="day-block">
                <h3>Day 4: 雪蘑菇与神仙湾</h3>
                <div class="time-slot"><strong>📍 地点:</strong> 禾木 -> 喀纳斯 -> 阿勒泰</div>
                <div class="time-slot"><strong>🌡️ 气温:</strong> -20°C</div>
                <div class="time-slot"><strong>🌞 上午:</strong> 前往【喀纳斯】。看著名的“雪蘑菇” (河中积雪的石头)。</div>
                <div class="time-slot"><strong>☕ 下午:</strong> 游览神仙湾、月亮湾。冬季的喀纳斯河像一条墨绿的带子。</div>
                <div class="time-slot"><strong>🌙 晚上:</strong> 返回阿勒泰市区。</div>
            </div>

            <div class="day-block">
                <h3>Day 5: 返程</h3>
                <div class="time-slot"><strong>📍 地点:</strong> 阿勒泰机场</div>
                <div class="time-slot"><strong>🌞 上午:</strong> 购买一些冷水鱼干。</div>
                <div class="time-slot"><strong>☕ 下午:</strong> 飞离雪都。</div>
            </div>
        </div>

        <div class="module-box">
            <div class="module-title">💰 4. 金币消耗 (Cost Breakdown)</div>
            <table class="cost-table">
                <tr><th>项目</th><th>预算</th><th>备注</th></tr>
                <tr><td>✈️ 交通</td><td>2000-4000</td><td>机票</td></tr>
                <tr><td>🚗 包车</td><td>2000-3000</td><td>人均 (丰田霸道/坦克300)</td></tr>
                <tr><td>🛌 住宿</td><td>1500-2500</td><td>禾木木屋较贵</td></tr>
                <tr><td>🎿 娱乐</td><td>1000-2000</td><td>滑雪/雪地摩托</td></tr>
                <tr style="background:#f0f0f0;border-top:2px solid black;"><td><strong>Total</strong></td><td><strong>6500 - 11500</strong></td><td><strong>硬核雪景游</strong></td></tr>
            </table>
        </div>

        <div class="module-box">
            <div class="module-title">🎒 5. 装备 (Loadout)</div>
            <div class="pros-cons">
                <div style="border-right: 2px dashed #ccc;">
                    <h4 class="pros">✅ 推荐</h4>
                    <ul><li>顶级粉雪体验</li><li>极致的童话雪景</li><li>人少景美</li></ul>
                </div>
                <div style="padding-left: 10px;">
                    <h4 class="cons">❌ 注意</h4>
                    <ul><li>极度寒冷 (需贴暖宝宝)</li><li>电子设备掉电快</li><li>路况受天气影响大</li></ul>
                </div>
            </div>
        </div>
        `
    },
    'quest8': { 
        title: "南疆喀什 (Nanjiang Kashgar)", 
        desc: "丝绸之路重镇。这里没有游客的喧嚣，只有帕米尔的蓝冰和千年古城的暖阳。", 
        season: "❄️ 冬季 (Winter)",
        days: "5 Days",
        seasonal_variants: { winter: 'quest8', summer: 'quest8_summer' },
        features: ["帕米尔蓝冰 (Blue Ice)", "古城老茶馆 (Tea House)", "慕士塔格峰 (Snow Mountain)"], 
        route: "喀什 -> 白沙湖 -> 塔县 -> 盘龙古道 -> 喀什",
        hasPlan: true,
        plan: `
        <div class="module-box">
            <div class="module-title">📋 1. 基本情报 (Briefing)</div>
            <div class="briefing-grid">
                <div><strong>🚗 出行方式:</strong> 包车 (Chartered Car) - <strong>高原路况复杂</strong></div>
                <div><strong>💰 预算范围:</strong> 5000 - 8000 RMB</div>
                <div><strong>⏱️ 预期时间:</strong> 5 Days</div>
                <div><strong>🌡️ 气温推测:</strong> -10°C ~ 5°C (高原风大)</div>
                <div><strong>✈️ 飞行参考:</strong> 直飞喀什 (Kashgar) 机场</div>
                <div class="atmosphere-text">
                    <p>南疆的冬是蓝色的。白沙湖的蓝冰碎裂在帕米尔高原上。回到喀什古城，在百年老茶馆喝一杯配馕的茶，听听热瓦普的弹奏。这是一种穿越时空的错觉。</p>
                    <p style="font-size: 0.9em; color: #666;"><strong>Note:</strong> 同样需要包车前往塔县。古城内步行即可。</p>
                </div>
            </div>
        </div>

        <div class="module-box">
            <div class="module-title">🗺️ 2. 抽象地图 (Abstract Map)</div>
            <div class="map-container">
                <svg width="100%" height="300" viewBox="0 0 600 300" style="font-family: 'Comic Sans MS', 'Microsoft YaHei', sans-serif;">
                    <defs>
                        <marker id="arrow-orange" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
                            <path d="M0,0 L0,6 L9,3 z" fill="#e67e22" />
                        </marker>
                    </defs>

                    <!-- Background Region Hint -->
                    <rect x="250" y="20" width="330" height="260" rx="20" fill="#fff5e6" stroke="#e67e22" stroke-dasharray="5,5" />
                    <text x="415" y="270" text-anchor="middle" font-size="14" fill="#d35400" font-weight="bold">南疆喀什区域</text>

                    <!-- Chengdu (Home) -->
                    <g transform="translate(60, 150)">
                        <circle r="6" fill="#e74c3c" />
                        <text x="0" y="25" text-anchor="middle" font-size="16" font-weight="bold" fill="#333">成都</text>
                        <text x="0" y="45" text-anchor="middle" font-size="12" fill="#7f8c8d">(出发地)</text>
                    </g>

                    <!-- Flight Path -->
                    <path d="M60,150 Q200,50 350,80" fill="none" stroke="#bdc3c7" stroke-width="2" stroke-dasharray="8,4" />
                    <text x="200" y="90" text-anchor="middle" font-size="12" fill="#bdc3c7" transform="rotate(-15, 200, 100)">直飞 5h</text>

                    <!-- Kashgar Hub (North) -->
                    <g transform="translate(350, 80)">
                        <circle r="8" fill="#e67e22" stroke="white" stroke-width="2"/>
                        <text x="0" y="-15" text-anchor="middle" font-size="16" font-weight="bold" fill="#d35400">喀什</text>
                        <text x="0" y="-35" text-anchor="middle" font-size="12" fill="#555">古城/集散</text>
                    </g>

                    <!-- Route: Kashgar -> Baisha -> Tashkurgan -> Kashgar -->
                    <path d="M350,80 Q400,120 420,150" fill="none" stroke="#e67e22" stroke-width="3" stroke-dasharray="8,4" marker-end="url(#arrow-orange)"/>
                    <path d="M420,150 Q430,200 400,240" fill="none" stroke="#e67e22" stroke-width="3" stroke-dasharray="8,4" marker-end="url(#arrow-orange)"/>
                    <path d="M400,240 Q320,180 350,80" fill="none" stroke="#e67e22" stroke-width="3" stroke-dasharray="8,4" marker-end="url(#arrow-orange)"/>

                    <!-- Baisha Lake (Middle) -->
                    <g transform="translate(420, 150)">
                        <circle r="5" fill="white" stroke="#3498db" stroke-width="2"/>
                        <text x="15" y="5" text-anchor="start" font-size="14" font-weight="bold" fill="#333">白沙湖</text>
                        <text x="15" y="25" text-anchor="start" font-size="12" fill="#7f8c8d">蓝冰/沙漠</text>
                    </g>

                    <!-- Tashkurgan (South) -->
                    <g transform="translate(400, 240)">
                        <circle r="5" fill="white" stroke="#e67e22" stroke-width="2"/>
                        <text x="0" y="25" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">塔县</text>
                        <text x="0" y="45" text-anchor="middle" font-size="12" fill="#7f8c8d">帕米尔高原</text>
                    </g>

                    <!-- Compass -->
                    <g transform="translate(550, 40)">
                        <text x="0" y="-15" text-anchor="middle" font-size="12" font-weight="bold" fill="#bdc3c7">北</text>
                        <path d="M0,-10 L-5,5 L0,2 L5,5 Z" fill="#bdc3c7" />
                    </g>
                </svg>
            </div>
        </div>

        <div class="module-box">
            <div class="module-title">⏳ 3. 时间轴 (Timeline - 5 Days)</div>
            <div class="day-block">
                <h3>Day 1: 抵达喀什 - 古城初探</h3>
                <div class="time-slot"><strong>📍 地点:</strong> 喀什古城</div>
                <div class="time-slot"><strong>🌡️ 气温:</strong> 0°C</div>
                <div class="time-slot"><strong>🌞 上午:</strong> 飞抵喀什。办理边防证 (去塔县必备)。</div>
                <div class="time-slot"><strong>☕ 下午:</strong> 入住古城民宿。避开主街，去【空中花园】看古城全景。</div>
                <div class="time-slot"><strong>🌙 晚上:</strong> 在汗巴扎夜市吃烤肉、抓饭。</div>
            </div>

            <div class="day-block">
                <h3>Day 2: 帕米尔的蓝冰 - 上高原</h3>
                <div class="time-slot"><strong>📍 地点:</strong> 喀什 -> 白沙湖 -> 塔县</div>
                <div class="time-slot"><strong>🌡️ 气温:</strong> -10°C (风大)</div>
                <div class="time-slot"><strong>🌞 上午:</strong> 包车出发。途径【白沙湖】，冬季湖面结冰，呈现惊艳的蒂芙尼蓝。</div>
                <div class="time-slot"><strong>☕ 下午:</strong> 途经【卡拉库里湖】，仰望【慕士塔格峰】(冰山之父)。</div>
                <div class="time-slot"><strong>🌙 晚上:</strong> 抵达塔县 (海拔3000m+)，注意高反，不要剧烈运动。</div>
            </div>

            <div class="day-block">
                <h3>Day 3: 盘龙古道与冰川</h3>
                <div class="time-slot"><strong>📍 地点:</strong> 塔县周边</div>
                <div class="time-slot"><strong>🌡️ 气温:</strong> -10°C</div>
                <div class="time-slot"><strong>🌞 上午:</strong> 挑战【盘龙古道】(如遇大雪封路则改为远观或去奥依塔克冰川)。体验600个S弯。</div>
                <div class="time-slot"><strong>☕ 下午:</strong> 探访【班迪尔蓝湖】。</div>
                <div class="time-slot"><strong>🌙 晚上:</strong> 返回喀什市区 (车程较长，约4-5h)。</div>
            </div>

            <div class="day-block">
                <h3>Day 4: 百年老茶馆 - 人文扫街</h3>
                <div class="time-slot"><strong>📍 地点:</strong> 喀什古城</div>
                <div class="time-slot"><strong>🌡️ 气温:</strong> 2°C</div>
                <div class="time-slot"><strong>🌞 上午:</strong> 睡个懒觉。去【百年老茶馆】喝茶，看当地老爷爷聊天。这里是《追风筝的人》取景地风格。</div>
                <div class="time-slot"><strong>☕ 下午:</strong> 参观【艾提尕尔清真寺】。在迷宫般的巷道里扫街摄影 (Cosplay西域风格极佳)。</div>
                <div class="time-slot"><strong>🌙 晚上:</strong> 找一家当地塔吉克族餐厅用餐。</div>
            </div>

            <div class="day-block">
                <h3>Day 5: 巴扎与返程</h3>
                <div class="time-slot"><strong>📍 地点:</strong> 喀什 -> 机场</div>
                <div class="time-slot"><strong>🌞 上午:</strong> 如果是周日，去【牛羊大巴扎】看热闹。平时可去【高台民居】。</div>
                <div class="time-slot"><strong>☕ 下午:</strong> 买点干果，前往机场。</div>
            </div>
        </div>

        <div class="module-box">
            <div class="module-title">💰 4. 金币消耗 (Cost Breakdown)</div>
            <table class="cost-table">
                <tr><th>项目</th><th>预算</th><th>备注</th></tr>
                <tr><td>✈️ 交通</td><td>2000-3500</td><td>机票</td></tr>
                <tr><td>🚗 包车</td><td>1500-2500</td><td>塔县往返2-3天</td></tr>
                <tr><td>🛌 住宿</td><td>1000-1800</td><td>古城民宿</td></tr>
                <tr><td>🥘 餐饮</td><td>600-1000</td><td>物价感人，肉量大</td></tr>
                <tr style="background:#f0f0f0;border-top:2px solid black;"><td><strong>Total</strong></td><td><strong>5100 - 8800</strong></td><td><strong>异域风情游</strong></td></tr>
            </table>
        </div>

        <div class="module-box">
            <div class="module-title">🎒 5. 装备 (Loadout)</div>
            <div class="pros-cons">
                <div style="border-right: 2px dashed #ccc;">
                    <h4 class="pros">✅ 推荐</h4>
                    <ul><li>国内最具异域风情的城市</li><li>帕米尔高原壮丽景色</li><li>美食极其正宗</li></ul>
                </div>
                <div style="padding-left: 10px;">
                    <h4 class="cons">❌ 注意</h4>
                    <ul><li>高原反应 (塔县)</li><li>干燥 (需补水)</li><li>尊重当地风俗</li></ul>
                </div>
            </div>
        </div>
        `
    },
    'quest9': { title: "莱茵河游轮 (Rhine)", desc: "穿越德国和法国的河流之旅。不用每天换酒店，船就是移动的城堡。", features: ["德语区深度游", "沿途大量古堡", "极度休闲，适合躺平"], route: "法兰克福 -> 美因茨 -> 吕德斯海姆 -> 科布伦茨 -> 科隆 -> 斯特拉斯堡" },
    'quest10': { title: "涠洲岛 (Weizhou)", desc: "中国最年轻的火山岛。骑着电瓶车在香蕉林和海边穿梭。", features: ["五彩滩日出", "南湾街海鲜", "适合拍摄日系小清新"], route: "北海 -> 涠洲岛码头 -> 天主教堂 -> 五彩滩 -> 滴水丹屏 -> 北海" },
    'quest11': { title: "四姑娘山 (Siguniang)", desc: "蜀山之后。双桥沟开发极其成熟，是懒人看雪山的极致选择。", features: ["全程观光车", "雪山触手可及", "路况极好"], route: "成都 -> 映秀 -> 猫鼻梁 -> 双桥沟 -> 长坪沟(选去) -> 成都" },
    'quest12': { title: "平潭岛 (Pingtan)", desc: "离台湾最近的海岛。巨大的风车田是它的标志。", features: ["蓝眼泪（季节性）", "北部湾玻璃栈道", "风车田公路片"], route: "福州 -> 平潭岛 -> 北港村 -> 猴研岛 -> 象鼻湾 -> 长乐机场" },
    'quest13': { title: "瓦屋山 (Wawu Shan)", desc: "洪雅县，亚洲最大的桌山。冬季的冰雪森林像极了童话世界，索道设施完善。", features: ["双索道直达山顶，无痛苦", "云顶象尔山庄景色绝佳", "偶遇小熊猫/猴子"], route: "成都 -> 雅安 -> 洪雅 -> 瓦屋山景区 -> 柳江古镇 -> 成都" },
    'quest14': { title: "西昌邛海 (Qionghai)", desc: "凉山州首府，一座春天栖息的城市。阳光充足，邛海泛舟极其惬意。", features: ["邛海湿地公园骑行/坐船", "参观卫星发射中心(硬核)", "烧烤一绝"], route: "成都 -> 西昌 -> 邛海湿地 -> 泸山 -> 卫星发射中心 -> 成都" },
    'quest15': { title: "重庆 (Chongqing)", desc: "山城，赛博朋克圣地。这里的地形和建筑结构本身就是巨大的游戏关卡。", features: ["长江索道/两江游轮(船)", "洪崖洞夜景(Vlog/Cosplay)", "轻轨穿楼"], route: "成都 -> 重庆北 -> 解放碑 -> 洪崖洞 -> 李子坝轻轨 -> 鹅岭二厂 -> 成都" },
    'quest16': { title: "九寨沟 (Jiuzhaigou)", desc: "阿勒泰之外的另一个水景巅峰。虽然人多，但景色绝对值回票价。", features: ["水体通透度极高，适合摄影", "Y字形游览路线清晰", "基础设施极好"], route: "成都 -> 松潘古城 -> 九寨沟景区 -> 黄龙景区 -> 汶川 -> 成都" },
    'quest17': { title: "塔公/新都桥 (Tagong)", desc: "甘孜州，摄影家的天堂。光影变化极快，随手一拍就是大片。", features: ["雅拉雪山下的木雅金塔", "姑弄村溪流露营", "318国道精华段"], route: "成都 -> 康定 -> 折多山 -> 新都桥 -> 塔公草原 -> 墨石公园 -> 成都" },
    'quest18': { title: "阆中古城 (Langzhong)", desc: "中国四大古城之一，春节文化发源地。风水格局保存完好。", features: ["登上中天楼俯瞰八卦城", "嘉陵江游船", "历史人文沉浸感"], route: "成都 -> 南充 -> 阆中古城 -> 张飞庙 -> 锦屏山 -> 滕王阁 -> 成都" },
    'quest19': { title: "青岛 (Qingdao)", desc: "山东半岛，帆船之都。这里有你熟悉的德语建筑和好喝的啤酒。", features: ["奥帆中心出海(船)", "八大关万国建筑(Cosplay)", "德语区语言优势"], route: "青岛 -> 八大关 -> 栈桥 -> 奥帆中心 -> 啤酒博物馆 -> 崂山 -> 返程" },
    'quest20': { title: "大理 (Dali)", desc: "云南大理，苍山洱海。这里的风是自由的，时间是静止的。", features: ["洱海S湾骑行", "双廊古镇海景房", "龙龛码头日出"], route: "大理古城 -> 洱海环湖(S湾/双廊) -> 喜洲古镇 -> 苍山索道 -> 返程" },
    'quest21': { title: "万宁 (Wanning)", desc: "海南东线，比三亚更年轻、更野。冲浪文化浓厚。", features: ["日月湾冲浪体验", "石梅湾最美沿海公路", "加井岛潜水"], route: "海口 -> 万宁 -> 日月湾 -> 石梅湾 -> 神州半岛 -> 三亚/海口返程" },
    'quest22': { title: "澳门 (Macau)", desc: "东方的拉斯维加斯。极尽奢华的酒店群和保存完好的葡式建筑。", features: ["大赛车博物馆", "伦敦人/威尼斯人(Cosplay)", "米其林餐厅巡礼"], route: "珠海拱北 -> 大三巴牌坊 -> 威尼斯人 -> 伦敦人 -> 官也街 -> 澳门塔 -> 返程" },
    'quest23': { title: "瑞士 (Switzerland)", desc: "世界公园，滑雪者的终极梦想。德法语言优势在这里可以发挥到极致。", features: ["少女峰/马特洪峰滑雪", "布里恩茨湖游船", "黄金列车观光"], route: "苏黎世 -> 卢塞恩 -> 因特拉肯 -> 少女峰 -> 采尔马特 -> 伯尔尼 -> 苏黎世" },
    'quest24': { title: "新西兰 (New Zealand)", desc: "南半球的中土世界。拥有冰川、峡湾、湖泊等极致地貌。", features: ["皇后镇喷射快艇(船)", "米尔福德峡湾游轮", "霍比特人村"], route: "基督城 -> 蒂卡普湖 -> 库克山 -> 皇后镇 -> 米尔福德峡湾 -> 瓦纳卡 -> 基督城" },
    'quest25': { 
        title: "腾冲 + 芒市 (Tengchong + Mangshi)", 
        desc: "云南边陲的双城记。左手火山热海的汉家古韵，右手金塔银塔的傣式风情。", 
        season: "❄️ 冬季 (Winter)",
        days: "5 Days",
        seasonal_variants: { winter: 'quest25', summer: 'quest25_summer' },
        features: ["热海大滚锅 & 火山地质", "高黎贡山徒步 (Rainforest Hiking)", "芒市金塔银塔 & 孔雀宴"], 
        route: "腾冲驼峰机场 -> 热海 -> 高黎贡山 -> 芒市 -> 勐焕大金塔 -> 芒市机场",
        hasPlan: true,
        plan: `
        <div class="module-box">
            <div class="module-title">📋 1. 简报 (Mission Briefing)</div>
            <p><strong>目标:</strong> 探索火山地质奇观，徒步高黎贡山，享受芒市的异域美食。</p>
            <p><strong>关键词:</strong> 温泉 · 徒步 · 美食 · 边境风情</p>
        </div>

        <div class="module-box">
            <div class="module-title">🗺️ 2. 抽象地图 (Abstract Map)</div>
            <div class="map-container">
                <!-- Dual City Flow SVG Stick Figure Map (Fixed) -->
                <svg width="100%" height="300" viewBox="0 0 600 300" style="font-family: 'Comic Sans MS', 'Microsoft YaHei', sans-serif;">
                    <defs>
                        <marker id="arrow-black" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
                            <path d="M0,0 L0,6 L9,3 z" fill="black" />
                        </marker>
                        <marker id="arrow-flight" markerWidth="12" markerHeight="12" refX="6" refY="6" orient="auto">
                            <text x="0" y="9" font-size="12">✈️</text>
                        </marker>
                    </defs>

                    <!-- Background Region Hint -->
                    <rect x="200" y="20" width="380" height="260" rx="20" fill="#fcf3cf" stroke="#f1c40f" stroke-dasharray="5,5" opacity="0.3" />
                    <text x="390" y="270" text-anchor="middle" font-size="16" fill="#d4ac0d" font-weight="bold">滇西边陲 (腾冲-芒市)</text>

                    <!-- Chengdu (Home) -->
                    <g transform="translate(60, 250)">
                        <circle r="6" fill="#e74c3c" />
                        <text x="0" y="25" text-anchor="middle" font-size="16" font-weight="bold" fill="#333">成都</text>
                        <text x="0" y="45" text-anchor="middle" font-size="12" fill="#7f8c8d">(出发地)</text>
                    </g>

                    <!-- Flight Path: Chengdu -> Tengchong -->
                    <path d="M60,250 Q120,100 220,80" fill="none" stroke="#bdc3c7" stroke-width="2" stroke-dasharray="8,4" />
                    <text x="130" y="150" text-anchor="middle" font-size="12" fill="#95a5a6" transform="rotate(-45, 130, 150)">直飞 1.5h</text>

                    <!-- Tengchong Hub -->
                    <g transform="translate(220, 80)">
                        <circle r="8" fill="#e74c3c" stroke="white" stroke-width="2"/>
                        <text x="0" y="-15" text-anchor="middle" font-size="18" font-weight="bold" fill="#c0392b">腾冲</text>
                        <text x="0" y="-35" text-anchor="middle" font-size="12" fill="#7f8c8d">火山/热海</text>
                    </g>

                    <!-- Path: Tengchong -> Mangshi (via Gaoligong) -->
                    <path d="M220,80 Q300,120 450,200" fill="none" stroke="#333" stroke-width="3" stroke-dasharray="8,4" marker-end="url(#arrow-black)"/>
                    
                    <!-- Gaoligong Mountain (On the way) -->
                    <g transform="translate(320, 130)">
                        <circle r="5" fill="white" stroke="#27ae60" stroke-width="2"/>
                        <text x="10" y="5" text-anchor="start" font-size="14" font-weight="bold" fill="#27ae60">高黎贡山</text>
                        <text x="10" y="25" text-anchor="start" font-size="12" fill="#7f8c8d">徒步穿越</text>
                    </g>

                    <!-- Mangshi Hub -->
                    <g transform="translate(450, 200)">
                        <circle r="8" fill="#f1c40f" stroke="white" stroke-width="2"/>
                        <text x="0" y="25" text-anchor="middle" font-size="18" font-weight="bold" fill="#d35400">芒市</text>
                        <text x="0" y="45" text-anchor="middle" font-size="12" fill="#7f8c8d">大金塔/孔雀宴</text>
                    </g>

                    <!-- Return Flight: Mangshi -> Chengdu -->
                    <path d="M450,200 Q300,280 60,250" fill="none" stroke="#bdc3c7" stroke-width="2" stroke-dasharray="8,4" />
                    <text x="250" y="260" text-anchor="middle" font-size="12" fill="#95a5a6">返程直飞</text>

                    <!-- Compass -->
                    <g transform="translate(550, 40)">
                        <text x="0" y="-15" text-anchor="middle" font-size="12" font-weight="bold" fill="#bdc3c7">北</text>
                        <path d="M0,-10 L-5,5 L0,2 L5,5 Z" fill="#bdc3c7" />
                    </g>
                </svg>
            </div>
        </div>

        <div class="module-box">
            <div class="module-title">⏳ 3. 时间轴 (Timeline - 5 Days)</div>
            
            <div class="day-block">
                <h3>Day 1: 抵达腾冲 - 古镇浅看</h3>
                <div class="time-slot"><strong>📍 地点:</strong> 云南省保山市腾冲市 · 和顺古镇</div>
                <div class="time-slot"><strong>🌡️ 气温:</strong> 约 15°C (舒适)</div>
                <div class="time-slot"><strong>🌞 上午:</strong> 飞抵【腾冲驼峰机场】(12:00前)，打车前往【和顺古镇】(约30分钟，¥40-50)。</div>
                <div class="time-slot"><strong>☕ 下午:</strong> 【和顺古镇】顺路浅看 (1-2h)。不推荐深度游览人造景点，仅打卡图书馆和稻田边喝咖啡。</div>
                <div class="time-slot"><strong>🌙 晚上:</strong> 晚餐尝试【大救驾】。早点休息，为徒步储备体力。</div>
                <div class="lodging-tag">🛌 住宿: 腾冲市区/古镇周边 (方便次日出发)</div>
            </div>

            <div class="day-block">
                <h3>Day 2: 火山与热海 - 冰火两重天</h3>
                <div class="time-slot"><strong>📍 地点:</strong> 云南省保山市腾冲市 · 马站乡/清水乡</div>
                <div class="time-slot"><strong>🌡️ 气温:</strong> 约 12°C - 18°C</div>
                <div class="time-slot"><strong>🌞 上午:</strong> 打车前往【火山地质公园】(约¥60)。看大空山、小空山。体验热气球俯瞰火山口。</div>
                <div class="time-slot"><strong>☕ 下午:</strong> 转战【热海景区】(约¥80)。看【大滚锅】。核心体验：在【热海浴谷】泡真正的火山硫磺温泉，缓解疲劳。</div>
                <div class="time-slot"><strong>🌙 晚上:</strong> 返回市区，自由觅食。</div>
                <div class="lodging-tag">🛌 住宿: 腾冲市区</div>
            </div>

            <div class="day-block">
                <h3>Day 3: 高黎贡山徒步 - 转场芒市</h3>
                <div class="time-slot"><strong>📍 地点:</strong> 腾冲 -> 芒市 (100km)</div>
                <div class="time-slot"><strong>🌡️ 气温:</strong> 5°C - 12°C (山区较冷)</div>
                <div class="time-slot"><strong>🌞 上午:</strong> 参加【高黎贡山轻徒步】(约3-4h)，体验原始森林。</div>
                <div class="time-slot"><strong>☕ 下午:</strong> 乘车前往芒市。<strong>(注: 腾冲无高铁，打车约¥250-300，拼车约¥60/人，车程2h)</strong></div>
                <div class="time-slot"><strong>🌙 晚上:</strong> 抵达芒市，入住【孔雀湖】附近，吃孔雀宴。</div>
            </div>

            <div class="day-block">
                <h3>Day 4: 金塔银塔 - 异域幻梦</h3>
                <div class="time-slot"><strong>📍 地点:</strong> 云南省德宏州芒市 · 雷牙让山</div>
                <div class="time-slot"><strong>🌡️ 气温:</strong> 约 18°C - 22°C (较热)</div>
                <div class="time-slot"><strong>🌞 上午:</strong> 前往【树包塔】，看大自然的神奇共生。逛逛【百思特美食城】，喝一杯泡鲁达。</div>
                <div class="time-slot"><strong>☕ 下午:</strong> 登顶雷牙让山，游览【勐焕大金塔】(亚洲第一空心佛塔) 和 【银塔】。这里是Cosplay和写真的绝佳地。</div>
                <div class="time-slot"><strong>🌙 晚上:</strong> 在银塔看日落和夜景，俯瞰整个芒市灯火。</div>
                <div class="lodging-tag">🛌 住宿: 芒市市区酒店</div>
            </div>

            <div class="day-block">
                <h3>Day 5: 傣味早市 - 返程</h3>
                <div class="time-slot"><strong>📍 地点:</strong> 云南省德宏州芒市 -> 芒市机场</div>
                <div class="time-slot"><strong>🌞 上午:</strong> 逛【宏利综合市场】(打车起步价)，看看没见过的热带水果和野菜。吃一碗正宗的过手米线。</div>
                <div class="time-slot"><strong>☕ 下午:</strong> 打车前往【德宏芒市机场】(约¥20-30，建议提前 2 小时抵达机场)，结束旅程。</div>
            </div>
        </div>

        <div class="module-box">
            <div class="module-title">💰 4. 金币消耗 (Cost Breakdown)</div>
            <table class="cost-table">
                <tr>
                    <th>项目 (Item)</th>
                    <th>预算 (Budget)</th>
                    <th>备注 (Note)</th>
                </tr>
                <tr>
                    <td>✈️ 交通</td>
                    <td>1500-3000</td>
                    <td>机票 + 少量打车 (Taxi优先)</td>
                </tr>
                <tr>
                    <td>🛌 住宿</td>
                    <td>1000-2000</td>
                    <td>4晚住宿</td>
                </tr>
                <tr>
                    <td>🥘 餐饮</td>
                    <td>600-1200</td>
                    <td>芒市物价低，丰俭由人</td>
                </tr>
                <tr>
                    <td>🎫 活动/向导</td>
                    <td>800-1500</td>
                    <td>高黎贡徒步向导费 + 温泉 + 门票</td>
                </tr>
                <tr style="background-color: #f0f0f0; border-top: 2px solid black;">
                    <td><strong>💰 总计 (Total)</strong></td>
                    <td><strong>3900 - 7700</strong></td>
                    <td><strong>含徒步向导 (Guide Included)</strong></td>
                </tr>
            </table>
        </div>

        <div class="module-box">
            <div class="module-title">🎒 5. 装备 (Loadout)</div>
            <div class="pros-cons">
                <div style="border-right: 2px dashed #ccc; padding-right: 10px;">
                    <h4 class="pros">✅ 推荐 (Pros)</h4>
                    <ul>
                        <li>高黎贡山徒步：真正的自然接触</li>
                        <li>芒市美食密度极高</li>
                        <li>金塔银塔极其出片</li>
                    </ul>
                </div>
                <div style="padding-left: 10px;">
                    <h4 class="cons">❌ 注意 (Cons)</h4>
                    <ul>
                        <li>古镇商业化严重，建议快速通过</li>
                        <li>徒步需穿舒适防滑鞋</li>
                        <li>芒市紫外线极强</li>
                    </ul>
                </div>
            </div>
            <div style="margin-top: 15px; border-top: 2px solid #eee; padding-top: 10px;">
                <strong>🎒 必带装备 (Must-Have):</strong> 登山鞋(徒步)、泳衣(泡温泉)、防晒霜(芒市必备)、肠胃药、冲锋衣(山区保暖)。
            </div>
        </div>
        `
    },
    'quest25_summer': { 
        title: "腾冲 + 芒市 (Summer)", 
        desc: "云南边陲的双城记。夏季的雨林与湿地，体验完全不同的绿色版图。", 
        season: "🌿 夏季 (Summer)",
        isVariant: true,
        seasonal_variants: { winter: 'quest25', summer: 'quest25_summer' },
        features: ["北海湿地划船", "热带雨林瀑布", "芒市避暑美食"], 
        route: "腾冲驼峰机场 -> 北海湿地 -> 高黎贡瀑布 -> 芒市 -> 勐焕大金塔 -> 芒市机场",
        hasPlan: true,
        plan: `
        <div class="module-box">
            <div class="module-title">📋 1. 简报 (Mission Briefing)</div>
            <p><strong>目标:</strong> 漫步北海湿地，穿越雨林瀑布，在芒市的雨夜吃烧烤。</p>
            <p><strong>关键词:</strong> 避暑 · 湿地 · 雨林 · 傣味</p>
        </div>

        <div class="module-box">
            <div class="module-title">🗺️ 2. 抽象地图 (Abstract Map)</div>
            <div class="map-container">
                <svg width="100%" height="300" viewBox="0 0 600 300" style="font-family: 'Comic Sans MS', 'Microsoft YaHei', sans-serif;">
                    <defs>
                        <marker id="arrow-green" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
                            <path d="M0,0 L0,6 L9,3 z" fill="#2ecc71" />
                        </marker>
                        <marker id="arrow-flight" markerWidth="12" markerHeight="12" refX="6" refY="6" orient="auto">
                            <text x="0" y="9" font-size="12">✈️</text>
                        </marker>
                    </defs>

                    <!-- Background Region Hint -->
                    <rect x="200" y="20" width="380" height="260" rx="20" fill="#e8f8f5" stroke="#1abc9c" stroke-dasharray="5,5" opacity="0.3" />
                    <text x="390" y="270" text-anchor="middle" font-size="16" fill="#16a085" font-weight="bold">滇西雨林 (夏季)</text>

                    <!-- Chengdu (Home) -->
                    <g transform="translate(60, 250)">
                        <circle r="6" fill="#e74c3c" />
                        <text x="0" y="25" text-anchor="middle" font-size="16" font-weight="bold" fill="#333">成都</text>
                        <text x="0" y="45" text-anchor="middle" font-size="12" fill="#7f8c8d">(出发地)</text>
                    </g>

                    <!-- Flight Path -->
                    <path d="M60,250 Q120,100 220,80" fill="none" stroke="#bdc3c7" stroke-width="2" stroke-dasharray="8,4" />
                    <text x="130" y="150" text-anchor="middle" font-size="12" fill="#95a5a6" transform="rotate(-45, 130, 150)">直飞 1.5h</text>

                    <!-- Tengchong Hub -->
                    <g transform="translate(220, 80)">
                        <circle r="8" fill="#2ecc71" stroke="white" stroke-width="2"/>
                        <text x="0" y="-15" text-anchor="middle" font-size="18" font-weight="bold" fill="#27ae60">腾冲</text>
                        <text x="0" y="-35" text-anchor="middle" font-size="12" fill="#7f8c8d">北海湿地</text>
                    </g>

                    <!-- Path: Tengchong -> Mangshi (via Rainforest) -->
                    <path d="M220,80 Q300,120 450,200" fill="none" stroke="#2ecc71" stroke-width="3" stroke-dasharray="8,4" marker-end="url(#arrow-green)"/>

                    <!-- Rainforest Icon -->
                    <g transform="translate(320, 130)">
                        <text x="0" y="0" text-anchor="middle" font-size="20">🌧️</text>
                        <text x="0" y="20" text-anchor="middle" font-size="12" font-weight="bold" fill="#27ae60">雨林穿越</text>
                    </g>

                    <!-- Mangshi Hub -->
                    <g transform="translate(450, 200)">
                        <circle r="8" fill="#f1c40f" stroke="white" stroke-width="2"/>
                        <text x="0" y="25" text-anchor="middle" font-size="18" font-weight="bold" fill="#d35400">芒市</text>
                        <text x="0" y="45" text-anchor="middle" font-size="12" fill="#7f8c8d">美食/夜雨</text>
                    </g>

                    <!-- Return Flight -->
                    <path d="M450,200 Q300,280 60,250" fill="none" stroke="#bdc3c7" stroke-width="2" stroke-dasharray="8,4" />

                    <!-- Compass -->
                    <g transform="translate(550, 40)">
                        <text x="0" y="-15" text-anchor="middle" font-size="12" font-weight="bold" fill="#bdc3c7">北</text>
                        <path d="M0,-10 L-5,5 L0,2 L5,5 Z" fill="#bdc3c7" />
                    </g>
                </svg>
            </div>
        </div>

        <div class="module-box">
            <div class="module-title">⏳ 3. 时间轴 (Timeline - 5 Days)</div>
            
            <div class="day-block">
                <h3>Day 1: 抵达腾冲 - 湿地泛舟</h3>
                <div class="time-slot"><strong>📍 地点:</strong> 腾冲 · 北海湿地</div>
                <div class="time-slot"><strong>🌡️ 气温:</strong> 约 25°C</div>
                <div class="time-slot"><strong>🌞 上午:</strong> 飞抵腾冲。打车前往【北海湿地】。</div>
                <div class="time-slot"><strong>☕ 下午:</strong> 在湿地体验【古法划草排】，看鸢尾花海(季节性)。避开古镇人流。</div>
                <div class="time-slot"><strong>🌙 晚上:</strong> 宿腾冲市区，享受凉爽夏夜。</div>
            </div>

            <div class="day-block">
                <h3>Day 2: 叠水河瀑布 - 城市里的瀑布</h3>
                <div class="time-slot"><strong>📍 地点:</strong> 腾冲市区</div>
                <div class="time-slot"><strong>🌡️ 气温:</strong> 约 26°C</div>
                <div class="time-slot"><strong>🌞 上午:</strong> 游览【叠水河瀑布】，这是唯一的城市火山堰塞瀑布。</div>
                <div class="time-slot"><strong>☕ 下午:</strong> 找个茶馆喝茶，避开午后雷雨。</div>
                <div class="time-slot"><strong>🌙 晚上:</strong> 菌子火锅！夏天是吃菌子的季节 (注意辨别毒性)。</div>
            </div>

            <div class="day-block">
                <h3>Day 3: 雨林瀑布徒步 - 芒市</h3>
                <div class="time-slot"><strong>📍 地点:</strong> 腾冲 -> 芒市</div>
                <div class="time-slot"><strong>🌡️ 气温:</strong> 20°C - 28°C</div>
                <div class="time-slot"><strong>🌞 上午:</strong> 顺路探访【莫里热带雨林】(靠近瑞丽/芒市方向)，看巨型瀑布。</div>
                <div class="time-slot"><strong>☕ 下午:</strong> 抵达芒市。喝一杯【泡鲁达】解暑。</div>
                <div class="time-slot"><strong>🌙 晚上:</strong> 芒市夜市，烧烤配啤酒。</div>
            </div>

            <div class="day-block">
                <h3>Day 4: 银塔雨景 - 别样风情</h3>
                <div class="time-slot"><strong>📍 地点:</strong> 芒市 · 银塔</div>
                <div class="time-slot"><strong>🌡️ 气温:</strong> 约 28°C (闷热)</div>
                <div class="time-slot"><strong>🌞 上午:</strong> 酒店睡到自然醒，避开上午的暴晒。</div>
                <div class="time-slot"><strong>☕ 下午:</strong> 游览【银塔】。雨季的银塔在云雾中更显神秘。</div>
                <div class="time-slot"><strong>🌙 晚上:</strong> 找一家空调足的傣餐厅，享受酸辣开胃菜。</div>
            </div>

            <div class="day-block">
                <h3>Day 5: 市场与返程</h3>
                <div class="time-slot"><strong>📍 地点:</strong> 芒市 -> 机场</div>
                <div class="time-slot"><strong>🌞 上午:</strong> 购买热带水果 (芒果、菠萝蜜)。</div>
                <div class="time-slot"><strong>☕ 下午:</strong> 前往机场，结束夏日避暑之旅。</div>
            </div>
        </div>

        <div class="module-box">
            <div class="module-title">💰 4. 金币消耗 (Cost Breakdown)</div>
            <table class="cost-table">
                <tr>
                    <th>项目 (Item)</th>
                    <th>预算 (Budget)</th>
                    <th>备注 (Note)</th>
                </tr>
                <tr>
                    <td>✈️ 交通</td>
                    <td>1500-3000</td>
                    <td>暑期机票可能略贵</td>
                </tr>
                <tr>
                    <td>🛌 住宿</td>
                    <td>1000-2000</td>
                    <td>淡季/旺季波动</td>
                </tr>
                <tr>
                    <td>🥘 餐饮</td>
                    <td>800-1500</td>
                    <td>菌子火锅较贵</td>
                </tr>
                <tr style="background-color: #f0f0f0; border-top: 2px solid black;">
                    <td><strong>💰 总计 (Total)</strong></td>
                    <td><strong>4000 - 7500</strong></td>
                    <td><strong>含菌子盛宴</strong></td>
                </tr>
            </table>
        </div>

        <div class="module-box">
            <div class="module-title">🎒 5. 装备 (Loadout)</div>
            <div class="pros-cons">
                <div style="border-right: 2px dashed #ccc; padding-right: 10px;">
                    <h4 class="pros">✅ 推荐 (Pros)</h4>
                    <ul>
                        <li>野生菌火锅 (Seasonal Special)</li>
                        <li>北海湿地景色最佳</li>
                        <li>瀑布水量充沛</li>
                    </ul>
                </div>
                <div style="padding-left: 10px;">
                    <h4 class="cons">❌ 注意 (Cons)</h4>
                    <ul>
                        <li>雨季需常备雨具</li>
                        <li>蚊虫较多，备好驱蚊水</li>
                        <li>注意食用菌子安全</li>
                    </ul>
                </div>
            </div>
        </div>
        `
    },
    'quest26': { 
        title: "西双版纳 (Xishuangbanna)", 
        desc: "逃离寒冬的避难所。热带雨林、野生大象和傣族风情。不仅仅是夜市，更是自然的回归。", 
        season: "❄️ 冬季 (Winter)",
        days: "5 Days",
        features: ["热带雨林徒步 (Rainforest Hiking)", "中科院植物园 (Botany)", "野象谷 (Elephants)"], 
        route: "景洪 -> 野象谷 -> 植物园 -> 曼听公园 -> 景洪",
        hasPlan: true,
        plan: `
        <div class="module-box">
            <div class="module-title">📋 1. 基本情报 (Briefing)</div>
            <div class="briefing-grid">
                <div><strong>🚗 出行方式:</strong> 优先网约车/出租车 (滴滴很方便)</div>
                <div><strong>💰 预算范围:</strong> 3500 - 6000 RMB</div>
                <div><strong>⏱️ 预期时间:</strong> 5 Days</div>
                <div><strong>🌡️ 气温推测:</strong> 15°C - 28°C (温暖)</div>
                <div><strong>✈️ 飞行参考:</strong> 直飞版纳 (Jinghong) 机场</div>
                <div class="atmosphere-text">
                    <p>当全国都在穿羽绒服时，这里可以穿短袖吃冰棍。版纳不仅有喧闹的夜市，更有静谧的雨林。去野象谷寻找巨兽的踪迹，去植物园看那些疯狂生长的绿色生命。</p>
                    <p style="font-size: 0.9em; color: #666;"><strong>Note:</strong> 避免在春节期间前往 (人挤人)。</p>
                </div>
            </div>
        </div>

        <div class="module-box">
            <div class="module-title">🗺️ 2. 抽象地图 (Abstract Map)</div>
            <div class="map-container">
                <svg width="100%" height="300" viewBox="0 0 600 300" style="font-family: 'Comic Sans MS', 'Microsoft YaHei', sans-serif;">
                    <defs>
                        <marker id="arrow-green" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
                            <path d="M0,0 L0,6 L9,3 z" fill="#2ecc71" />
                        </marker>
                        <marker id="arrow-flight" markerWidth="12" markerHeight="12" refX="6" refY="6" orient="auto">
                            <text x="0" y="9" font-size="12">✈️</text>
                        </marker>
                    </defs>

                    <!-- Background Region Hint -->
                    <rect x="200" y="20" width="380" height="260" rx="20" fill="#e8f8f5" stroke="#16a085" stroke-dasharray="5,5" opacity="0.3" />
                    <text x="390" y="270" text-anchor="middle" font-size="16" fill="#16a085" font-weight="bold">西双版纳 (热带雨林)</text>

                    <!-- Chengdu (Home) -->
                    <g transform="translate(60, 250)">
                        <circle r="6" fill="#e74c3c" />
                        <text x="0" y="25" text-anchor="middle" font-size="16" font-weight="bold" fill="#333">成都</text>
                        <text x="0" y="45" text-anchor="middle" font-size="12" fill="#7f8c8d">(出发地)</text>
                    </g>

                    <!-- Flight Path -->
                    <path d="M60,250 Q120,100 250,150" fill="none" stroke="#bdc3c7" stroke-width="2" stroke-dasharray="8,4" />
                    <text x="130" y="160" text-anchor="middle" font-size="12" fill="#95a5a6" transform="rotate(-30, 130, 160)">直飞 2h</text>

                    <!-- Jinghong Hub -->
                    <g transform="translate(250, 150)">
                        <circle r="10" fill="#e67e22" stroke="white" stroke-width="2"/>
                        <text x="-30" y="0" text-anchor="end" font-size="18" font-weight="bold" fill="#d35400">景洪</text>
                        <text x="-30" y="20" text-anchor="end" font-size="12" fill="#7f8c8d">星光夜市</text>
                    </g>

                    <!-- Loop Path: Jinghong -> Wild Elephant -> Botanical Garden -> Jinghong -->
                    <path d="M250,150 L280,60 L450,150 L250,150" fill="none" stroke="#2ecc71" stroke-width="3" stroke-dasharray="8,4" marker-end="url(#arrow-green)"/>

                    <!-- Wild Elephant Valley (North) -->
                    <g transform="translate(280, 60)">
                        <circle r="6" fill="white" stroke="#2ecc71" stroke-width="2"/>
                        <text x="0" y="-15" text-anchor="middle" font-size="16" font-weight="bold" fill="#27ae60">野象谷</text>
                        <text x="0" y="-35" text-anchor="middle" font-size="12" fill="#7f8c8d">雨林牧象</text>
                    </g>

                    <!-- Botanical Garden (East) -->
                    <g transform="translate(450, 150)">
                        <circle r="6" fill="white" stroke="#2ecc71" stroke-width="2"/>
                        <text x="15" y="5" text-anchor="start" font-size="16" font-weight="bold" fill="#27ae60">植物园</text>
                        <text x="15" y="25" text-anchor="start" font-size="12" fill="#7f8c8d">中科院/热气球</text>
                    </g>
                    
                    <!-- Manting Park (South) -->
                    <g transform="translate(280, 200)">
                        <circle r="6" fill="white" stroke="#e67e22" stroke-width="2"/>
                        <text x="0" y="25" text-anchor="middle" font-size="14" font-weight="bold" fill="#d35400">曼听公园</text>
                    </g>
                    <!-- Connect Manting to loop -->
                    <line x1="250" y1="150" x2="280" y2="200" stroke="#e67e22" stroke-width="2" stroke-dasharray="5,5" />

                    <!-- Return Flight -->
                    <path d="M250,150 Q120,200 60,250" fill="none" stroke="#bdc3c7" stroke-width="2" stroke-dasharray="8,4" opacity="0.5"/>

                    <!-- Compass -->
                    <g transform="translate(550, 40)">
                        <text x="0" y="-15" text-anchor="middle" font-size="12" font-weight="bold" fill="#bdc3c7">北</text>
                        <path d="M0,-10 L-5,5 L0,2 L5,5 Z" fill="#bdc3c7" />
                    </g>
                </svg>
            </div>
        </div>

        <div class="module-box">
            <div class="module-title">⏳ 3. 时间轴 (Timeline - 5 Days)</div>
            <div class="day-block">
                <h3>Day 1: 落地热带 - 星光夜市</h3>
                <div class="time-slot"><strong>📍 地点:</strong> 景洪 · 告庄西双景</div>
                <div class="time-slot"><strong>🌡️ 气温:</strong> 22°C (晚风舒适)</div>
                <div class="time-slot"><strong>🌞 上午:</strong> 飞抵西双版纳。脱掉羽绒服，换上夏装。</div>
                <div class="time-slot"><strong>☕ 下午:</strong> 入住告庄附近酒店。</div>
                <div class="time-slot"><strong>🌙 晚上:</strong> 逛【星光夜市】。虽然商业化，但拍照确实好看 (Cosplay傣妹/在逃公主)。吃傣味烧烤。</div>
            </div>

            <div class="day-block">
                <h3>Day 2: 野象谷 - 雨林牧象</h3>
                <div class="time-slot"><strong>📍 地点:</strong> 野象谷 (距市区30km)</div>
                <div class="time-slot"><strong>🌡️ 气温:</strong> 25°C</div>
                <div class="time-slot"><strong>🌞 上午:</strong> 打车/直通车前往【野象谷】。不看大象表演，去走【高空栈道】寻找野生亚洲象。</div>
                <div class="time-slot"><strong>☕ 下午:</strong> 参加周边的【雨林轻徒步】(需预约)，在雨林里吃一顿象餐。</div>
                <div class="time-slot"><strong>🌙 晚上:</strong> 回市区按摩 (泰式马杀鸡)。</div>
            </div>

            <div class="day-block">
                <h3>Day 3: 植物园 - 绿色的海洋</h3>
                <div class="time-slot"><strong>📍 地点:</strong> 中科院植物园 (勐仑镇)</div>
                <div class="time-slot"><strong>🌡️ 气温:</strong> 28°C (较热)</div>
                <div class="time-slot"><strong>🌞 上午:</strong> 这是一个国家级科研机构。必看【王莲池】和【热气球】。</div>
                <div class="time-slot"><strong>☕ 下午:</strong> 游览东区 (绿石林)，这里是真正的原始热带雨林，人少景美。</div>
                <div class="time-slot"><strong>🌙 晚上:</strong> 宿勐仑镇或返回告庄。</div>
            </div>

            <div class="day-block">
                <h3>Day 4: 曼听公园 - 曾经的御花园</h3>
                <div class="time-slot"><strong>📍 地点:</strong> 景洪市区</div>
                <div class="time-slot"><strong>🌡️ 气温:</strong> 26°C</div>
                <div class="time-slot"><strong>🌞 上午:</strong> 游览【曼听公园】和【总佛寺】。金碧辉煌的建筑，适合人文摄影。</div>
                <div class="time-slot"><strong>☕ 下午:</strong> 在江边找个咖啡馆发呆。体验慢生活。</div>
                <div class="time-slot"><strong>🌙 晚上:</strong> 尝试【菌子火锅】(如果是菌子季) 或 【香茅草烤鱼】。</div>
            </div>

            <div class="day-block">
                <h3>Day 5: 傣族村寨与返程</h3>
                <div class="time-slot"><strong>📍 地点:</strong> 景洪 -> 机场</div>
                <div class="time-slot"><strong>🌞 上午:</strong> 去一个非景点的傣族村寨 (如曼远村，向往的生活拍摄地) 转转。</div>
                <div class="time-slot"><strong>☕ 下午:</strong> 带着热带水果 (菠萝蜜/芒果) 返程。</div>
            </div>
        </div>

        <div class="module-box">
            <div class="module-title">💰 4. 金币消耗 (Cost Breakdown)</div>
            <table class="cost-table">
                <tr><th>项目</th><th>预算</th><th>备注</th></tr>
                <tr><td>✈️ 交通</td><td>1500-2500</td><td>机票</td></tr>
                <tr><td>🚗 打车</td><td>500-800</td><td>网约车/包车去植物园</td></tr>
                <tr><td>🛌 住宿</td><td>1000-2000</td><td>告庄客栈/酒店</td></tr>
                <tr><td>🥘 餐饮</td><td>600-1000</td><td>夜市小吃便宜</td></tr>
                <tr style="background:#f0f0f0;border-top:2px solid black;"><td><strong>Total</strong></td><td><strong>3600 - 6300</strong></td><td><strong>暖冬度假</strong></td></tr>
            </table>
        </div>

        <div class="module-box">
            <div class="module-title">🎒 5. 装备 (Loadout)</div>
            <div class="pros-cons">
                <div style="border-right: 2px dashed #ccc;">
                    <h4 class="pros">✅ 推荐</h4>
                    <ul><li>气候温暖舒适</li><li>雨林徒步体验好</li><li>美食种类丰富</li></ul>
                </div>
                <div style="padding-left: 10px;">
                    <h4 class="cons">❌ 注意</h4>
                    <ul><li>蚊虫非常多 (备驱蚊水)</li><li>夜市价格虚高 (需砍价)</li><li>防晒</li></ul>
                </div>
            </div>
        </div>
        `
    },

    quest40: {
        title: "若尔盖草原 (Ruoergai)",
        season: "🌿 夏季 (Summer)",
        hasPlan: false,
        content: `
        <div class="module-box">
            <div class="module-title">📋 1. 简报 (Mission Briefing)</div>
            <p><strong>目标:</strong> 逃离酷暑，在川西大草原骑马，看九曲黄河第一湾的日落。</p>
            <p><strong>关键词:</strong> 避暑 · 草原 · 湿地 · 藏族文化</p>
        </div>

        <div class="module-box">
            <div class="module-title">🗺️ 2. 抽象地图 (Abstract Map)</div>
            <div class="map-container">
                <svg width="100%" height="300" viewBox="0 0 600 300" style="font-family: 'Comic Sans MS', 'Microsoft YaHei', sans-serif;">
                    <defs>
                        <marker id="arrow-blue" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
                            <path d="M0,0 L0,6 L9,3 z" fill="#2980b9" />
                        </marker>
                    </defs>
                    <!-- Background Region Hint -->
                    <rect x="250" y="20" width="330" height="260" rx="20" fill="#f0f8ff" stroke="#bdc3c7" stroke-dasharray="5,5" />
                    <text x="415" y="270" text-anchor="middle" font-size="14" fill="#95a5a6" font-weight="bold">川西若尔盖区域</text>
                    <!-- Chengdu (Home) -->
                    <g transform="translate(60, 150)">
                        <circle r="6" fill="#e74c3c" />
                        <text x="0" y="25" text-anchor="middle" font-size="16" font-weight="bold" fill="#333">成都</text>
                        <text x="0" y="45" text-anchor="middle" font-size="12" fill="#7f8c8d">(出发地)</text>
                    </g>
                    <!-- Path to Hub -->
                    <path d="M60,150 Q200,50 350,230" fill="none" stroke="#bdc3c7" stroke-width="2" stroke-dasharray="8,4" />
                    <text x="200" y="100" text-anchor="middle" font-size="12" fill="#bdc3c7" transform="rotate(-15, 200, 100)">自驾/大巴 6-8h</text>
                    <!-- Hub: Ruoergai -->
                    <g transform="translate(350, 230)">
                        <circle r="8" fill="#2980b9" stroke="white" stroke-width="2"/>
                        <text x="0" y="25" text-anchor="middle" font-size="16" font-weight="bold" fill="#2980b9">若尔盖</text>
                        <text x="0" y="45" text-anchor="middle" font-size="12" fill="#555">集散中心</text>
                    </g>
                    <!-- Route Loop -->
                    <path d="M350,230 L480,130 L350,60 L350,230" fill="none" stroke="#2980b9" stroke-width="3" stroke-dasharray="8,4" marker-end="url(#arrow-blue)"/>
                    <!-- Flower Lake -->
                    <g transform="translate(480, 130)">
                        <circle r="5" fill="white" stroke="#2980b9" stroke-width="2"/>
                        <text x="15" y="5" text-anchor="start" font-size="14" font-weight="bold" fill="#333">花湖</text>
                        <text x="15" y="25" text-anchor="start" font-size="12" fill="#7f8c8d">湿地/观鸟</text>
                    </g>
                    <!-- First Bend -->
                    <g transform="translate(350, 60)">
                        <circle r="5" fill="white" stroke="#2980b9" stroke-width="2"/>
                        <text x="0" y="-15" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">黄河九曲</text>
                        <text x="0" y="-35" text-anchor="middle" font-size="12" fill="#7f8c8d">落日/长河</text>
                    </g>
                    <!-- Compass -->
                    <g transform="translate(550, 40)">
                        <text x="0" y="-15" text-anchor="middle" font-size="12" font-weight="bold" fill="#bdc3c7">北</text>
                        <path d="M0,-10 L-5,5 L0,2 L5,5 Z" fill="#bdc3c7" />
                    </g>
                </svg>
            </div>
        </div>
        `
    },

    quest41: {
        title: "色达 (Seda)",
        season: "📅 全年 (All Year)",
        hasPlan: false,
        content: `
        <div class="module-box">
            <div class="module-title">📋 1. 简报 (Mission Briefing)</div>
            <p><strong>目标:</strong> 探访红色佛国，感受信仰的力量。</p>
            <p><strong>关键词:</strong> 信仰 · 红色房子 · 佛学院 · 人文</p>
        </div>

        <div class="module-box">
            <div class="module-title">🗺️ 2. 抽象地图 (Abstract Map)</div>
            <div class="map-container">
                <svg width="100%" height="300" viewBox="0 0 600 300" style="font-family: 'Comic Sans MS', 'Microsoft YaHei', sans-serif;">
                    <defs>
                        <marker id="arrow-blue" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
                            <path d="M0,0 L0,6 L9,3 z" fill="#2980b9" />
                        </marker>
                    </defs>
                    <!-- Background Region Hint -->
                    <rect x="250" y="20" width="330" height="260" rx="20" fill="#f0f8ff" stroke="#bdc3c7" stroke-dasharray="5,5" />
                    <text x="415" y="270" text-anchor="middle" font-size="14" fill="#95a5a6" font-weight="bold">川西色达区域</text>
                    <!-- Chengdu (Home) -->
                    <g transform="translate(60, 150)">
                        <circle r="6" fill="#e74c3c" />
                        <text x="0" y="25" text-anchor="middle" font-size="16" font-weight="bold" fill="#333">成都</text>
                        <text x="0" y="45" text-anchor="middle" font-size="12" fill="#7f8c8d">(出发地)</text>
                    </g>
                    <!-- Path to Hub -->
                    <path d="M60,150 Q200,50 350,230" fill="none" stroke="#bdc3c7" stroke-width="2" stroke-dasharray="8,4" />
                    <text x="200" y="100" text-anchor="middle" font-size="12" fill="#bdc3c7" transform="rotate(-15, 200, 100)">自驾/大巴 10h+</text>
                    <!-- Hub: Seda -->
                    <g transform="translate(350, 230)">
                        <circle r="8" fill="#2980b9" stroke="white" stroke-width="2"/>
                        <text x="0" y="25" text-anchor="middle" font-size="16" font-weight="bold" fill="#2980b9">色达县</text>
                        <text x="0" y="45" text-anchor="middle" font-size="12" fill="#555">集散中心</text>
                    </g>
                    <!-- Route Loop -->
                    <path d="M350,230 L480,130 L350,60 L350,230" fill="none" stroke="#2980b9" stroke-width="3" stroke-dasharray="8,4" marker-end="url(#arrow-blue)"/>
                    <!-- Wuming Buddhist Academy -->
                    <g transform="translate(480, 130)">
                        <circle r="5" fill="white" stroke="#2980b9" stroke-width="2"/>
                        <text x="15" y="5" text-anchor="start" font-size="14" font-weight="bold" fill="#333">五明佛学院</text>
                        <text x="15" y="25" text-anchor="start" font-size="12" fill="#7f8c8d">红房/讲经</text>
                    </g>
                    <!-- Tan Ke -->
                    <g transform="translate(350, 60)">
                        <circle r="5" fill="white" stroke="#2980b9" stroke-width="2"/>
                        <text x="0" y="-15" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">坛城</text>
                        <text x="0" y="-35" text-anchor="middle" font-size="12" fill="#7f8c8d">转经/祈福</text>
                    </g>
                    <!-- Compass -->
                    <g transform="translate(550, 40)">
                        <text x="0" y="-15" text-anchor="middle" font-size="12" font-weight="bold" fill="#bdc3c7">北</text>
                        <path d="M0,-10 L-5,5 L0,2 L5,5 Z" fill="#bdc3c7" />
                    </g>
                </svg>
            </div>
        </div>
        `
    },
    'quest7_summer': { 
        title: "北疆阿勒泰 (Beijiang Altay)", 
        desc: "神的后花园。夏季的阿勒泰是绿色的海洋，漫山遍野的野花和牛羊。避暑胜地，平均气温20度。", 
        season: "🌿 夏季 (Summer)",
        days: "5-7 Days",
        isVariant: true,
        seasonal_variants: { winter: 'quest7', summer: 'quest7_summer' },
        features: ["喀纳斯湖怪 (Kanas Lake)", "禾木花海 (Flower Sea)", "五彩滩夕阳 (Sunset)"], 
        route: "阿勒泰 -> 禾木 -> 喀纳斯 -> 布尔津 -> 阿勒泰",
        hasPlan: true,
        plan: `
        <div class="module-box">
            <div class="module-title">📋 1. 基本情报 (Briefing)</div>
            <div class="briefing-grid">
                <div><strong>🚗 出行方式:</strong> 包车/自驾 (Chartered Car) - <strong>路况良好</strong></div>
                <div><strong>💰 预算范围:</strong> 7000 - 12000 RMB</div>
                <div><strong>⏱️ 预期时间:</strong> 5-7 Days</div>
                <div><strong>🌡️ 气温推测:</strong> 15°C ~ 25°C (舒适)</div>
                <div><strong>✈️ 飞行参考:</strong> 直飞阿勒泰 (Altay) 机场</div>
                <div class="atmosphere-text">
                    <p>夏天的阿勒泰是治愈的代名词。满眼的绿色，从浅草绿到深墨绿。喀纳斯湖水变成了碧玉色，禾木的晨雾在日出中散去，露出开满野花的山坡。这是《我的阿勒泰》里的真实场景。</p>
                    <p style="font-size: 0.9em; color: #666;"><strong>Note:</strong> 夏季是旺季，需提前预订民宿。紫外线强，注意防晒。</p>
                </div>
            </div>
        </div>

        <div class="module-box">
            <div class="module-title">🗺️ 2. 抽象地图 (Abstract Map)</div>
            <div class="map-container">
                <svg width="100%" height="300" viewBox="0 0 600 300" style="font-family: 'Comic Sans MS', 'Microsoft YaHei', sans-serif;">
                    <defs>
                        <marker id="arrow-green" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
                            <path d="M0,0 L0,6 L9,3 z" fill="#27ae60" />
                        </marker>
                    </defs>
                    <!-- Background Region Hint -->
                    <rect x="250" y="20" width="330" height="260" rx="20" fill="#f0fff4" stroke="#2ecc71" stroke-dasharray="5,5" />
                    <text x="415" y="270" text-anchor="middle" font-size="14" fill="#27ae60" font-weight="bold">北疆阿勒泰区域 (夏)</text>

                    <!-- Chengdu (Home) -->
                    <g transform="translate(60, 150)">
                        <circle r="6" fill="#e74c3c" />
                        <text x="0" y="25" text-anchor="middle" font-size="16" font-weight="bold" fill="#333">成都</text>
                        <text x="0" y="45" text-anchor="middle" font-size="12" fill="#7f8c8d">(出发地)</text>
                    </g>

                    <!-- Flight Path -->
                    <path d="M60,150 Q200,50 350,230" fill="none" stroke="#bdc3c7" stroke-width="2" stroke-dasharray="8,4" />
                    <text x="200" y="100" text-anchor="middle" font-size="12" fill="#bdc3c7" transform="rotate(-15, 200, 100)">直飞 4h</text>

                    <!-- Altay Hub -->
                    <g transform="translate(350, 230)">
                        <circle r="8" fill="#27ae60" stroke="white" stroke-width="2"/>
                        <text x="0" y="25" text-anchor="middle" font-size="16" font-weight="bold" fill="#27ae60">阿勒泰</text>
                        <text x="0" y="45" text-anchor="middle" font-size="12" fill="#555">集散中心</text>
                    </g>

                    <!-- Route Loop -->
                    <path d="M350,230 L480,130 L350,60 L300,150 L350,230" fill="none" stroke="#27ae60" stroke-width="3" stroke-dasharray="8,4" marker-end="url(#arrow-green)"/>
                    
                    <!-- Hemu (Top Right) -->
                    <g transform="translate(480, 130)">
                        <circle r="5" fill="white" stroke="#27ae60" stroke-width="2"/>
                        <text x="15" y="5" text-anchor="start" font-size="14" font-weight="bold" fill="#333">禾木</text>
                        <text x="15" y="25" text-anchor="start" font-size="12" fill="#7f8c8d">花海/骑马</text>
                    </g>

                    <!-- Kanas (Top Left) -->
                    <g transform="translate(350, 60)">
                        <circle r="5" fill="white" stroke="#27ae60" stroke-width="2"/>
                        <text x="0" y="-15" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">喀纳斯</text>
                        <text x="0" y="-35" text-anchor="middle" font-size="12" fill="#7f8c8d">观鱼台</text>
                    </g>

                    <!-- Burqin (West) -->
                    <g transform="translate(300, 150)">
                        <circle r="5" fill="white" stroke="#e67e22" stroke-width="2"/>
                        <text x="-10" y="5" text-anchor="end" font-size="14" font-weight="bold" fill="#333">布尔津</text>
                        <text x="-10" y="25" text-anchor="end" font-size="12" fill="#7f8c8d">五彩滩/夜市</text>
                    </g>

                    <!-- Compass -->
                    <g transform="translate(550, 40)">
                        <text x="0" y="-15" text-anchor="middle" font-size="12" font-weight="bold" fill="#bdc3c7">北</text>
                        <path d="M0,-10 L-5,5 L0,2 L5,5 Z" fill="#bdc3c7" />
                    </g>
                </svg>
            </div>
        </div>

        <div class="module-box">
            <div class="module-title">⏳ 3. 时间轴 (Timeline - 5 Days)</div>
            <div class="day-block">
                <h3>Day 1: 飞抵阿勒泰 - 开启夏日</h3>
                <div class="time-slot"><strong>📍 地点:</strong> 阿勒泰市</div>
                <div class="time-slot"><strong>🌡️ 气温:</strong> 22°C</div>
                <div class="time-slot"><strong>🌞 上午:</strong> 飞抵阿勒泰机场。租车或包车。</div>
                <div class="time-slot"><strong>☕ 下午:</strong> 游览【桦林公园】，感受城市的绿意。</div>
                <div class="time-slot"><strong>🌙 晚上:</strong> 逛阿勒泰夜市，吃烤包子。</div>
            </div>

            <div class="day-block">
                <h3>Day 2: 禾木的花海与骑马</h3>
                <div class="time-slot"><strong>📍 地点:</strong> 阿勒泰 -> 禾木</div>
                <div class="time-slot"><strong>🌡️ 气温:</strong> 20°C</div>
                <div class="time-slot"><strong>🌞 上午:</strong> 驱车前往禾木。沿途风景如画，牛羊成群。</div>
                <div class="time-slot"><strong>☕ 下午:</strong> 骑马前往【美丽峰】，穿过齐腰深的野花丛。</div>
                <div class="time-slot"><strong>🌙 晚上:</strong> 入住木屋，看夏季璀璨银河。</div>
            </div>

            <div class="day-block">
                <h3>Day 3: 喀纳斯湖的碧玉</h3>
                <div class="time-slot"><strong>📍 地点:</strong> 禾木 -> 喀纳斯</div>
                <div class="time-slot"><strong>🌡️ 气温:</strong> 18°C</div>
                <div class="time-slot"><strong>🌞 上午:</strong> 登【观鱼台】，俯瞰喀纳斯湖全景，寻找水怪传说。</div>
                <div class="time-slot"><strong>☕ 下午:</strong> 在三湾（神仙湾、月亮湾、卧龙湾）徒步，呼吸高负氧离子空气。</div>
                <div class="time-slot"><strong>🌙 晚上:</strong> 住喀纳斯老村，听图瓦人演奏苏尔。</div>
            </div>

            <div class="day-block">
                <h3>Day 4: 五彩滩的夕阳</h3>
                <div class="time-slot"><strong>📍 地点:</strong> 喀纳斯 -> 布尔津</div>
                <div class="time-slot"><strong>🌡️ 气温:</strong> 25°C</div>
                <div class="time-slot"><strong>🌞 上午:</strong> 离开喀纳斯，前往布尔津。</div>
                <div class="time-slot"><strong>☕ 下午:</strong> 傍晚时分前往【五彩滩】，雅丹地貌在夕阳下色彩斑斓。</div>
                <div class="time-slot"><strong>🌙 晚上:</strong> 在布尔津河堤夜市吃著名的烤冷水鱼（格瓦斯配鱼）。</div>
            </div>

            <div class="day-block">
                <h3>Day 5: 告别童话</h3>
                <div class="time-slot"><strong>📍 地点:</strong> 布尔津 -> 阿勒泰机场</div>
                <div class="time-slot"><strong>🌞 上午:</strong> 沿途购买瓜果。</div>
                <div class="time-slot"><strong>☕ 下午:</strong> 飞回成都。</div>
            </div>
        </div>

        <div class="module-box">
            <div class="module-title">💰 4. 金币消耗 (Cost Breakdown)</div>
            <table class="cost-table">
                <tr><th>项目</th><th>预算</th><th>备注</th></tr>
                <tr><td>✈️ 交通</td><td>3000-5000</td><td>夏季机票较贵</td></tr>
                <tr><td>🚗 包车/租车</td><td>2000-3000</td><td>旺季价格上浮</td></tr>
                <tr><td>🛌 住宿</td><td>2000-4000</td><td>禾木/喀纳斯木屋需抢</td></tr>
                <tr><td>🎫 门票</td><td>500-800</td><td>景区门票+区间车</td></tr>
                <tr style="background:#f0f0f0;border-top:2px solid black;"><td><strong>Total</strong></td><td><strong>7500 - 12800</strong></td><td><strong>夏日避暑游</strong></td></tr>
            </table>
        </div>

        <div class="module-box">
            <div class="module-title">🎒 5. 装备 (Loadout)</div>
            <div class="pros-cons">
                <div style="border-right: 2px dashed #ccc;">
                    <h4 class="pros">✅ 推荐</h4>
                    <ul><li>色彩丰富的衣物(拍照)</li><li>防晒霜/墨镜</li><li>驱蚊水</li></ul>
                </div>
                <div style="padding-left: 10px;">
                    <h4 class="cons">❌ 注意</h4>
                    <ul><li>早晚温差大(带薄羽绒)</li><li>旺季人多需排队</li><li>注意饮食卫生</li></ul>
                </div>
            </div>
        </div>
        `
    },
    'quest8_summer': { 
        title: "南疆喀什 (Nanjiang Kashgar)", 
        desc: "帕米尔的绿色奇迹。夏季的高原草甸碧绿如茵，杏花落尽后是甜美的瓜果。探访塔吉克族人家。", 
        season: "🌿 夏季 (Summer)",
        days: "5-6 Days",
        isVariant: true,
        seasonal_variants: { winter: 'quest8', summer: 'quest8_summer' },
        features: ["帕米尔湿地 (Wetlands)", "盘龙古道 (Panlong Road)", "喀什瓜果 (Fruits)"], 
        route: "喀什 -> 白沙湖 -> 塔县 -> 瓦恰乡 -> 喀什",
        hasPlan: true,
        plan: `
        <div class="module-box">
            <div class="module-title">📋 1. 基本情报 (Briefing)</div>
            <div class="briefing-grid">
                <div><strong>🚗 出行方式:</strong> 包车 (Chartered Car) - <strong>高原避暑</strong></div>
                <div><strong>💰 预算范围:</strong> 6000 - 9000 RMB</div>
                <div><strong>⏱️ 预期时间:</strong> 5-6 Days</div>
                <div><strong>🌡️ 气温推测:</strong> 15°C ~ 30°C (舒适)</div>
                <div><strong>✈️ 飞行参考:</strong> 直飞喀什 (Kashgar) 机场</div>
                <div class="atmosphere-text">
                    <p>夏天的南疆是热烈的。喀什古城的巷子里飘着瓜果的香甜，帕米尔高原上的金草滩绿得醉人。你可以穿得轻便，在盘龙古道上感受风的自由，在塔县看一场高原的婚礼。</p>
                    <p style="font-size: 0.9em; color: #666;"><strong>Note:</strong> 瓜果成熟季。高原紫外线依然强烈。</p>
                </div>
            </div>
        </div>

        <div class="module-box">
            <div class="module-title">🗺️ 2. 抽象地图 (Abstract Map)</div>
            <div class="map-container">
                <svg width="100%" height="300" viewBox="0 0 600 300" style="font-family: 'Comic Sans MS', 'Microsoft YaHei', sans-serif;">
                    <defs>
                        <marker id="arrow-summer-south" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
                            <path d="M0,0 L0,6 L9,3 z" fill="#e67e22" />
                        </marker>
                    </defs>

                    <!-- Background Region Hint -->
                    <rect x="250" y="20" width="330" height="260" rx="20" fill="#fff9e6" stroke="#f1c40f" stroke-dasharray="5,5" />
                    <text x="415" y="270" text-anchor="middle" font-size="14" fill="#d35400" font-weight="bold">南疆喀什区域 (夏)</text>

                    <!-- Chengdu (Home) -->
                    <g transform="translate(60, 150)">
                        <circle r="6" fill="#e74c3c" />
                        <text x="0" y="25" text-anchor="middle" font-size="16" font-weight="bold" fill="#333">成都</text>
                        <text x="0" y="45" text-anchor="middle" font-size="12" fill="#7f8c8d">(出发地)</text>
                    </g>

                    <!-- Flight Path -->
                    <path d="M60,150 Q200,50 350,80" fill="none" stroke="#bdc3c7" stroke-width="2" stroke-dasharray="8,4" />
                    <text x="200" y="90" text-anchor="middle" font-size="12" fill="#bdc3c7" transform="rotate(-15, 200, 100)">直飞 5h</text>

                    <!-- Kashgar Hub (North) -->
                    <g transform="translate(350, 80)">
                        <circle r="8" fill="#e67e22" stroke="white" stroke-width="2"/>
                        <text x="0" y="-15" text-anchor="middle" font-size="16" font-weight="bold" fill="#d35400">喀什</text>
                        <text x="0" y="-35" text-anchor="middle" font-size="12" fill="#555">瓜果之乡</text>
                    </g>

                    <!-- Route: Kashgar -> Baisha -> Tashkurgan -> Panlong -> Kashgar -->
                    <path d="M350,80 Q400,120 420,150" fill="none" stroke="#e67e22" stroke-width="3" stroke-dasharray="8,4" marker-end="url(#arrow-summer-south)"/>
                    <path d="M420,150 Q430,200 400,240" fill="none" stroke="#e67e22" stroke-width="3" stroke-dasharray="8,4" marker-end="url(#arrow-summer-south)"/>
                    <path d="M400,240 L480,220" fill="none" stroke="#e67e22" stroke-width="3" stroke-dasharray="8,4" marker-end="url(#arrow-summer-south)"/>
                     <path d="M480,220 Q500,100 350,80" fill="none" stroke="#e67e22" stroke-width="3" stroke-dasharray="8,4" marker-end="url(#arrow-summer-south)"/>

                    <!-- Baisha Lake (Middle) -->
                    <g transform="translate(420, 150)">
                        <circle r="5" fill="white" stroke="#3498db" stroke-width="2"/>
                        <text x="15" y="5" text-anchor="start" font-size="14" font-weight="bold" fill="#333">白沙湖</text>
                        <text x="15" y="25" text-anchor="start" font-size="12" fill="#7f8c8d">碧水/沙漠</text>
                    </g>

                    <!-- Tashkurgan (South) -->
                    <g transform="translate(400, 240)">
                        <circle r="5" fill="white" stroke="#27ae60" stroke-width="2"/>
                        <text x="0" y="25" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">塔县</text>
                        <text x="0" y="45" text-anchor="middle" font-size="12" fill="#7f8c8d">金草滩</text>
                    </g>

                    <!-- Panlong (East) -->
                    <g transform="translate(480, 220)">
                         <circle r="5" fill="white" stroke="#e67e22" stroke-width="2"/>
                        <text x="10" y="0" text-anchor="start" font-size="14" font-weight="bold" fill="#333">盘龙古道</text>
                        <text x="10" y="20" text-anchor="start" font-size="12" fill="#7f8c8d">黝黑公路</text>
                    </g>

                    <!-- Compass -->
                    <g transform="translate(550, 40)">
                        <text x="0" y="-15" text-anchor="middle" font-size="12" font-weight="bold" fill="#bdc3c7">北</text>
                        <path d="M0,-10 L-5,5 L0,2 L5,5 Z" fill="#bdc3c7" />
                    </g>
                </svg>
            </div>
        </div>

        <div class="module-box">
            <div class="module-title">⏳ 3. 时间轴 (Timeline - 5 Days)</div>
            <div class="day-block">
                <h3>Day 1: 喀什的瓜果与夜市</h3>
                <div class="time-slot"><strong>📍 地点:</strong> 喀什古城</div>
                <div class="time-slot"><strong>🌡️ 气温:</strong> 30°C</div>
                <div class="time-slot"><strong>🌞 上午:</strong> 飞抵喀什。</div>
                <div class="time-slot"><strong>☕ 下午:</strong> 在古城吃哈密瓜、无花果。逛职人街。</div>
                <div class="time-slot"><strong>🌙 晚上:</strong> 在【百年老茶馆】听歌，或者去汗巴扎吃冰淇淋。</div>
            </div>

            <div class="day-block">
                <h3>Day 2: 帕米尔的碧水</h3>
                <div class="time-slot"><strong>📍 地点:</strong> 喀什 -> 白沙湖 -> 塔县</div>
                <div class="time-slot"><strong>🌡️ 气温:</strong> 20°C</div>
                <div class="time-slot"><strong>🌞 上午:</strong> 前往高原。夏季的【白沙湖】水色更蓝，与白沙山对比强烈。</div>
                <div class="time-slot"><strong>☕ 下午:</strong> 抵达塔县，游览【石头城】和【金草滩】。夕阳下草滩一片金黄。</div>
                <div class="time-slot"><strong>🌙 晚上:</strong> 宿塔县，体验塔吉克族风情。</div>
            </div>

            <div class="day-block">
                <h3>Day 3: 盘龙古道与湿地</h3>
                <div class="time-slot"><strong>📍 地点:</strong> 塔县 -> 瓦恰乡 -> 喀什</div>
                <div class="time-slot"><strong>🌡️ 气温:</strong> 18°C</div>
                <div class="time-slot"><strong>🌞 上午:</strong> 打卡【盘龙古道】(小盘龙)。黑色公路如巨龙盘卧。</div>
                <div class="time-slot"><strong>☕ 下午:</strong> 途径下坂地水库，返回喀什。</div>
                <div class="time-slot"><strong>🌙 晚上:</strong> 回到低海拔，睡个好觉。</div>
            </div>

            <div class="day-block">
                <h3>Day 4: 喀什人文深入</h3>
                <div class="time-slot"><strong>📍 地点:</strong> 喀什</div>
                <div class="time-slot"><strong>🌡️ 气温:</strong> 30°C</div>
                <div class="time-slot"><strong>🌞 上午:</strong> 参观【艾提尕尔清真寺】。</div>
                <div class="time-slot"><strong>☕ 下午:</strong> 去【牛羊巴扎】(如果是周日) 感受热闹的交易现场。</div>
                <div class="time-slot"><strong>🌙 晚上:</strong> 自由活动，买点干果。</div>
            </div>

            <div class="day-block">
                <h3>Day 5: 满载而归</h3>
                <div class="time-slot"><strong>📍 地点:</strong> 喀什机场</div>
                <div class="time-slot"><strong>🌞 上午:</strong> 邮寄几箱瓜果回成都。</div>
                <div class="time-slot"><strong>☕ 下午:</strong> 飞离喀什。</div>
            </div>
        </div>

        <div class="module-box">
            <div class="module-title">💰 4. 金币消耗 (Cost Breakdown)</div>
            <table class="cost-table">
                <tr><th>项目</th><th>预算</th><th>备注</th></tr>
                <tr><td>✈️ 交通</td><td>2500-4500</td><td>机票</td></tr>
                <tr><td>🚗 包车</td><td>2000-3000</td><td>路况好，可自驾</td></tr>
                <tr><td>🛌 住宿</td><td>1500-2500</td><td>民宿选择多</td></tr>
                <tr><td>🍈 餐饮</td><td>1000-1500</td><td>瓜果/羊肉吃到饱</td></tr>
                <tr style="background:#f0f0f0;border-top:2px solid black;"><td><strong>Total</strong></td><td><strong>7000 - 11500</strong></td><td><strong>美食美景游</strong></td></tr>
            </table>
        </div>

        <div class="module-box">
            <div class="module-title">🎒 5. 装备 (Loadout)</div>
            <div class="pros-cons">
                <div style="border-right: 2px dashed #ccc;">
                    <h4 class="pros">✅ 推荐</h4>
                    <ul><li>防晒衣/帽子</li><li>裙子(拍照好看)</li><li>肠胃药(瓜果多)</li></ul>
                </div>
                <div style="padding-left: 10px;">
                    <h4 class="cons">❌ 注意</h4>
                    <ul><li>尊重当地风俗</li><li>时差(晚2小时)</li><li>干燥(多喝水)</li></ul>
                </div>
            </div>
        </div>
        `
    },
    'quest27': { title: "都江堰 (Dujiangyan)", desc: "拜水都江堰，南桥夜景赛博朋克蓝。", hasPlan: false, features: ["鱼嘴/飞沙堰 (Ancient Dam)", "南桥夜景 (Blue Tears)", "仰天窝自拍大熊猫"], route: "成都 -> 离堆公园 -> 都江堰景区 -> 南桥 -> 成都" },
    'quest28': { title: "青城山 (Qingcheng)", desc: "问道青城山，月城湖坐船，幽静洗肺。", hasPlan: false, features: ["月城湖坐船 (Boat)", "上清宫问道 (Taoism)", "老君阁俯瞰"], route: "成都 -> 青城山脚 -> 建福宫 -> 月城湖 -> 索道 -> 上清宫 -> 成都" },
    'quest29': { title: "三星堆 (Sanxingdui)", desc: "沉睡数千年，一醒惊天下。新馆极具现代感。", hasPlan: false, features: ["青铜神树 (3.96m)", "黄金面具 (Gold Mask)", "新馆建筑设计"], route: "成都 -> 广汉 -> 三星堆博物馆 -> 修复中心 -> 成都" },
    'quest30': { title: "熊猫基地 (Panda Base)", desc: "早起看花花，顶流女明星。", hasPlan: false, features: ["花花 (He Hua) 排队", "月亮产房看幼崽", "无限极竹笋冰淇淋"], route: "成都 -> 熊猫大道 -> 南门进 -> 太阳产房 -> 月亮产房 -> 西门出" },
    'quest31': { title: "龙泉山 (Longquan)", desc: "城市之眼，看成都夜景，喝茶晒太阳。", hasPlan: false, features: ["丹景台 (Eye of City)", "藤原豆腐店 (Cosplay)", "山顶火锅"], route: "成都 -> 三圣乡 -> 龙泉山 -> 丹景台 -> 桃花故里 -> 成都" },
    'quest32': { title: "街子古镇 (Jiezi)", desc: "青城后花园，爬凤栖山，吃叶儿粑。", hasPlan: false, features: ["字库塔 (Landmark)", "凤栖山徒步", "古戏台喝茶"], route: "成都 -> 崇州 -> 街子古镇 -> 康道 -> 光严禅院 -> 成都" },
    'quest33': { title: "黄龙溪 (Huanglongxi)", desc: "玩水胜地，一根面，古镇风情。", hasPlan: false, features: ["泼水节 (Summer Only)", "一根面表演", "复古茶馆"], route: "成都 -> 双流 -> 黄龙溪古镇 -> 码头 -> 成都" },
    'quest34': { title: "三圣乡 (Sansheng)", desc: "鲜花市场，露营烧烤，就在三环边。", hasPlan: false, features: ["鲜花市场 (Wholesale)", "白鹭湾湿地骑行", "农家乐烧烤"], route: "成都 -> 锦江大道 -> 三圣花乡 -> 白鹭湾 -> 成都" },
    'quest35': { title: "峨眉山 (Emei Shan)", desc: "金顶看云海，雷洞坪滑雪，猴子(小心)。", hasPlan: false, features: ["金顶日出 (Sunrise)", "雷洞坪滑雪 (Winter)", "生态猴区 (Monkeys)"], route: "成都 -> 峨眉山脚 -> 雷洞坪 -> 金顶 -> 万年寺 -> 成都" },
    'quest36': { title: "乐山大佛 (Leshan)", desc: "坐船看大佛全景，钵钵鸡吃到饱。", hasPlan: false, features: ["大佛全景 (Boat)", "翘脚牛肉/甜皮鸭", "东方佛都"], route: "成都 -> 乐山港 -> 游船观佛 -> 上岸吃喝 -> 成都" },
    'quest37': { title: "蒙顶山 (Mengding)", desc: "世界茶文化圣山，树冠漫步，空气极佳。", hasPlan: false, features: ["皇茶园 (Tea Culture)", "树冠漫步 (Adventure)", "天盖寺品茶"], route: "成都 -> 雅安 -> 名山 -> 蒙顶山景区 -> 成都" },
    'quest38': { title: "天台山 (Tiantai)", desc: "萤火虫之森(季节性)，夏季玩水避暑。", hasPlan: false, features: ["萤火虫 (Fireflies)", "高山玩水", "平乐古镇"], route: "成都 -> 邛崃 -> 平乐古镇 -> 天台山 -> 成都" },
    'quest39': { title: "稻城亚丁 (Yading)", desc: "蓝色星球上的最后一片净土，看三神山。", hasPlan: false, features: ["央迈勇/仙乃日 (Snow Mts)", "牛奶海/五色海 (Lakes)", "洛绒牛场"], route: "成都 -> 康定 -> 理塘 -> 稻城 -> 香格里拉镇 -> 亚丁景区" },
    'quest46': {
        title: "川西小环线 (Western Sichuan Loop)",
        desc: "东方阿尔卑斯，雪山、蓝冰、藏寨，冬季限定的寂静之美。",
        days: "4 Days",
        season: "Winter",
        hasPlan: true,
        features: ["雅拉雪山日照金山", "墨石公园异域星球", "四姑娘山双桥沟蓝冰"],
        route: "成都 -> 康定 -> 新都桥 -> 塔公 -> 丹巴 -> 四姑娘山 -> 成都",
        plan: `
        <div class="brief-box">
            <div class="brief-title">🏔️ 档案 (Briefing)</div>
            <p><strong>目标:</strong> 深入川西高原，体验雪山、冰川、藏寨的冬季风情。</p>
            <p><strong>时长:</strong> 4 Days (Compact Loop)</p>
            <p><strong>季节:</strong> Winter (12月-2月，蓝冰/雪景最佳)</p>
            <p><strong>主要看点:</strong> 折多山雪景、墨石公园、雅拉雪山、四姑娘山蓝冰。</p>
        </div>

        <div class="module-box">
            <div class="module-title">🗺️ 路线图 (Map)</div>
            <div class="map-container">
                <svg width="100%" height="350" viewBox="0 0 800 400" style="background:#f9f9f9; border-radius:10px;">
                    <!-- Background Area Label -->
                    <text x="50" y="40" font-size="20" fill="#ccc" font-weight="bold">川西高原区域 (Western Sichuan)</text>
                    
                    <!-- Compass -->
                    <g transform="translate(720, 50)">
                        <circle cx="0" cy="0" r="25" stroke="#333" stroke-width="2" fill="none"/>
                        <path d="M0 -20 L5 5 L0 20 L-5 5 Z" fill="#333"/>
                        <text x="-5" y="-25" font-weight="bold" font-size="14">N</text>
                    </g>

                    <!-- Route Path (Loop) -->
                    <!-- Chengdu(700,300) -> Kangding(400,350) -> Xinduqiao(250,350) -> Tagong(200,250) -> Danba(300,150) -> Siguniang(500,150) -> Chengdu -->
                    <path d="M700 300 Q 550 380, 400 350 T 250 350 L 200 250 L 300 150 L 500 150 Q 650 200, 700 300" 
                          fill="none" stroke="#87CEEB" stroke-width="5" stroke-dasharray="10,5"/>

                    <!-- Nodes -->
                    <!-- Chengdu -->
                    <g transform="translate(700, 300)">
                        <circle cx="0" cy="0" r="8" fill="#ff5252" stroke="black" stroke-width="2"/>
                        <text x="15" y="5" font-weight="bold" font-size="14">成都 (Chengdu)</text>
                        <text x="15" y="25" font-size="12" fill="#666">START/END</text>
                    </g>

                    <!-- Kangding -->
                    <g transform="translate(400, 350)">
                        <circle cx="0" cy="0" r="6" fill="white" stroke="black" stroke-width="2"/>
                        <text x="-30" y="25" font-size="12" font-weight="bold">康定 (Kangding)</text>
                    </g>

                    <!-- Xinduqiao -->
                    <g transform="translate(250, 350)">
                        <circle cx="0" cy="0" r="6" fill="white" stroke="black" stroke-width="2"/>
                        <text x="-40" y="25" font-size="12" font-weight="bold">新都桥</text>
                        <text x="-40" y="40" font-size="10" fill="#666">摄影天堂</text>
                    </g>

                    <!-- Tagong -->
                    <g transform="translate(200, 250)">
                        <circle cx="0" cy="0" r="6" fill="white" stroke="black" stroke-width="2"/>
                        <text x="-50" y="5" font-size="12" font-weight="bold">塔公草原</text>
                    </g>

                    <!-- Danba -->
                    <g transform="translate(300, 150)">
                        <circle cx="0" cy="0" r="6" fill="white" stroke="black" stroke-width="2"/>
                        <text x="-20" y="-15" font-size="12" font-weight="bold">丹巴 (Danba)</text>
                        <text x="-20" y="-30" font-size="10" fill="#666">甲居藏寨</text>
                    </g>

                    <!-- Siguniang -->
                    <g transform="translate(500, 150)">
                        <circle cx="0" cy="0" r="6" fill="white" stroke="black" stroke-width="2"/>
                        <text x="-30" y="-15" font-size="12" font-weight="bold">四姑娘山</text>
                        <text x="-30" y="-30" font-size="10" fill="#666">双桥沟蓝冰</text>
                    </g>
                    
                    <!-- Direction Arrows -->
                    <path d="M600 350 L590 345 L590 355 Z" fill="#333" transform="rotate(10 600 350)"/>
                    <path d="M300 350 L290 345 L290 355 Z" fill="#333"/>
                    <path d="M225 300 L215 295 L215 305 Z" fill="#333" transform="rotate(-60 225 300)"/>
                    <path d="M400 150 L390 145 L390 155 Z" fill="#333"/>
                    <path d="M600 220 L590 215 L590 225 Z" fill="#333" transform="rotate(45 600 220)"/>

                </svg>
            </div>
        </div>

        <div class="module-box">
            <div class="module-title">📅 行程表 (Timeline)</div>
            
            <div class="day-block">
                <h3>Day 1: 翻越折多山</h3>
                <div class="time-slot"><strong>📍 地点:</strong> 成都 -> 康定 -> 新都桥</div>
                <div class="time-slot"><strong>🚗 交通:</strong> 280km, 约4.5小时</div>
                <div class="time-slot"><strong>🌞 上午:</strong> 成都出发，经雅叶高速直达康定。</div>
                <div class="time-slot"><strong>☕ 下午:</strong> 翻越折多山(4298m)，看雪景。抵达新都桥，拍摄夕阳下的贡嘎雪山(视天气)。</div>
                <div class="time-slot"><strong>🛌 住宿:</strong> 新都桥 (海拔3300m，注意保暖)。</div>
            </div>

            <div class="day-block">
                <h3>Day 2: 异域星球与神山</h3>
                <div class="time-slot"><strong>📍 地点:</strong> 新都桥 -> 塔公 -> 墨石公园 -> 丹巴 -> 四姑娘山镇</div>
                <div class="time-slot"><strong>🚗 交通:</strong> 260km, 约5.5小时 (特种兵行程)</div>
                <div class="time-slot"><strong>🌞 上午:</strong> 塔公草原看雅拉雪山，游览墨石公园(拍暗黑系大片)。</div>
                <div class="time-slot"><strong>☕ 下午:</strong> 经丹巴甲居藏寨(短暂停留观景台)，前往四姑娘山镇。</div>
                <div class="time-slot"><strong>🛌 住宿:</strong> 四姑娘山镇 (海拔3200m)。</div>
            </div>

            <div class="day-block">
                <h3>Day 3: 双桥沟蓝冰奇观</h3>
                <div class="time-slot"><strong>📍 地点:</strong> 四姑娘山双桥沟</div>
                <div class="time-slot"><strong>🚗 交通:</strong> 景区观光车</div>
                <div class="time-slot"><strong>🌞 全天:</strong> 深度游玩双桥沟。冬季可看到巨大的冰瀑、蓝冰湖、雪山森林。</div>
                <div class="time-slot"><strong>📸 必拍:</strong> 布达拉峰、四姑娜措、撵鱼坝漂流(冬季为冰河)。</div>
                <div class="time-slot"><strong>🛌 住宿:</strong> 四姑娘山镇 (续住)。</div>
            </div>

            <div class="day-block">
                <h3>Day 4: 巴朗山云海与返程</h3>
                <div class="time-slot"><strong>📍 地点:</strong> 四姑娘山 -> 巴朗山 -> 成都</div>
                <div class="time-slot"><strong>🚗 交通:</strong> 200km, 约4小时</div>
                <div class="time-slot"><strong>🌞 上午:</strong> 睡个懒觉或早起看日照金山。穿越巴朗山隧道。</div>
                <div class="time-slot"><strong>☕ 下午:</strong> 经映秀、都江堰返回成都，结束行程。</div>
            </div>
        </div>

        <div class="module-box">
            <div class="module-title">💰 4. 金币消耗 (Cost Breakdown)</div>
            <table class="cost-table">
                <tr><th>项目</th><th>预算</th><th>备注</th></tr>
                <tr><td>🚗 包车/自驾</td><td>1200-2000</td><td>4天行程，油费略减</td></tr>
                <tr><td>🛌 住宿</td><td>600-1200</td><td>3晚住宿</td></tr>
                <tr><td>🎫 门票</td><td>300-500</td><td>双桥沟/墨石</td></tr>
                <tr><td>🍲 餐饮</td><td>500-800</td><td>藏餐/汤锅</td></tr>
                <tr style="background:#f0f0f0;border-top:2px solid black;"><td><strong>Total</strong></td><td><strong>2600 - 4500</strong></td><td><strong>人均 (紧凑高效)</strong></td></tr>
            </table>
        </div>

        <div class="module-box">
            <div class="module-title">🎒 5. 装备 (Loadout)</div>
            <div class="pros-cons">
                <div style="border-right: 2px dashed #ccc;">
                    <h4 class="pros">✅ 必须</h4>
                    <ul><li>羽绒服/冲锋衣</li><li>墨镜/防晒霜</li><li>防滑链(自驾)</li><li>保温杯</li></ul>
                </div>
                <div style="padding-left: 10px;">
                    <h4 class="cons">❌ 注意</h4>
                    <ul><li>高反预防</li><li>路面暗冰</li><li>行程紧凑(不拖延)</li></ul>
                </div>
            </div>
        </div>
        `
    },
    'quest42': { title: "厦门 (Xiamen)", desc: "鼓浪屿漫步，最美大学，文艺小资。", hasPlan: false, features: ["鼓浪屿万国建筑", "厦门大学涂鸦隧道", "环岛路骑行"], route: "厦门 -> 鼓浪屿 -> 曾厝垵 -> 环岛路 -> 厦门大学 -> 返程" },
    'quest43': { title: "冰岛 (Iceland)", desc: "权力的游戏取景地，极光，蓝冰洞。", hasPlan: false, features: ["极光 (Aurora)", "蓝冰洞 (Ice Cave)", "黑沙滩 (Black Beach)"], route: "雷克雅未克 -> 黄金圈 -> 维克 -> 杰古沙龙冰河湖 -> 钻石沙滩 -> 返程" },
    'quest44': { title: "土耳其 (Turkey)", desc: "热气球，棉花堡，横跨欧亚大陆。", hasPlan: false, features: ["卡帕多奇亚热气球", "棉花堡温泉", "伊斯坦布尔大巴扎"], route: "伊斯坦布尔 -> 卡帕多奇亚 -> 安塔利亚 -> 棉花堡 -> 以弗所 -> 伊斯坦布尔" },
    'quest45': { title: "马尔代夫 (Maldives)", desc: "一岛一酒店，拖尾沙滩，深潜看鱼。", hasPlan: false, features: ["水上屋 (Water Villa)", "浮潜/深潜 (Diving)", "烛光晚餐"], route: "马累 -> 水飞/快艇 -> 度假岛屿 -> 躺平 -> 马累" },
    'quest47': {
        title: "川西大环线 (Sichuan Big Loop)",
        desc: "蓝色星球上的最后一片净土。理塘、亚丁、色达，一次走完川西精华。",
        days: "8 Days",
        season: "Autumn",
        hasPlan: true,
        features: ["稻城亚丁三神山", "理塘天空之城", "色达红色佛国"],
        route: "成都 -> 康定 -> 理塘 -> 稻城亚丁 -> 甘孜 -> 色达 -> 马尔康 -> 成都",
        plan: `
        <div class="brief-box">
            <div class="brief-title">🏔️ 档案 (Briefing)</div>
            <p><strong>目标:</strong> 深入川西腹地，朝圣香格里拉之魂，探访红色佛国。</p>
            <p><strong>时长:</strong> 8 Days (Big Loop)</p>
            <p><strong>季节:</strong> Autumn (9月-10月，金秋杨林/红草地/雪山)</p>
            <p><strong>主要看点:</strong> 亚丁三神山、牛奶海、理塘长青春科尔寺、色达喇荣五明佛学院。</p>
        </div>

        <div class="module-box">
            <div class="module-title">🗺️ 路线图 (Map)</div>
            <div class="map-container">
                <svg width="100%" height="400" viewBox="0 0 800 450" style="background:#f9f9f9; border-radius:10px;">
                    <!-- Background Area Label -->
                    <text x="50" y="40" font-size="20" fill="#ccc" font-weight="bold">川西高原区域 (Western Sichuan)</text>
                    
                    <!-- Compass -->
                    <g transform="translate(720, 50)">
                        <circle cx="0" cy="0" r="25" stroke="#333" stroke-width="2" fill="none"/>
                        <path d="M0 -20 L5 5 L0 20 L-5 5 Z" fill="#333"/>
                        <text x="-5" y="-25" font-weight="bold" font-size="14">N</text>
                    </g>

                    <!-- Route Path (Big Loop) -->
                    <!-- Chengdu(700,400) -> Kangding(500,380) -> Litang(250,300) -> Yading(250,400) -> Litang(250,300) -> Ganzi(200,150) -> Seda(400,100) -> Maerkang(550,150) -> Chengdu -->
                    <!-- South Line -->
                    <path d="M700 400 L 500 380 L 250 300 L 250 400" fill="none" stroke="#FFA500" stroke-width="4" stroke-dasharray="10,5"/>
                    <!-- North Line Return -->
                    <path d="M250 300 L 200 150 L 400 100 L 550 150 L 700 400" fill="none" stroke="#FFA500" stroke-width="4" stroke-dasharray="10,5"/>

                    <!-- Nodes -->
                    <!-- Chengdu -->
                    <g transform="translate(700, 400)">
                        <circle cx="0" cy="0" r="8" fill="#ff5252" stroke="black" stroke-width="2"/>
                        <text x="15" y="5" font-weight="bold" font-size="14">成都</text>
                        <text x="15" y="25" font-size="12" fill="#666">START/END</text>
                    </g>

                    <!-- Kangding -->
                    <g transform="translate(500, 380)">
                        <circle cx="0" cy="0" r="6" fill="white" stroke="black" stroke-width="2"/>
                        <text x="-10" y="20" font-size="12" font-weight="bold">康定</text>
                    </g>

                    <!-- Litang -->
                    <g transform="translate(250, 300)">
                        <circle cx="0" cy="0" r="8" fill="white" stroke="#d35400" stroke-width="2"/>
                        <text x="-50" y="5" font-size="14" font-weight="bold" fill="#d35400">理塘</text>
                        <text x="-50" y="20" font-size="10" fill="#666">天空之城</text>
                    </g>

                    <!-- Yading -->
                    <g transform="translate(250, 400)">
                        <circle cx="0" cy="0" r="8" fill="#3498db" stroke="black" stroke-width="2"/>
                        <text x="15" y="5" font-size="14" font-weight="bold" fill="#3498db">稻城亚丁</text>
                        <text x="15" y="25" font-size="12" fill="#666">核心神山</text>
                    </g>

                    <!-- Ganzi -->
                    <g transform="translate(200, 150)">
                        <circle cx="0" cy="0" r="6" fill="white" stroke="black" stroke-width="2"/>
                        <text x="-40" y="5" font-size="12" font-weight="bold">甘孜</text>
                    </g>

                    <!-- Seda -->
                    <g transform="translate(400, 100)">
                        <circle cx="0" cy="0" r="8" fill="#c0392b" stroke="black" stroke-width="2"/>
                        <text x="-20" y="-15" font-size="14" font-weight="bold" fill="#c0392b">色达</text>
                        <text x="-20" y="-30" font-size="10" fill="#666">佛学院</text>
                    </g>

                    <!-- Maerkang -->
                    <g transform="translate(550, 150)">
                        <circle cx="0" cy="0" r="6" fill="white" stroke="black" stroke-width="2"/>
                        <text x="10" y="5" font-size="12" font-weight="bold">马尔康</text>
                    </g>
                    
                    <!-- Direction Arrows -->
                    <path d="M400 390 L390 385 L390 395 Z" fill="#333" transform="rotate(10 400 390)"/>
                    <path d="M250 350 L240 345 L240 355 Z" fill="#333" transform="rotate(90 250 350)"/>
                    <path d="M225 225 L215 220 L215 230 Z" fill="#333" transform="rotate(-60 225 225)"/>
                    <path d="M300 125 L290 120 L290 130 Z" fill="#333" transform="rotate(-15 300 125)"/>
                    <path d="M625 275 L615 270 L615 280 Z" fill="#333" transform="rotate(60 625 275)"/>

                </svg>
            </div>
        </div>

        <div class="module-box">
            <div class="module-title">📅 行程表 (Timeline)</div>
            
            <div class="day-block">
                <h3>Day 1: 进藏第一关</h3>
                <div class="time-slot"><strong>📍 地点:</strong> 成都 -> 康定 -> 新都桥</div>
                <div class="time-slot"><strong>🚗 交通:</strong> 400km, 约6小时</div>
                <div class="time-slot"><strong>🌞 上午:</strong> 经雅康高速，穿越二郎山隧道。</div>
                <div class="time-slot"><strong>☕ 下午:</strong> 翻越折多山，抵达新都桥，适应高反。</div>
                <div class="time-slot"><strong>🛌 住宿:</strong> 新都桥 (海拔3300m)。</div>
            </div>

            <div class="day-block">
                <h3>Day 2: 天路十八弯与天空之城</h3>
                <div class="time-slot"><strong>📍 地点:</strong> 新都桥 -> 理塘 -> 稻城 -> 香格里拉镇</div>
                <div class="time-slot"><strong>🚗 交通:</strong> 420km, 约7小时</div>
                <div class="time-slot"><strong>🌞 上午:</strong> 翻越剪子弯山、卡子拉山，经过天路十八弯。</div>
                <div class="time-slot"><strong>☕ 下午:</strong> 抵达【理塘】(海拔4014m)，打卡长青春科尔寺。继续前往稻城。</div>
                <div class="time-slot"><strong>🛌 住宿:</strong> 香格里拉镇 (海拔2900m，相对低，利于睡眠)。</div>
            </div>

            <div class="day-block">
                <h3>Day 3: 亚丁长线 - 挑战极限</h3>
                <div class="time-slot"><strong>📍 地点:</strong> 亚丁景区</div>
                <div class="time-slot"><strong>🚗 交通:</strong> 景区大巴 + 电瓶车</div>
                <div class="time-slot"><strong>🌞 全天:</strong> 冲古寺 -> 洛绒牛场 -> 牛奶海(4600m) -> 五色海(4700m)。</div>
                <div class="time-slot"><strong>📝 备注:</strong> 对体力要求极高，往返徒步约5-7小时。</div>
                <div class="time-slot"><strong>🛌 住宿:</strong> 香格里拉镇 (续住)。</div>
            </div>

            <div class="day-block">
                <h3>Day 4: 亚丁短线 - 仙乃日</h3>
                <div class="time-slot"><strong>📍 地点:</strong> 亚丁景区 -> 稻城</div>
                <div class="time-slot"><strong>🚗 交通:</strong> 80km</div>
                <div class="time-slot"><strong>🌞 上午:</strong> 二进沟，游览珍珠海，近距离看仙乃日神山。</div>
                <div class="time-slot"><strong>☕ 下午:</strong> 出景区，前往稻城县，看红草地(季节性)。</div>
                <div class="time-slot"><strong>🛌 住宿:</strong> 稻城县。</div>
            </div>

            <div class="day-block">
                <h3>Day 5: 穿越海子山</h3>
                <div class="time-slot"><strong>📍 地点:</strong> 稻城 -> 理塘 -> 新龙 -> 甘孜</div>
                <div class="time-slot"><strong>🚗 交通:</strong> 350km, 约6小时</div>
                <div class="time-slot"><strong>🌞 上午:</strong> 穿越海子山自然保护区，看古冰帽遗迹。</div>
                <div class="time-slot"><strong>☕ 下午:</strong> 经新龙县，欣赏雅砻江大峡谷，抵达甘孜县。</div>
                <div class="time-slot"><strong>🛌 住宿:</strong> 甘孜县。</div>
            </div>

            <div class="day-block">
                <h3>Day 6: 红色佛国</h3>
                <div class="time-slot"><strong>📍 地点:</strong> 甘孜 -> 色达 -> 观音桥</div>
                <div class="time-slot"><strong>🚗 交通:</strong> 260km, 约5小时</div>
                <div class="time-slot"><strong>🌞 上午:</strong> 前往【色达】，远眺红房子(需提前预约)。</div>
                <div class="time-slot"><strong>☕ 下午:</strong> 感受信仰的力量，后前往观音桥镇。</div>
                <div class="time-slot"><strong>🛌 住宿:</strong> 观音桥镇。</div>
            </div>

            <div class="day-block">
                <h3>Day 7: 卓克基土司</h3>
                <div class="time-slot"><strong>📍 地点:</strong> 观音桥 -> 马尔康 -> 汶川</div>
                <div class="time-slot"><strong>🚗 交通:</strong> 300km, 约5小时</div>
                <div class="time-slot"><strong>🌞 上午:</strong> 参观【卓克基土司官寨】，体验嘉绒藏族文化。</div>
                <div class="time-slot"><strong>☕ 下午:</strong> 经米亚罗(红叶)，抵达汶川。</div>
                <div class="time-slot"><strong>🛌 住宿:</strong> 汶川或理县。</div>
            </div>
            
            <div class="day-block">
                <h3>Day 8: 返回成都</h3>
                <div class="time-slot"><strong>📍 地点:</strong> 汶川 -> 成都</div>
                <div class="time-slot"><strong>🚗 交通:</strong> 130km, 约2小时</div>
                <div class="time-slot"><strong>🌞 上午:</strong> 睡个懒觉，购买一些车厘子(季节性)。</div>
                <div class="time-slot"><strong>☕ 下午:</strong> 抵达成都，吃顿火锅。</div>
            </div>
        </div>

        <div class="module-box">
            <div class="module-title">💰 4. 金币消耗 (Cost Breakdown)</div>
            <table class="cost-table">
                <tr><th>项目</th><th>预算</th><th>备注</th></tr>
                <tr><td>🚗 包车/自驾</td><td>2500-3500</td><td>路程长，油费高</td></tr>
                <tr><td>🛌 住宿</td><td>1500-2500</td><td>7晚住宿</td></tr>
                <tr><td>🎫 门票</td><td>500-800</td><td>亚丁(含车)/色达/官寨</td></tr>
                <tr><td>🍲 餐饮</td><td>1000-1500</td><td>沿途川菜/藏餐</td></tr>
                <tr style="background:#f0f0f0;border-top:2px solid black;"><td><strong>Total</strong></td><td><strong>5500 - 8300</strong></td><td><strong>人均 (深度游)</strong></td></tr>
            </table>
        </div>

        <div class="module-box">
            <div class="module-title">🎒 5. 装备 (Loadout)</div>
            <div class="pros-cons">
                <div style="border-right: 2px dashed #ccc;">
                    <h4 class="pros">✅ 必须</h4>
                    <ul><li>氧气瓶(必备)</li><li>登山杖(亚丁)</li><li>冲锋衣/羽绒服</li><li>高热量零食</li></ul>
                </div>
                <div style="padding-left: 10px;">
                    <h4 class="cons">❌ 注意</h4>
                    <ul><li>高反风险大</li><li>路途遥远晕车</li><li>尊重宗教习俗</li></ul>
                </div>
            </div>
        </div>
        `
    },
};
