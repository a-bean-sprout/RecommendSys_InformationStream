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
                "Order": 13,
                "Content": "「喜欢就买JustBuy」半价的XPS15开箱 对比MacbookPro，新捡的洋垃圾笔记本开箱，都这么便宜了还要什么自行车？[并不简单]什么？屏幕素质不好？我当然是选择原谅他啊 ",
                "Publisher": "数码科技",
                "Avatar": "./images/tx2.jpg",
                "Video": "./videos/003FPuIdjx07bZz41qM7010f1100zV3U0k01.mp4"
            },
            {
                "Order":"0",
                "Content":"这日子你羡慕不？？？",
                "Publisher": "麦兜叔叔微博",
                "Avatar": "./images/tx2.jpg",
                "Video": "./videos/humor/20190816_4406007494846552.mp4",
            },
            {
                "Order":"0",
                "Content":"女生想要的是什么。",
                "Publisher": "麦兜叔叔微博",
                "Avatar": "./images/tx2.jpg",
                "Video": "./videos/humor/20190819_4406972243708813.mp4",
            },
            {
                "Order":"0",
                "Content":"论香港明星说普通话的搞笑程度，古天乐认第二，没人敢认第一！ 视频先生的秒拍视频 ",
                "Publisher": "视频先生",
                "Avatar": "./images/head/54.jpg",
                "Video": "./videos/life/20181227_4321831903137543.mp4",
            },
            {
                "Order":"0",
                "Content":"#新鲜笑点# 这个训练项目也太难了吧！能量君是无法完成的#每天笑出正能量# 每天笑出正能量的微博视频 ",
                "Publisher": "正能量笑长",
                "Avatar": "./images/head/25.jpg",
                "Video": "./videos/life/20190107_4325799571767411.mp4",
            },
            {
                "Order":"0",
                "Content":"郎咸平：中国的手机支付太不方便了！日本就做的很好！ 视频先生的秒拍视频 ",
                "Publisher": "视频先生",
                "Avatar": "./images/head/54.jpg",
                "Video": "./videos/life/20181228_4322141140424281.mp4",
            },
            {
                "Order":"0",
                "Content":"#张嘉倪全家福#张嘉倪被老公买超求婚3次 细节好浪漫！别人家的老公！神奇大佬超话 神奇大佬的微博视频 ",
                "Publisher": "神奇大佬",
                "Avatar": "./images/head/100.jpg",
                "Video": "./videos/life/20181230_4322825852159532.mp4",
            },
            {
                "Order":"0",
                "Content":"《夏洛特烦恼》哈哈哈！上天给了重生的机会就要勇敢的向喜欢的人表白好励志鸭！#每天笑出正能量# #新鲜笑点# 每天笑出正能量的微博视频 ",
                "Publisher": "正能量笑长",
                "Avatar": "./images/head/25.jpg",
                "Video": "./videos/life/20190102_4323925569999382.mp4",
            },
            {
                "Order":"0",
                "Content":"三口解说《当恶魔呼唤你的名字时》：我叫你一声你敢答应吗？  三口解说的微博视频 ",
                "Publisher": "三口解说",
                "Avatar": "./images/head/37.jpg",
                "Video": "./videos/yingshi/20190903_4412502798265752.mp4",
            },
            {
                "Order":"0",
                "Content":"#明星大侦探经典回顾# 做了一份鬼鬼的嘴瓢合集！继女、fa园、山东鸡....哈哈哈哈哈哈哈哈鬼鬼太可爱了！ 名场面放映员张美丽的微博视频 ",
                "Publisher": "名场面放映员张美丽",
                "Avatar": "./images/head/72.jpg",
                "Video": "./videos/yingshi/20190903_4412455059023150.mp4",
            },
            {
                "Order":"0",
                "Content":"靠我笑死了！问荷兰弟你是霍格沃茨哪个院的，答：我肯定是格兰芬多的啊，最好的学院！谁会去赫奇帕奇呢？小雀斑的纽特学长表示：你这样拉踩我可要伤❤了 #假如荷兰弟在霍格沃茨分院# 神奇动物小只猪的微博视频 ",
                "Publisher": "神奇动物小只猪",
                "Avatar": "./images/head/1.jpg",
                "Video": "./videos/yingshi/20190902_4412150418194274.mp4",
            },
            {
                "Order":"0",
                "Content":"花100块化的黄晓明仿妆效果如何？听我的，都点开看！VLOG超话  赵富贵的微博视频 ",
                "Publisher": "赵富贵",
                "Avatar": "./images/head/68.jpg",
                "Video": "./videos/yingshi/20190902_4412119837670395.mp4",
            },
            {
                "Order":"0",
                "Content":"哎呀迪士尼那个毒皇后跟小朋友在一起时真的是甜甜甜！嘴上凶巴巴，实际甜掉牙！牵着打扮成白雪公主的小女孩玩，在跟害怕害羞的小朋友说话时特别放缓了语气，还有过不去的毒苹果梗，太可爱了#毒皇后居然这么甜#  神奇动物小只猪的微博视频 ",
                "Publisher": "神奇动物小只猪",
                "Avatar": "./images/head/1.jpg",
                "Video": "./videos/yingshi/20190901_4411802236433587.mp4",
            },
            {
                "Order":"0",
                "Content":"一条【《金斩，有何贵干》爆笑误会合集】mua的！这两个男孩子的友情怎么这么让人疑惑啊哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈！！！#金斩有何贵干#  剧荒少女yo的微博视频 ",
                "Publisher": "剧荒少女yo",
                "Avatar": "./images/head/10.jpg",
                "Video": "./videos/yingshi/20190901_4411697047280983.mp4",
            },
            {
                "Order":"0",
                "Content":"今天开学  又一位校友没赶上火车#霍格沃兹开学了# 夏目家的小诗哥的微博视频 ",
                "Publisher": "夏目家的小诗哥",
                "Avatar": "./images/head/94.jpg",
                "Video": "./videos/yingshi/20190901_4411668426097923.mp4",
            },
            {
                "Order":"0",
                "Content":"有大神把全部漫威电影做成了一分钟的超炫混剪，跪了 #漫威电影一分钟混剪# 痞影人科莱昂的微博视频 ",
                "Publisher": "痞影人科莱昂",
                "Avatar": "./images/head/26.jpg",
                "Video": "./videos/yingshi/20190831_4411408684841166.mp4",
            },
            {
                "Order":"0",
                "Content":"三口解说《致命女人》：遇到这样的老公，谁还想看谈恋爱啊？  三口解说的微博视频 ",
                "Publisher": "三口解说",
                "Avatar": "./images/head/37.jpg",
                "Video": "./videos/yingshi/20190830_4411065288372030.mp4",
            },
            {
                "Order":"0",
                "Content":"现在的健身房也太好玩的吧  像会轻功一样 这个项目叫啥 我也想玩 夏目家的小诗哥的微博视频 ",
                "Publisher": "夏目家的小诗哥",
                "Avatar": "./images/head/94.jpg",
                "Video": "./videos/yingshi/20190828_4410247340561577.mp4",
            },
            {
                "Order":"0",
                "Content":"来了来了！韩红怼黄晓明的视频合集来了！！求求韩红老师上中餐厅吧！  名场面放映员张美丽的微博视频 ",
                "Publisher": "名场面放映员张美丽",
                "Avatar": "./images/head/72.jpg",
                "Video": "./videos/yingshi/20190828_4410315951000279.mp4",
            },
            {
                "Order":"0",
                "Content":"今天掰开了揉碎了给你们看看这致郁人间，剪完这个视频我是真的觉得自己即将离开人世。。。#令人窒息的影视合集#  电影少女小猪佩刀的微博视频 ",
                "Publisher": "电影少女小猪佩刀",
                "Avatar": "./images/head/92.jpg",
                "Video": "./videos/yingshi/20190821_4407836509788367.mp4",
            },
            {
                "Order":"0",
                "Content":"昆虫总动员2——来自远方的后援军[星星][星星][星星][星星]，纸飞机观影团超话 之《昆虫总动员2—来自远方的后援军》：瓢虫父子深入南美丛林，小昆虫的一次大冒险！贱萌的瓢虫、吹口哨的黑蚂蚁、黑毛团蜘蛛，哪个昆虫有萌到你？一起来聊聊吧。#观影团联盟# #欢乐暑期档#  纸飞机观影团的微博视频 ",
                "Publisher": "纸飞机观影团",
                "Avatar": "./images/head/45.jpg",
                "Video": "./videos/yingshi/20190820_4407462532632323.mp4",
            },
            {
                "Order":"0",
                "Content":"太带感了！！R级恐怖喜剧电影《准备好了没》发布中文预告！故事讲述一位新娘即将嫁入豪门 ，婚礼当天晚上，姻亲们强迫她参与一项离奇恐怖的捉迷藏游戏「只有躲到天亮不被猎杀，才能成为豪门一员」……这个设定好刺激啊，超喜欢这种题材的电影，期待！  整点电影的微博视频 ",
                "Publisher": "整点电影",
                "Avatar": "./images/head/42.jpg",
                "Video": "./videos/yingshi/20190813_4404943383514627.mp4",
            },
            {
                "Order":"0",
                "Content":"#断句奇才张家辉# 哈哈哈哈哈哈哈哈哈哈或草一早上我又被张家辉笑清醒了！张家辉：我觉得臂力臂力是一个很庞大的年轻团伙 饿了泡碗剧的微博视频 ",
                "Publisher": "饿了泡碗剧",
                "Avatar": "./images/head/69.jpg",
                "Video": "./videos/yingshi/20190809_4403329096013148.mp4",
            },
            {
                "Order":"0",
                "Content":"#男明星爆笑女装片段合集# 哈哈哈哈哈哈哈或或或或或或哈哈哈哈哈这几位哥真滴太有意思了，我剪个视频又笑到脑银子疼哈哈哈哈哈哈哈哈哈哈 啵叽一口小甜饼的微博视频 ",
                "Publisher": "啵叽一口小甜饼",
                "Avatar": "./images/head/33.jpg",
                "Video": "./videos/yingshi/20190808_4402984639274060.mp4",
            },
            {
                "Order":"0",
                "Content":"前段时间从微博动漫看到国产漫画《真理面具》，感觉剧情很赞，推翻了我对国产漫画剧情只有搞笑幼稚剧情的认知，原来国漫也可以又虐又燃，抽空烧了个静止系mad来卖安利 素材：《真理面具》漫画 音乐：泽野弘之  Call your name 41days林枫的微博视频 ",
                "Publisher": "41days林枫",
                "Avatar": "./images/head/85.jpg",
                "Video": "./videos/dongman/20190824_4408938634071914.mp4",
            },
            {
                "Order":"0",
                "Content":"#谢谢你系列万悟声#第8期送上！@田朴珺 对话《 #足球小将# 》作者#高桥阳一#，探访集英社，《周刊少年Jump》主编惊喜展示#火影忍者# 珍贵原稿，爆柯南式催稿绝招！快戳链接体验日本漫画的热血与激情！探访集英社！电话轰炸？上门堵人？《少年JUMP》总编回忆催稿绝招！ ",
                "Publisher": "谢谢你系列-万悟声",
                "Avatar": "./images/head/83.jpg",
                "Video": "./videos/dongman/20190802_4400809078851025.mp4",
            },
            {
                "Order":"0",
                "Content":"#动漫次元潮# 史诗级科普！这只哪吒算丑化吗？《哪吒》观影前后必备宝典  碧落九重剑_的微博视频 ",
                "Publisher": "碧落九重剑_",
                "Avatar": "./images/head/5.jpg",
                "Video": "./videos/dongman/20190725_4397993501873852.mp4",
            },
            {
                "Order":"0",
                "Content":"拧瓶盖太简单，霸气女生这么开瓶！#超级红人节# #动漫次元潮# 阿狸的微博视频 ",
                "Publisher": "阿狸",
                "Avatar": "./images/head/49.jpg",
                "Video": "./videos/dongman/20190723_4397278540280808.mp4",
            },

        ],
        showArr: [], //展示的集合
        currentIndex: number = 0 , //当前截取值
        hasPushArr:[],
        scrollNum: number = 5,
        content: "中华人民共和国位于亚洲东部，太平洋西岸 [1]  ，是工人阶级领导的、以工农联盟为基础的人民民主专政的社会主义国家 [2]  。1949年（己丑年）10月1日成立 [3-4]  ，以五星红旗为国旗 [5]  ，《义勇军进行曲》为国歌 [6]  ，国徽内容包括国旗、天安门、齿轮和麦稻穗 [7]  ，首都北京 [8]  ，省级行政区划为23个省、5个自治区、4个直辖市、2个特别行政区 [9]  ，是一个以汉族为主体民族，由56个民族构成的统一多民族国家，汉族占总人口的91.51% [10]  。新中国成立后，随即开展经济恢复与建设 [11]  ，1953年开始三大改造 [12]  ，到1956年确立了社会主义制度，进入社会主义探索阶段 [13]  。文化大革命之后开始改革开放，逐步确立了中国特色社会主义制度。 [14] 中华人民共和国陆地面积约960万平方公里，大陆海岸线1.8万多千米，岛屿岸线1.4万多千米，内海和边海的水域面积约470多万平方千米。海域分布有大小岛屿7600多个，其中台湾岛最大，面积35798平方千米。 [1]  陆地同14国接壤，与6国海上相邻。",
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
                const randomHead= Math.floor(Math.random() * 10) +1 ;
                this.materials[i].Avatar= "./images/content/" + randomHead +"_header.jpg";
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
