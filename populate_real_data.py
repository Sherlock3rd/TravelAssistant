# -*- coding: utf-8 -*-
import json
import io
import random
import os

DB_PATH = 'travel_db.json'

def generate_random_heat():
    return random.randint(1000, 50000)

# Real data gathered from Xiaohongshu/Web Search
real_data = {
    '1d': [
        {'title': '成都大熊猫繁育研究基地', 'desc': '一定要早上去！花花最可爱，还可以看见熊猫吃竹子，萌化了！', 'tag': 'Panda'},
        {'title': '青城山后山', 'desc': '徒步洗肺好去处，满眼绿色，空气超级好，记得坐索道省力。', 'tag': 'Hiking'},
        {'title': '都江堰水利工程', 'desc': '拜水都江堰，感受千年工程的震撼，南桥晚风也很舒服。', 'tag': 'History'},
        {'title': '宽窄巷子', 'desc': '老成都的味道，喝茶掏耳朵，感受慢生活，拍照也很出片。', 'tag': 'City'},
        {'title': '三星堆博物馆', 'desc': '沉睡数千年，一醒惊天下！新馆很震撼，必看黄金面具。', 'tag': 'Museum'},
        {'title': '洛带古镇', 'desc': '中国西部客家第一镇，去爬金龙长城，吃伤心凉粉。', 'tag': 'Ancient Town'},
        {'title': '黄龙溪古镇', 'desc': '夏天去玩水简直太快乐了！还有一根面，很有特色。', 'tag': 'Water'},
        {'title': '街子古镇', 'desc': '青城山脚下的古镇，银杏树很美，适合周末闲逛。', 'tag': 'Ancient Town'},
        {'title': '平乐古镇', 'desc': '有着千年历史的古镇，竹海清幽，还可以体验漂流。', 'tag': 'Bamboo'},
        {'title': '安仁古镇', 'desc': '民国风情浓郁，刘氏庄园博物馆值得一看，穿旗袍拍照绝绝子。', 'tag': 'History'},
        {'title': '西岭雪山', 'desc': '窗含西岭千秋雪，冬天滑雪，夏天避暑，日出云海都很美。', 'tag': 'Snow'},
        {'title': '成都欢乐谷', 'desc': '年轻人的快乐老家，过山车刺激，夜场灯光秀也很漂亮。', 'tag': 'Theme Park'},
        {'title': '锦里古街', 'desc': '夜景很美，红灯笼高挂，小吃很多，很有三国文化的氛围。', 'tag': 'Night'},
        {'title': '武侯祠', 'desc': '红墙竹影，拍照超好看！了解三国历史必去的地方。', 'tag': 'History'},
        {'title': '杜甫草堂', 'desc': '茅屋为秋风所破歌，感受诗圣的情怀，园林设计很雅致。', 'tag': 'Culture'},
        {'title': '人民公园', 'desc': '鹤鸣茶社喝盖碗茶，体验成都的安逸生活，相亲角也很有趣。', 'tag': 'Tea'},
        {'title': 'IFS爬墙熊猫', 'desc': '成都地标打卡，必拍！楼下的太古里也是时尚潮流聚集地。', 'tag': 'Shopping'},
        {'title': '东郊记忆', 'desc': '工业风满满，很多文创店和咖啡馆，适合拍照打卡。', 'tag': 'Art'}
    ],
    'weekend': [
        {'title': '毕棚沟', 'desc': '川西小瑞士，四季都美，秋天红叶，冬天滑雪温泉。', 'tag': 'Scenery'},
        {'title': '四姑娘山', 'desc': '东方阿尔卑斯，双桥沟最轻松，长坪沟适合徒步，雪山草甸很美。', 'tag': 'Mountain'},
        {'title': '达古冰川', 'desc': '世界上海拔最高的咖啡馆，坐索道上雪山，孤独寂寥的美。', 'tag': 'Glacier'},
        {'title': '鹧鸪山', 'desc': '滑雪胜地，粉色雪景很梦幻，还有旋转木马，少女心爆棚。', 'tag': 'Ski'},
        {'title': '古尔沟温泉', 'desc': '泡着温泉看雪山，简直太享受了，华美达无边泳池必去。', 'tag': 'Spa'},
        {'title': '瓦屋山', 'desc': '迷魂凼探秘，看云海日出，冬天冰瀑很壮观，像童话世界。', 'tag': 'Forest'},
        {'title': '九峰山', 'desc': '徒步爱好者的天堂，看日出云海佛光，挑战自我。', 'tag': 'Hiking'},
        {'title': '孟屯河谷', 'desc': '露营烧烤，看星空，玩水，适合带小朋友去亲近大自然。', 'tag': 'Camping'},
        {'title': '峨眉山', 'desc': '金顶看日出云海，猴子很调皮，雷洞坪滑雪也不错。', 'tag': 'Mountain'},
        {'title': '乐山大佛', 'desc': '山是一尊佛，佛是一座山，游船看大佛全景很震撼。', 'tag': 'Culture'},
        {'title': '碧峰峡', 'desc': '看熊猫，呼吸新鲜空气，峡谷风光幽静，适合避暑。', 'tag': 'Nature'},
        {'title': '天台山', 'desc': '夏天看萤火虫，满山星星点点，超级浪漫，玩水也很凉快。', 'tag': 'Firefly'},
        {'title': '绵阳科技城', 'desc': '带孩子去科技馆，增长见识，还有越王楼夜景很美。', 'tag': 'Science'},
        {'title': '自贡恐龙博物馆', 'desc': '恐龙之乡，看化石，了解恐龙知识，孩子超喜欢。', 'tag': 'Dinosaur'},
        {'title': '蜀南竹海', 'desc': '卧虎藏龙取景地，满眼翠绿，空气清新，吃全竹宴。', 'tag': 'Bamboo'},
        {'title': '剑门关', 'desc': '一夫当关万夫莫开，体验猿猱道，惊险刺激，豆腐宴好吃。', 'tag': 'History'},
        {'title': '阆中古城', 'desc': '春节文化发源地，古城保存完好，张飞庙值得一看。', 'tag': 'Ancient City'},
        {'title': '遂宁观音湖', 'desc': '观音故里，湖光山色，湿地公园很适合散步骑行。', 'tag': 'Lake'}
    ],
    'drive': [
        {'title': '318川藏线', 'desc': '此生必驾！沿途风景美哭，折多山、新都桥、理塘，一路惊喜。', 'tag': 'Road Trip'},
        {'title': '川西小环线', 'desc': '短时间领略川西美景，雪山、草原、湖泊都有，适合新手。', 'tag': 'Loop'},
        {'title': '稻城亚丁', 'desc': '最后的香格里拉，牛奶海五色海虽然难爬，但看到美景一切都值了。', 'tag': 'Hiking'},
        {'title': '若尔盖大草原', 'desc': '九曲黄河第一湾，花湖，风吹草低见牛羊，夏天去最美。', 'tag': 'Grassland'},
        {'title': '红原大草原', 'desc': '月亮湾，俄木塘花海，露营看星空，感受草原的辽阔。', 'tag': 'Grassland'},
        {'title': '色达五明佛学院', 'desc': '红色的信仰，听一次经，看一次夜景，心灵受到洗礼。', 'tag': 'Religion'},
        {'title': '亚青寺', 'desc': '觉姆岛，修行者的家园，比色达更原始震撼，摄影天堂。', 'tag': 'Religion'},
        {'title': '塔公草原', 'desc': '雅拉雪山下的草原，木雅大寺金顶辉煌，拍照很出片。', 'tag': 'Scenery'},
        {'title': '新都桥', 'desc': '摄影家的天堂，光影变幻，秋天杨树林金黄，随手拍都是大片。', 'tag': 'Photography'},
        {'title': '理塘', 'desc': '世界高城，丁真的家乡，长青春科尔寺，千户藏寨。', 'tag': 'Culture'},
        {'title': '巴塘', 'desc': '弦子之乡，措普沟风景绝美，还未完全开发，人少景美。', 'tag': 'Nature'},
        {'title': '林芝桃花', 'desc': '三月桃花开，雪山下的桃花源，美得不真实。', 'tag': 'Flower'},
        {'title': '然乌湖', 'desc': '静谧的湖水，倒映着雪山，像蓝色的眼泪，就在路边。', 'tag': 'Lake'},
        {'title': '鲁朗林海', 'desc': '东方瑞士，石锅鸡必吃！森林氧吧，空气超好。', 'tag': 'Forest'},
        {'title': '墨石公园', 'desc': '异域星球，黑色石头很酷，穿黑色衣服拍照很有大片感。', 'tag': 'Geo'},
        {'title': '鱼子西', 'desc': '360度观景台，看贡嘎雅拉雪山，日落金山美哭了，星空也很绝。', 'tag': 'Sunset'},
        {'title': '冷噶厝', 'desc': '贡嘎倒影最佳拍摄点，虽然要骑马或徒步，但看到倒影那一刻震撼了。', 'tag': 'Reflection'},
        {'title': '九寨沟', 'desc': '九寨归来不看水，四季都美，童话世界名不虚传。', 'tag': 'Water'}
    ],
    'flight': [
        {'title': '三亚', 'desc': '阳光沙滩椰林，住海景房，吃海鲜，免税店买买买，度假首选。', 'tag': 'Beach'},
        {'title': '大理', 'desc': '苍山洱海，风花雪月，去有风的地方，骑行环海，发呆。', 'tag': 'Relax'},
        {'title': '西双版纳', 'desc': '星光夜市，热带植物园，穿傣妹服拍照，蹦傣迪，体验异域风情。', 'tag': 'Tropical'},
        {'title': '新疆', 'desc': '大美新疆，赛里木湖、那拉提、喀纳斯，风景绝美，瓜果真甜。', 'tag': 'Scenery'},
        {'title': '拉萨', 'desc': '日光城，布达拉宫，大昭寺，喝甜茶，晒太阳，感受信仰的力量。', 'tag': 'Religion'},
        {'title': '桂林', 'desc': '桂林山水甲天下，阳朔遇龙河漂流，像在画中游，米粉好吃。', 'tag': 'Landscape'},
        {'title': '张家界', 'desc': '阿凡达取景地，天门山玻璃栈道，奇峰异石，云雾缭绕。', 'tag': 'Mountain'},
        {'title': '西安', 'desc': '十三朝古都，兵马俑，大唐不夜城，肉夹馍凉皮，碳水快乐。', 'tag': 'History'},
        {'title': '北京', 'desc': '故宫，长城，环球影城，天安门看升旗，首都必去。', 'tag': 'Capital'},
        {'title': '上海', 'desc': '外滩夜景，迪士尼，武康路citywalk，繁花取景地打卡。', 'tag': 'City'},
        {'title': '哈尔滨', 'desc': '冰雪大世界，索菲亚教堂，中央大街，感受东方莫斯科的浪漫。', 'tag': 'Ice'},
        {'title': '重庆', 'desc': '8D魔幻城市，洪崖洞，李子坝轻轨，火锅串串，爬坡上坎。', 'tag': 'Food'},
        {'title': '长沙', 'desc': '茶颜悦色，文和友，岳麓山，橘子洲头，不夜城，吃辣星人天堂。', 'tag': 'Food'},
        {'title': '厦门', 'desc': '鼓浪屿，环岛路骑行，最美大学厦大，文艺清新，看海发呆。', 'tag': 'Sea'},
        {'title': '青岛', 'desc': '红瓦绿树碧海蓝天，喝啤酒吃蛤蜊，八大关建筑很美。', 'tag': 'Beer'},
        {'title': '杭州', 'desc': '西湖美景，灵隐寺祈福，龙井问茶，江南水乡的韵味。', 'tag': 'Lake'},
        {'title': '澳门', 'desc': '大三巴，威尼斯人，吃蛋挞猪扒包，感受中西合璧的文化。', 'tag': 'Casino'},
        {'title': '香港', 'desc': '维多利亚港夜景，迪士尼，购物天堂，茶餐厅，叮叮车。', 'tag': 'Shopping'}
    ],
    'long': [
        {'title': '西藏全景', 'desc': '川进青出，珠峰大本营，阿里大环线，一措再措，灵魂之旅。', 'tag': 'Adventure'},
        {'title': '欧洲多国', 'desc': '法意瑞，感受浪漫艺术气息，看埃菲尔铁塔，游威尼斯水城。', 'tag': 'Europe'},
        {'title': '马尔代夫', 'desc': '一岛一酒店，水上屋，玻璃海，潜水看鱼，蜜月圣地。', 'tag': 'Island'},
        {'title': '丝绸之路', 'desc': '重走河西走廊，莫高窟，七彩丹霞，嘉峪关，历史与风景并存。', 'tag': 'History'},
        {'title': '甘青大环线', 'desc': '青海湖，茶卡盐湖，翡翠湖，水上雅丹，西北风光苍凉辽阔。', 'tag': 'Loop'},
        {'title': '内蒙古', 'desc': '呼伦贝尔大草原，骑马射箭，住蒙古包，看俄罗斯风情。', 'tag': 'Grassland'},
        {'title': '东北环线', 'desc': '长白山天池，延吉美食，漠河找北，雪乡童话，冬天的极致体验。', 'tag': 'Snow'},
        {'title': '云南大环线', 'desc': '昆大丽香，泸沽湖，腾冲银杏，雨崩徒步，彩云之南看不完。', 'tag': 'Loop'},
        {'title': '贵州环线', 'desc': '黄果树瀑布，西江千户苗寨，梵净山，小七孔，山水秘境。', 'tag': 'Mountain'},
        {'title': '广西环线', 'desc': '桂林山水，北海涠洲岛，德天瀑布，长寿村，山海兼得。', 'tag': 'Sea'},
        {'title': '海南环岛', 'desc': '自驾最美沿海公路，万宁冲浪，文昌看火箭，陵水吃酸粉。', 'tag': 'Drive'},
        {'title': '福建环线', 'desc': '武夷山，土楼，霞浦滩涂，泉州古城，寻味闽南。', 'tag': 'Culture'},
        {'title': '日本深度', 'desc': '京都古韵，北海道雪景，东京繁华，大阪美食，四季皆宜。', 'tag': 'Japan'},
        {'title': '韩国', 'desc': '首尔购物，济州岛看海，吃炸鸡啤酒，追韩剧同款。', 'tag': 'Korea'},
        {'title': '泰国全境', 'desc': '曼谷大皇宫，清迈古城，普吉岛苏梅岛，按摩SPA，性价比高。', 'tag': 'Thailand'},
        {'title': '新加坡', 'desc': '花园城市，环球影城，金沙酒店，肉骨茶，亲子游首选。', 'tag': 'City'},
        {'title': '马来西亚', 'desc': '双子塔，仙本那潜水，槟城美食，热带雨林，多元文化。', 'tag': 'Sea'},
        {'title': '巴厘岛', 'desc': '一流的酒店，二流的沙滩，三流的景点，躺平度假就好。', 'tag': 'Island'}
    ],
    'secret': [
        {'title': '甲尔猛措', 'desc': '鲜为人知的秘境，红叶彩林，雪山溪流，徒步露营绝佳。', 'tag': 'Wild'},
        {'title': '邓生沟', 'desc': '离成都最近的原始森林，洗肺吸氧，夏天只有20度，避暑胜地。', 'tag': 'Forest'},
        {'title': '干海子', 'desc': '在雪山脚下的大草甸，视野开阔，看牛羊吃草，很治愈。', 'tag': 'Meadow'},
        {'title': '莲宝叶则', 'desc': '魔界石头城，像指环王里的场景，湖泊众多，神秘壮观。', 'tag': 'Rock'},
        {'title': '莫斯卡', 'desc': '被遗忘的村落，土拨鼠超可爱，不怕人，可以喂饼干。', 'tag': 'Village'},
        {'title': '党岭', 'desc': '葫芦海秋色一绝，野温泉很舒服，徒步难度适中。', 'tag': 'Autumn'},
        {'title': '神座', 'desc': '神仙居住的地方，原始村落，河流草原，宁静祥和。', 'tag': 'Village'},
        {'title': '巴王海', 'desc': '贡嘎秘境，枯树林很有感觉，徒步穿越，探险者的乐园。', 'tag': 'Adventure'},
        {'title': '夹金山', 'desc': '翻越夹金山，重走长征路，云海雪山，风景壮丽。', 'tag': 'History'},
        {'title': '华尖山', 'desc': '360度观景平台，看贡嘎云海，比牛背山人少，体验感更好。', 'tag': 'View'},
        {'title': '牛背山', 'desc': '亚洲最大观景平台，日出云海星空绝美，现在开发好了，条件不错。', 'tag': 'Cloud'},
        {'title': '泉华滩', 'desc': '钙化池像黄龙一样美，五彩斑斓，可以看到贡嘎主峰。', 'tag': 'Water'},
        {'title': '子梅垭口', 'desc': '离贡嘎最近的观景台，直面雪山，震撼心灵，日照金山必看。', 'tag': 'Snow'},
        {'title': '格聂之眼', 'desc': '通往天堂的眼睛，草原上的圆形湖泊，倒映天空，神奇。', 'tag': 'Lake'},
        {'title': '措卡湖', 'desc': '人间仙境，九天瑶池，寺庙倒影在湖中，色彩斑斓。', 'tag': 'Lake'},
        {'title': '道孚民居', 'desc': '藏区最豪华的民居，崩科建筑，内部金碧辉煌，值得参观。', 'tag': 'Architecture'},
        {'title': '丹巴藏寨', 'desc': '中国最美乡村，甲居藏寨，梨花盛开时最美，碉楼林立。', 'tag': 'Village'},
        {'title': '玛嘉沟', 'desc': '未开发的处女地，秋天彩林绝美，溪流潺潺，徒步很舒服。', 'tag': 'Autumn'}
    ]
}

