var app = new Vue({
    //Vue有点像是一个结构体
    //el：#elementid，在元素内可通过{{}}调用。
    el: '#total',
    data: {
        isLogin: false,
        userName: '',
        nickName: '',
        //Vue数组格式为[{},{}]
        materials: [
            {
                "Order": 0,
                "Content": "天涯明月刀OL 明月心与画江湖不良人姬如雪 小苹果音乐",
                "Publisher": "司空琪",
                "Avatar": "./images/tx2.jpg",
                "Video": "https://gss3.baidu.com/6LZ0ej3k1Qd3ote6lo7D0j9wehsv/tieba-smallvideo-transcode/427383164_05fa97b508bdbfc055bf5f286bee7d4d_e4b440bd_1.mp4?authorization=bce-auth-v1%2Fde94045c2e42438fad71ab8df47a6727%2F2017-08-06T06%3A37%3A40Z%2F1800%2F%2F2e8a0b332652bbcdbd0ff6706e25d1e6133810cd5601ebb9e93c506ed5525635"
            },
            {
                "Order": 1,
                "Content": "说的没毛病",
                "Publisher": "夜冷多披肩袈裟",
                "Avatar": "./images/content/1_header.jpg",
                "Images": [
                    "./images/content/1_1.jpg"
                ]
            },
            {
                "Order": 2,
                "Content": "以前住在一个院里，有一男青年瞄上一女，遂每天早晨穿大裤衩子、小背心、跑人门前蹲那刷牙，造成假象……大家都懂得。日复一日，然后那女的果断再没其他人追……然后女友就这么得手了有木有。",
                "Publisher": "tonoon",
                "Avatar": "./images/content/2_header.jpg",
                "Images": [
                    "./images/content/2_1.jpg"
                ]
            },
            {
                "Order": 3,
                "Content": "这破鞋真坑爹",
                "Publisher": "逍遥ベ二十二",
                "Avatar": "./images/content/3_header.jpg",
                "Images": [
                    "./images/content/3_1.jpg"
                ]
            },
            {
                "Order": 4,
                "Content": "大王，我想活",
                "Publisher": "ucyou",
                "Avatar": "./images/content/4_header.jpg",
                "Images": [
                    "./images/content/4_1.jpg"
                ]
            },
            {
                "Order": 5,
                "Content": "刚买的哈士奇，就在啃台阶，这是不是不能要了？",
                "Publisher": "嘻哈嘻哈小王子",
                "Avatar": "./images/content/5_header.jpg",
                "Images": [
                    "./images/content/5_1.jpg"
                ]
            },
            {
                "Order": 6,
                "Content": "以前觉得是恶搞，看来是真的！！！",
                "Publisher": "晨平",
                "Avatar": "./images/content/6_header.jpg",
                "Images": [
                    "./images/content/6_1.jpg"
                ]
            },
            {
                "Order": 7,
                "Content": "这车真的12.98元卖了、那个视频我找不到，只能重新发一个",
                "Publisher": "路过的雷哥",
                "Avatar": "./images/content/7_header.jpg",
                "Images": [
                    "./images/content/7_1.jpg"
                ]
            },
            {
                "Order": 8,
                "Content": "小伙子，你这眼神也太不好了吧！",
                "Publisher": "嘻哈嘻哈小王子",
                "Avatar": "./images/content/8_header.jpg",
                "Images": [
                    "./images/content/8_1.jpg"
                ]
            },
            {
                "Order": 9,
                "Content": "刚接到诈骗電话，张口就来:雷猴【你好】，欧姆闷系冻波嗨涩会【我们是东北黑社会】的，勒的鹅紫在藕们忧桑【你的儿子在我们手上】。。  说着一口正宗的广东话的国语同我在讲電话。。话说我还没结婚生子呢，难道这是一个穿越自未来的電话。。我是不是错过了什么，应该问问我何时结的婚？",
                "Publisher": "北卡羅來納",
                "Avatar": "./images/content/9_header.jpg",
                "Images": [
                    "./images/content/9_1.jpg"
                ]
            },
            {
                "Order": 10,
                "Content": "这是养猪的节奏啊",
                "Publisher": "一曲清酒",
                "Avatar": "./images/content/10_header.jpg",
                "Images": [
                    "./images/content/10_1.jpg"
                ]
            },
            {
                "Order": 11,
                "Content": "我也不知道到底温不温馨啊",
                "Publisher": "孤.城",
                "Avatar": "./images/content/11_header.jpg",
                "Images": [
                    "./images/content/11_1.jpg"
                ]
            },
            {
                "Order": 12,
                "Content": "小时候叫你认真读书你不听，现在字写不好就算了，还尽写错别字，论读书的重要性……",
                "Publisher": "风静云开天晴雨停",
                "Avatar": "./images/content/12_header.JPEG",
                "Images": [
                    "./images/content/12_1.jpg",
                ]
            },
            {
                "Order": 13,
                "Content": "「喜欢就买JustBuy」半价的XPS15开箱 对比MacbookPro，新捡的洋垃圾笔记本开箱，都这么便宜了还要什么自行车？[并不简单]什么？屏幕素质不好？我当然是选择原谅他啊 ",
                "Publisher": "数码科技",
                "Avatar": "./images/tx2.jpg",
                "Video": "./videos/003FPuIdjx07bZz41qM7010f1100zV3U0k01.mp4"
            },
            {
                "Order":"0",
                "Content":"为什么皇上不能为了一个心爱之人舍弃后宫？ ",
                "Publisher": "麦兜叔叔微博",
                "Avatar": "./images/content/7_header.jpg",
                "Images": [
                    "./images/humor/20190821_4407656502167656.jpg",
                ]
            },
            {
                "Order":"0",
                "Content":"人际交往的46条建议，建议收藏，早晚用得上。 ",
                "Publisher": "麦兜叔叔微博",
                "Avatar": "./images/content/7_header.jpg",
                "Images": [
                    "./images/humor/20190820_4407346140756346_1.jpg",
                    "./images/humor/20190820_4407346140756346_2.jpg",
                    "./images/humor/20190820_4407346140756346_3.jpg",
                    "./images/humor/20190820_4407346140756346_4.jpg",
                    "./images/humor/20190820_4407346140756346_5.jpg",
                    "./images/humor/20190820_4407346140756346_6.jpg",
                    "./images/humor/20190820_4407346140756346_7.jpg",
                    "./images/humor/20190820_4407346140756346_8.jpg",
                    "./images/humor/20190820_4407346140756346_9.jpg",
                ]
            },
            {
                "Order":"0",
                "Content":"这日子你羡慕不？？？",
                "Publisher": "麦兜叔叔微博",
                "Avatar": "./images/content/7_header.jpg",
                "Video": "./videos/humor/20190816_4406007494846552.mp4",
            },
            {
                "Order":"0",
                "Content":"女生想要的是什么。",
                "Publisher": "麦兜叔叔微博",
                "Avatar": "./images/content/7_header.jpg",
                "Video": "./videos/humor/20190819_4406972243708813.mp4",
            },
            {
                "Order":"0",
                "Content":"短期交往看脾气长期交往看德行一生交往看人品时间是个好东西验证了人心见证了人性懂得了真的明白了假的没有过不去的经历只有走不出的自己 ",
                "Publisher": "感悟人生-V",
                "Avatar": "./images/head/21.jpg",
                "Images": [
                    "./images/life/20190721_4396407437754327_1.jpg",
                    "./images/life/20190721_4396407437754327_2.jpg",
                    "./images/life/20190721_4396407437754327_3.jpg",
                    "./images/life/20190721_4396407437754327_4.jpg",
                    "./images/life/20190721_4396407437754327_5.jpg",
                    "./images/life/20190721_4396407437754327_6.jpg",
                    "./images/life/20190721_4396407437754327_7.jpg",
                    "./images/life/20190721_4396407437754327_8.jpg",
                    "./images/life/20190721_4396407437754327_9.jpg",
                ]
            },
            {
                "Order":"0",
                "Content":"生命，经不起折腾，人生，经不起等待。不要以为真的有来日方长，慢慢的会人走茶凉。人生有很多事，是不能等的，健康不能等，身体一旦垮了，拥有的一切都没意义了；孝心不能等，父母一旦走了，想孝敬也找不到机会了；感情不能等，人一旦离开了，再想珍惜却为时已晚了；所以，人活着，千万别等，别因一个“等”字，遗憾终生。",
                "Publisher": "一句话经典-V",
                "Avatar": "./images/head/40.jpg",
                "Images": [
                    "./images/life/20190903_4412418581524009_1.jpg",
                    "./images/life/20190903_4412418581524009_2.jpg",
                    "./images/life/20190903_4412418581524009_3.jpg",
                    "./images/life/20190903_4412418581524009_4.jpg",
                    "./images/life/20190903_4412418581524009_5.jpg",
                    "./images/life/20190903_4412418581524009_6.jpg",
                    "./images/life/20190903_4412418581524009_7.jpg",
                    "./images/life/20190903_4412418581524009_8.jpg",
                    "./images/life/20190903_4412418581524009_9.jpg",
                ]
            },
            {
                "Order":"0",
                "Content":"社会在改变，人心更会变！鬼不可怕，因为看不到，人才可怕，因为猜不透。背后的冷枪，面前的伪装，利益的交换，看不懂的嘴脸。其实，社会很单纯，复杂的只是人心！ ",
                "Publisher": "感悟人生-V",
                "Avatar": "./images/head/21.jpg",
                "Images": [
                    "./images/life/20181007_4292417584667343_1.jpg",
                    "./images/life/20181007_4292417584667343_2.jpg",
                    "./images/life/20181007_4292417584667343_3.jpg",
                    "./images/life/20181007_4292417584667343_4.jpg",
                    "./images/life/20181007_4292417584667343_5.jpg",
                    "./images/life/20181007_4292417584667343_6.jpg",
                    "./images/life/20181007_4292417584667343_7.jpg",
                    "./images/life/20181007_4292417584667343_8.jpg",
                    "./images/life/20181007_4292417584667343_9.jpg",
                ]
            },
            {
                "Order":"0",
                "Content":"努力过 付出过，就豪气的挥挥手，大步走开，没必要非得等到伤痕累累才知道离开。你活着不是为了取悦谁，给自己留点小傲娇。合适的感情，从来不是费尽心思的讨好。反正离去的，都是风景，留下的，才是人生。 ",
                "Publisher": "一句话经典-V",
                "Avatar": "./images/head/40.jpg",
                "Images": [
                    "./images/life/20180719_4263373081793891_1.jpg",
                    "./images/life/20180719_4263373081793891_2.jpg",
                    "./images/life/20180719_4263373081793891_3.jpg",
                    "./images/life/20180719_4263373081793891_4.jpg",
                    "./images/life/20180719_4263373081793891_5.jpg",
                    "./images/life/20180719_4263373081793891_6.jpg",
                    "./images/life/20180719_4263373081793891_7.jpg",
                    "./images/life/20180719_4263373081793891_8.jpg",
                    "./images/life/20180719_4263373081793891_9.jpg",
                ]
            },
            {
                "Order":"0",
                "Content":"两个人之间，不怕吵得不可开交，就怕冷得不愿多聊。吵架，说明还在乎，冷淡，表示没感情。一个人向你发脾气，是因为你很重要，一个人总是唠叨你，是因为对你关心，一个人主动联系你，是因为心里在意。倘若有一天，唠叨没有了，关心不在了，变得安静了，瞬间懂事了，那么，也就没你什么事了。 ",
                "Publisher": "情感世界v",
                "Avatar": "./images/head/25.jpg",
                "Images": [
                    "./images/life/20180802_4268483765602838_1.gif",
                    "./images/life/20180802_4268483765602838_2.gif",
                    "./images/life/20180802_4268483765602838_3.gif",
                    "./images/life/20180802_4268483765602838_4.gif",
                    "./images/life/20180802_4268483765602838_5.gif",
                    "./images/life/20180802_4268483765602838_6.gif",
                    "./images/life/20180802_4268483765602838_7.gif",
                    "./images/life/20180802_4268483765602838_8.gif",
                    "./images/life/20180802_4268483765602838_9.gif",
                ]
            },
            {
                "Order":"0",
                "Content":"漫漫人生路，走走停停；形形色色的人，来来去去。有的人，教你学会了珍惜，却已离你而去；有的人，无论你怎么改变，都陪伴着你，不离不弃。后来，我懂了：有的人，希望你开心；有的人，盼着你伤心；还有的人，对你漠不关心。所以，该学会好好照顾自己！不要让关心你的人担心，让看你笑话的人开心，为不在意你的人伤心。",
                "Publisher": "情感世界v",
                "Avatar": "./images/head/25.jpg",
                "Images": [
                    "./images/life/20180812_4272077969694480_1.jpg",
                    "./images/life/20180812_4272077969694480_2.jpg",
                    "./images/life/20180812_4272077969694480_3.jpg",
                    "./images/life/20180812_4272077969694480_4.jpg",
                    "./images/life/20180812_4272077969694480_5.jpg",
                    "./images/life/20180812_4272077969694480_6.jpg",
                    "./images/life/20180812_4272077969694480_7.jpg",
                    "./images/life/20180812_4272077969694480_8.jpg",
                    "./images/life/20180812_4272077969694480_9.jpg",
                ]
            },
            {
                "Order":"0",
                "Content":"        生活不会一直善待我们，我们总会遇到各种各样的挫折，但是不要沮丧，这是生活用它的方式在激励我们成长，也不要轻易放弃，所有的历练都会为我们书写一个更好的明天！#励志人生感悟##早安# ",
                "Publisher": "励志的乌鸦",
                "Avatar": "./images/head/2.jpg",
                "Images": [
                    "./images/life/20190123_4331506393079245.jpg",
                ]
            },
            {
                "Order":"0",
                "Content":"        不要对挫折叹气，那都是成功之前应该经历的，挫折与失败都是成功路上的色彩斑斓，勇敢去经历，从容去面对，加油。#励志人生感悟##早安# ",
                "Publisher": "励志的乌鸦",
                "Avatar": "./images/head/2.jpg",
                "Images": [
                    "./images/life/20190123_4331508124425074.jpg",
                ]
            },
            {
                "Order":"0",
                "Content":"越是成熟的人，越是不需要追求那种表面的热闹，不需要过于追求被他人的理解，也不需要过多的渴求去理解别人。既懂得爱自己，又懂得尊重别人。 ",
                "Publisher": "解放先生",
                "Avatar": "./images/head/47.jpg",
                "Images": [
                    "./images/life/20190120_4330448383390124.jpg",
                ]
            },
            {
                "Order":"0",
                "Content":"人生不过是居家，出门，又回家。我们一切的情感，理智和意志上的追求或企图，不过是灵魂上的思乡病。想找一个人，一件事，一处地位，容许我们的身心在这茫茫的世界有个安顿的归宿。—— 钱钟书 ",
                "Publisher": "解放先生",
                "Avatar": "./images/head/47.jpg",
                "Images": [
                    "./images/life/20190120_4330446672138227.jpg",
                ]
            },
            {
                "Order":"0",
                "Content":"你努力的时候不管多么的狼狈不堪都是你自己最美的模样#天南地北话短长##一段文字,一种心情#  ",
                "Publisher": "情文感悟",
                "Avatar": "./images/head/77.jpg",
                "Images": [
                    "./images/life/20190118_4329693412829984_1.jpg",
                    "./images/life/20190118_4329693412829984_2.jpg",
                    "./images/life/20190118_4329693412829984_3.jpg",
                    "./images/life/20190118_4329693412829984_4.jpg",
                    "./images/life/20190118_4329693412829984_5.jpg",
                    "./images/life/20190118_4329693412829984_6.jpg",
                    "./images/life/20190118_4329693412829984_7.jpg",
                    "./images/life/20190118_4329693412829984_8.jpg",
                    "./images/life/20190118_4329693412829984_9.jpg",
                ]
            },
            {
                "Order":"0",
                "Content":"论香港明星说普通话的搞笑程度，古天乐认第二，没人敢认第一！ 视频先生的秒拍视频 ",
                "Publisher": "视频先生",
                "Avatar": "./images/head/77.jpg",
                "Video": "./videos/life/20181227_4321831903137543.mp4",
            },
            {
                "Order":"0",
                "Content":"#新鲜笑点# 这个训练项目也太难了吧！能量君是无法完成的#每天笑出正能量# 每天笑出正能量的微博视频 ",
                "Publisher": "正能量笑长",
                "Avatar": "./images/head/32.jpg",
                "Video": "./videos/life/20190107_4325799571767411.mp4",
            },
            {
                "Order":"0",
                "Content":"郎咸平：中国的手机支付太不方便了！日本就做的很好！ 视频先生的秒拍视频 ",
                "Publisher": "视频先生",
                "Avatar": "./images/head/77.jpg",
                "Video": "./videos/life/20181228_4322141140424281.mp4",
            },
            {
                "Order":"0",
                "Content":"#张嘉倪全家福#张嘉倪被老公买超求婚3次 细节好浪漫！别人家的老公！神奇大佬超话 神奇大佬的微博视频 ",
                "Publisher": "神奇大佬",
                "Avatar": "./images/head/57.jpg",
                "Video": "./videos/life/20181230_4322825852159532.mp4",
            },
            {
                "Order":"0",
                "Content":"《夏洛特烦恼》哈哈哈！上天给了重生的机会就要勇敢的向喜欢的人表白好励志鸭！#每天笑出正能量# #新鲜笑点# 每天笑出正能量的微博视频 ",
                "Publisher": "正能量笑长",
                "Avatar": "./images/head/32.jpg",
                "Video": "./videos/life/20190102_4323925569999382.mp4",
            },
            {
                "Order":"0",
                "Content":"你#买过最丑的衣服# 是哪件？？？ ",
                "Publisher": "蜻蜓队长",
                "Avatar": "./images/head/85.jpg",
                "Images": [
                    "./images/yingshi/20190903_4412456355201848.jpg",
                ]
            },
            {
                "Order":"0",
                "Content":"三口解说《当恶魔呼唤你的名字时》：我叫你一声你敢答应吗？  三口解说的微博视频 ",
                "Publisher": "三口解说",
                "Avatar": "./images/head/54.jpg",
                "Video": "./videos/yingshi/20190903_4412502798265752.mp4",
            },
            {
                "Order":"0",
                "Content":"害...在称呼这个问题上天津话又怎么可能缺席呢 ",
                "Publisher": "怪奇城市图鉴",
                "Avatar": "./images/head/45.jpg",
                "Images": [
                    "./images/yingshi/20190903_4412409944914486_1.jpg",
                    "./images/yingshi/20190903_4412409944914486_2.jpg",
                    "./images/yingshi/20190903_4412409944914486_3.jpg",
                    "./images/yingshi/20190903_4412409944914486_4.jpg",
                ]
            },
            {
                "Order":"0",
                "Content":"【9月待播韩剧盘点】接下来要播出的韩剧也太多了吧！不管是卡司还是题材感觉都很有趣的亚子！！你们最期待哪一部呢1、《浪客行》播出时间：9.20主演：李昇基、裴秀智2、《山茶花开时》播出时间：9.18主演：孔孝真、姜河那3、《请融化我吧》播出时间：9.28主演：池昌旭、元真雅4、《花党：朝鲜婚姻工作所》播出时间：9.16主演：孔升妍、金旻载、朴志训5、《绿豆传》播出时间：9.30主演：金所泫、张东尹6、《奔跑的调查官》播出时间：9.18主演：李枖原、崔贵华7、《阿斯达编年史part3》播出时间：9.7主演：宋仲基、金智媛、张东健8、《清日电子李小姐》播出时间：9.25主演：金相庆、李惠利9、《很便宜，千里马超市》播出时间：9.20主演：李东辉、金炳哲",
                "Publisher": "剧荒少女yo",
                "Avatar": "./images/head/58.jpg",
                "Images": [
                    "./images/yingshi/20190903_4412436922568655_1.jpg",
                    "./images/yingshi/20190903_4412436922568655_2.jpg",
                    "./images/yingshi/20190903_4412436922568655_3.jpg",
                    "./images/yingshi/20190903_4412436922568655_4.jpg",
                    "./images/yingshi/20190903_4412436922568655_5.jpg",
                    "./images/yingshi/20190903_4412436922568655_6.jpg",
                    "./images/yingshi/20190903_4412436922568655_7.jpg",
                    "./images/yingshi/20190903_4412436922568655_8.jpg",
                    "./images/yingshi/20190903_4412436922568655_9.jpg",
                ]
            },
            {
                "Order":"0",
                "Content":"#明星大侦探经典回顾# 做了一份鬼鬼的嘴瓢合集！继女、fa园、山东鸡....哈哈哈哈哈哈哈哈鬼鬼太可爱了！ 名场面放映员张美丽的微博视频 ",
                "Publisher": "名场面放映员张美丽",
                "Avatar": "./images/head/60.jpg",
                "Video": "./videos/yingshi/20190903_4412455059023150.mp4",
            },
            {
                "Order":"0",
                "Content":"儿童剧院编导#夏东海的教育方式# ",
                "Publisher": "李米",
                "Avatar": "./images/head/38.jpg",
                "Images": [
                    "./images/yingshi/20190902_4412206059569335_1.jpg",
                    "./images/yingshi/20190902_4412206059569335_2.jpg",
                    "./images/yingshi/20190902_4412206059569335_3.jpg",
                    "./images/yingshi/20190902_4412206059569335_4.jpg",
                    "./images/yingshi/20190902_4412206059569335_5.jpg",
                    "./images/yingshi/20190902_4412206059569335_6.jpg",
                    "./images/yingshi/20190902_4412206059569335_7.jpg",
                    "./images/yingshi/20190902_4412206059569335_8.jpg",
                    "./images/yingshi/20190902_4412206059569335_9.jpg",
                ]
            },
            {
                "Order":"0",
                "Content":"懂了吗各位 ",
                "Publisher": "尸姐",
                "Avatar": "./images/head/2.jpg",
                "Images": [
                    "./images/yingshi/20190902_4412084404540725.jpg",
                ]
            },
            {
                "Order":"0",
                "Content":"靠我笑死了！问荷兰弟你是霍格沃茨哪个院的，答：我肯定是格兰芬多的啊，最好的学院！谁会去赫奇帕奇呢？小雀斑的纽特学长表示：你这样拉踩我可要伤❤了 #假如荷兰弟在霍格沃茨分院# 神奇动物小只猪的微博视频 ",
                "Publisher": "神奇动物小只猪",
                "Avatar": "./images/head/61.jpg",
                "Video": "./videos/yingshi/20190902_4412150418194274.mp4",
            },
            {
                "Order":"0",
                "Content":"我与完美人生之间只差Fu*k U Money了 ",
                "Publisher": "痞影人科莱昂",
                "Avatar": "./images/head/97.jpg",
                "Images": [
                    "./images/yingshi/20190902_4412162799726896_1.jpg",
                    "./images/yingshi/20190902_4412162799726896_2.gif",
                    "./images/yingshi/20190902_4412162799726896_3.gif",
                ]
            },
            {
                "Order":"0",
                "Content":"花100块化的黄晓明仿妆效果如何？听我的，都点开看！VLOG超话  赵富贵的微博视频 ",
                "Publisher": "赵富贵",
                "Avatar": "./images/head/36.jpg",
                "Video": "./videos/yingshi/20190902_4412119837670395.mp4",
            },
            {
                "Order":"0",
                "Content":"大家怎么看？#成年男人多少工资合适# ",
                "Publisher": "蜻蜓队长",
                "Avatar": "./images/head/85.jpg",
                "Images": [
                    "./images/yingshi/20190902_4412025528447480.jpg",
                ]
            },
            {
                "Order":"0",
                "Content":"哎呀迪士尼那个毒皇后跟小朋友在一起时真的是甜甜甜！嘴上凶巴巴，实际甜掉牙！牵着打扮成白雪公主的小女孩玩，在跟害怕害羞的小朋友说话时特别放缓了语气，还有过不去的毒苹果梗，太可爱了#毒皇后居然这么甜#  神奇动物小只猪的微博视频 ",
                "Publisher": "神奇动物小只猪",
                "Avatar": "./images/head/61.jpg",
                "Video": "./videos/yingshi/20190901_4411802236433587.mp4",
            },
            {
                "Order":"0",
                "Content":"一条【《金斩，有何贵干》爆笑误会合集】mua的！这两个男孩子的友情怎么这么让人疑惑啊哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈！！！#金斩有何贵干#  剧荒少女yo的微博视频 ",
                "Publisher": "剧荒少女yo",
                "Avatar": "./images/head/58.jpg",
                "Video": "./videos/yingshi/20190901_4411697047280983.mp4",
            },
            {
                "Order":"0",
                "Content":"今天开学  又一位校友没赶上火车#霍格沃兹开学了# 夏目家的小诗哥的微博视频 ",
                "Publisher": "夏目家的小诗哥",
                "Avatar": "./images/head/68.jpg",
                "Video": "./videos/yingshi/20190901_4411668426097923.mp4",
            },
            {
                "Order":"0",
                "Content":"有大神把全部漫威电影做成了一分钟的超炫混剪，跪了 #漫威电影一分钟混剪# 痞影人科莱昂的微博视频 ",
                "Publisher": "痞影人科莱昂",
                "Avatar": "./images/head/97.jpg",
                "Video": "./videos/yingshi/20190831_4411408684841166.mp4",
            },
            {
                "Order":"0",
                "Content":"三口解说《致命女人》：遇到这样的老公，谁还想看谈恋爱啊？  三口解说的微博视频 ",
                "Publisher": "三口解说",
                "Avatar": "./images/head/54.jpg",
                "Video": "./videos/yingshi/20190830_4411065288372030.mp4",
            },
            {
                "Order":"0",
                "Content":"接下来好像也没有太多值得期待的电影，是不是觉得很久没有去电影院了？不如看2019已经上映过的豆瓣超8分的电影吧。查漏补缺：➀ 四个春天   𝟖.𝟗➁ 养家之人   𝟖.𝟒➂ 夏目友人帐   𝟖.𝟎➃ 波西米亚狂想曲   𝟖.𝟕➄ 绿皮书   𝟖.𝟗➅ 调音师   𝟖.𝟑➆ 祈祷落幕时   𝟖.𝟎➇ 何以为家   𝟗.𝟏➈ 复仇者联盟4   𝟖.𝟔➀⓿ 天上再见   𝟖.𝟏➀➀ 罗马   𝟖.𝟐➀➁ 卡拉斯：为爱而生   𝟖.𝟏➀➂ 尺八·一声一世    𝟖.𝟎➀➃ 大河唱   𝟖.𝟏➀➄ 绝杀慕尼黑   𝟖.𝟑➀➅ 哪吒之魔童降世   𝟖.𝟖➀➆ 昆虫总动员2   𝟖.𝟐",
                "Publisher": "电影物语",
                "Avatar": "./images/head/31.jpg",
                "Images": [
                    "./images/yingshi/20190829_4410715051645162_1.jpg",
                    "./images/yingshi/20190829_4410715051645162_2.jpg",
                    "./images/yingshi/20190829_4410715051645162_3.jpg",
                    "./images/yingshi/20190829_4410715051645162_4.jpg",
                    "./images/yingshi/20190829_4410715051645162_5.jpg",
                    "./images/yingshi/20190829_4410715051645162_6.jpg",
                    "./images/yingshi/20190829_4410715051645162_7.jpg",
                    "./images/yingshi/20190829_4410715051645162_8.jpg",
                    "./images/yingshi/20190829_4410715051645162_9.jpg",
                ]
            },
            {
                "Order":"0",
                "Content":"21岁小伙从医院醒来，发现世界末日已经到来，街上全是丧尸，这一切不是美剧不是电影，只是一个整蛊真人秀。。。。节目组真的太丧心病狂了。。。由英国著名的魔术师达伦布朗亲手操刀，数百人组成团队，砸重金造末日胜景，直升机、爆炸场面、丧尸团应有尽有，还有各种NPC出场，节目组全程上帝视角记录男主的每一刻举动，真的太太太太刺激了！！拉上小伙伴一起看！！！第一集：达伦布朗 Apocalypse 世界末日（2012）第二集：达伦布朗 Apocalypse 世界末日（2012）",
                "Publisher": "整点电影",
                "Avatar": "./images/head/88.jpg",
                "Images": [
                    "./images/yingshi/20190829_4410673314022203_1.jpg",
                    "./images/yingshi/20190829_4410673314022203_2.jpg",
                    "./images/yingshi/20190829_4410673314022203_3.jpg",
                    "./images/yingshi/20190829_4410673314022203_4.jpg",
                    "./images/yingshi/20190829_4410673314022203_5.jpg",
                    "./images/yingshi/20190829_4410673314022203_6.jpg",
                    "./images/yingshi/20190829_4410673314022203_7.jpg",
                    "./images/yingshi/20190829_4410673314022203_8.jpg",
                    "./images/yingshi/20190829_4410673314022203_9.jpg",
                ]
            },
            {
                "Order":"0",
                "Content":"现在的健身房也太好玩的吧  像会轻功一样 这个项目叫啥 我也想玩 夏目家的小诗哥的微博视频 ",
                "Publisher": "夏目家的小诗哥",
                "Avatar": "./images/head/68.jpg",
                "Video": "./videos/yingshi/20190828_4410247340561577.mp4",
            },
            {
                "Order":"0",
                "Content":"来了来了！韩红怼黄晓明的视频合集来了！！求求韩红老师上中餐厅吧！  名场面放映员张美丽的微博视频 ",
                "Publisher": "名场面放映员张美丽",
                "Avatar": "./images/head/60.jpg",
                "Video": "./videos/yingshi/20190828_4410315951000279.mp4",
            },
            {
                "Order":"0",
                "Content":"《少爷的报恩》 ",
                "Publisher": "尸姐",
                "Avatar": "./images/head/2.jpg",
                "Images": [
                    "./images/yingshi/20190826_4409644023291067_1.jpg",
                    "./images/yingshi/20190826_4409644023291067_2.jpg",
                    "./images/yingshi/20190826_4409644023291067_3.jpg",
                    "./images/yingshi/20190826_4409644023291067_4.jpg",
                ]
            },
            {
                "Order":"0",
                "Content":"饺子导演太惨了，我寻思导演这两个月没干别的就天天画贺图了，哪吒票房破了42亿他就画了42张贺图，每逢10亿还得上色哈哈哈哈哈哈哈，谁能想到这个夏天暑假作业最多的人是饺子导演呢饺子导演：你妈的我太难了，怎么每天都有新作业#暑假作业最多的人# #电影哪吒之魔童降世# ",
                "Publisher": "我有一颗烂番茄",
                "Avatar": "./images/head/40.jpg",
                "Images": [
                    "./images/yingshi/20190822_4408129020450235_1.jpg",
                    "./images/yingshi/20190822_4408129020450235_2.jpg",
                    "./images/yingshi/20190822_4408129020450235_3.jpg",
                    "./images/yingshi/20190822_4408129020450235_4.jpg",
                    "./images/yingshi/20190822_4408129020450235_5.jpg",
                    "./images/yingshi/20190822_4408129020450235_6.jpg",
                    "./images/yingshi/20190822_4408129020450235_7.jpg",
                    "./images/yingshi/20190822_4408129020450235_8.jpg",
                    "./images/yingshi/20190822_4408129020450235_9.jpg",
                ]
            },
            {
                "Order":"0",
                "Content":"【一组「侠女」合集——美且飒！仗剑走天涯。】刘亦菲｜李若彤｜舒淇蒋勤勤｜章子怡｜倪妮周冬雨｜景甜｜杨幂 ",
                "Publisher": "顏控少女",
                "Avatar": "./images/head/75.jpg",
                "Images": [
                    "./images/yingshi/20190821_4407832277611538_1.jpg",
                    "./images/yingshi/20190821_4407832277611538_2.jpg",
                    "./images/yingshi/20190821_4407832277611538_3.jpg",
                    "./images/yingshi/20190821_4407832277611538_4.jpg",
                    "./images/yingshi/20190821_4407832277611538_5.jpg",
                    "./images/yingshi/20190821_4407832277611538_6.jpg",
                    "./images/yingshi/20190821_4407832277611538_7.jpg",
                    "./images/yingshi/20190821_4407832277611538_8.jpg",
                    "./images/yingshi/20190821_4407832277611538_9.jpg",
                ]
            },
            {
                "Order":"0",
                "Content":"今天掰开了揉碎了给你们看看这致郁人间，剪完这个视频我是真的觉得自己即将离开人世。。。#令人窒息的影视合集#  电影少女小猪佩刀的微博视频 ",
                "Publisher": "电影少女小猪佩刀",
                "Avatar": "./images/head/50.jpg",
                "Video": "./videos/yingshi/20190821_4407836509788367.mp4",
            },
            {
                "Order":"0",
                "Content":"昆虫总动员2——来自远方的后援军[星星][星星][星星][星星]，纸飞机观影团超话 之《昆虫总动员2—来自远方的后援军》：瓢虫父子深入南美丛林，小昆虫的一次大冒险！贱萌的瓢虫、吹口哨的黑蚂蚁、黑毛团蜘蛛，哪个昆虫有萌到你？一起来聊聊吧。#观影团联盟# #欢乐暑期档#  纸飞机观影团的微博视频 ",
                "Publisher": "纸飞机观影团",
                "Avatar": "./images/head/39.jpg",
                "Video": "./videos/yingshi/20190820_4407462532632323.mp4",
            },
            {
                "Order":"0",
                "Content":"太带感了！！R级恐怖喜剧电影《准备好了没》发布中文预告！故事讲述一位新娘即将嫁入豪门 ，婚礼当天晚上，姻亲们强迫她参与一项离奇恐怖的捉迷藏游戏「只有躲到天亮不被猎杀，才能成为豪门一员」……这个设定好刺激啊，超喜欢这种题材的电影，期待！  整点电影的微博视频 ",
                "Publisher": "整点电影",
                "Avatar": "./images/head/88.jpg",
                "Video": "./videos/yingshi/20190813_4404943383514627.mp4",
            },
            {
                "Order":"0",
                "Content":"纸飞机观影团超话 之《昆虫总动员2—来自远方的后援军》：萌就Vans了！来自法国的两位导演把昆虫的小小世界搬到了大银幕上，做成了长篇电影，8月17日上海站，与纸飞机一起来看看这部没有对白的奇妙动画吧！#观影团联盟# #欢乐暑期档# ",
                "Publisher": "纸飞机观影团",
                "Avatar": "./images/head/39.jpg",
                "Images": [
                    "./images/yingshi/20190813_4404917374994225.jpg",
                ]
            },
            {
                "Order":"0",
                "Content":"#断句奇才张家辉# 哈哈哈哈哈哈哈哈哈哈或草一早上我又被张家辉笑清醒了！张家辉：我觉得臂力臂力是一个很庞大的年轻团伙 饿了泡碗剧的微博视频 ",
                "Publisher": "饿了泡碗剧",
                "Avatar": "./images/head/62.jpg",
                "Video": "./videos/yingshi/20190809_4403329096013148.mp4",
            },
            {
                "Order":"0",
                "Content":"#男明星爆笑女装片段合集# 哈哈哈哈哈哈哈或或或或或或哈哈哈哈哈这几位哥真滴太有意思了，我剪个视频又笑到脑银子疼哈哈哈哈哈哈哈哈哈哈 啵叽一口小甜饼的微博视频 ",
                "Publisher": "啵叽一口小甜饼",
                "Avatar": "./images/head/40.jpg",
                "Video": "./videos/yingshi/20190808_4402984639274060.mp4",
            },
            {
                "Order":"0",
                "Content":"作为#88VIP体验官#，提前体验了一把VIP权益，#阿里88会员节#，一起来看看吧！Tmall天猫的秒拍视频 ",
                "Publisher": "熊梓淇",
                "Avatar": "./images/head/76.jpg",
                "Video": "./videos/yingshi/20190807_4402624369362808.mp4",
            },
            {
                "Order":"0",
                "Content":"一大波#西安冷门景点合集# 戳评论： ",
                "Publisher": "怪奇城市图鉴",
                "Avatar": "./images/head/45.jpg",
                "Images": [
                    "./images/yingshi/20190803_4401244158237143.jpg",
                ]
            },
            {
                "Order":"0",
                "Content":"哪吒饿了怎么办：#哪吒饿了怎么办# ",
                "Publisher": "影视大魔王",
                "Avatar": "./images/head/70.jpg",
                "Images": [
                    "./images/yingshi/20190731_4400127970029760_1.jpg",
                    "./images/yingshi/20190731_4400127970029760_2.jpg",
                    "./images/yingshi/20190731_4400127970029760_3.jpg",
                    "./images/yingshi/20190731_4400127970029760_4.jpg",
                    "./images/yingshi/20190731_4400127970029760_5.jpg",
                    "./images/yingshi/20190731_4400127970029760_6.jpg",
                ]
            },



        ],
        showArr: [], //展示的集合
        currentIndex: number = 0 , //当前截取值
        hasPushArr:[],
        scrollNum: number = 5,
        isHide: true    //初始值为true，显示为折叠画面
    },
    watch: {},
    created: function () {
        this.initArr();
        this.loadUserInfo(); //初始
        this.bottomLoad();
    },
    methods: {
        loadUserInfo: function () {
            this.userName = localStorage.getItem('username');
            this.nickName = localStorage.getItem('nickname');
            this.nickName && (this.isLogin = true);
        },
        initArr: function () {
            for (let i = 0; i < this.materials.length; i++) {
                const random = Math.floor(Math.random() * (i + 1));
                [this.materials[i], this.materials[random]] = [this.materials[random], this.materials[i]];
            }
            for( let i = 0; i < this.scrollNum && this.currentIndex <this.materials.length ; ++this.currentIndex){
                this.showArr.push(this.materials[this.currentIndex]);
                ++i;
            }
            // contat：数组连接
            // =>代表箭头函数
        },
        addArr: function () {
            //this.currentIndex += 4;
            //if (this.currentIndex > 8) this.currentIndex = 0;
            //let arr = this.materials.filter(x => x.Order > this.currentIndex && x.Order <= this.currentIndex + 4);
            //this.showArr.push(arr);
            for( let i = 0; i < this.scrollNum && this.currentIndex <this.materials.length ; ++this.currentIndex){
                this.showArr.push(this.materials[this.currentIndex]);
                ++i;
            }
        },
        bottomLoad: function () {
            var that = this;
            $(document).on("scroll", function () {
                //真实内容的高度
                var pageHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight);
                //视窗的高度
                var viewportHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight || 0;
                //隐藏的高度
                var scrollHeight = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
                //判断加载视频，文章，回答，医生
                if (pageHeight - viewportHeight - scrollHeight <= 0) that.addArr();
            });
        },

        onShow: function(){
            this.isHide = false;    //点击onShow切换为false，显示为展开画面
        },
        onHide: function(){
            this.isHide = true;    //点击onHide切换为true，显示为折叠画面
        }

    }
});