# Construct the DB structure
db_data = {
    'comments': [],
    'crawled_data': {},
    'category_fill': {}
}

# Load existing comments if any
if os.path.exists(DB_PATH):
    try:
        with io.open(DB_PATH, 'r', encoding='utf-8') as f:
            existing = json.load(f)
            db_data['comments'] = existing.get('comments', [])
    except:
        pass

# Populate crawled_data and category_fill
for cat, items in real_data.items():
    db_data['category_fill'][cat] = []
    for i, item in enumerate(items):
        # Create a unique ID
        item_id = 'real_{}_{}'.format(cat, i)
        
        heat = generate_random_heat()
        
        # Add to category_fill
        fill_item = {
            'id': item_id,
            'title': item['title'],
            'desc': item['desc'],
            'heat': heat,
            'tag': item['tag']
        }
        db_data['category_fill'][cat].append(fill_item)
        
        # Add to crawled_data (for hot tab)
        db_data['crawled_data'][item_id] = {
            'heat': heat,
            'title': item['title'],
            'desc': item['desc'],
            'category': cat,
            'days': '1-2 Days' if cat in ['1d', 'weekend'] else '3-7 Days'
        }

# Write to DB
with io.open(DB_PATH, 'w', encoding='utf-8') as f:
    f.write(json.dumps(db_data, ensure_ascii=False, indent=4).decode('utf-8'))

print "Successfully populated travel_db.json with {} items per category.".format(18)
