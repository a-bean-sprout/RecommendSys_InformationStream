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
                "Order":"0",
                "Content":"#哪吒之魔童降世# COS哪吒：@乙帅indigo 敖丙：我--------------用了不同风格来诠释这两个角色，可能不算尽善尽美，一些想法最后也没有实现，不过拍了喜欢的东西还是很圆满了！特别感谢各位小伙伴的帮助希望大家喜欢！ ",
                "Publisher": "黄靖翔",
                "Avatar": "./images/head/27.jpg",
                "Images": [
                    "./images/dongman/20190816_4405979515133736_1.jpg",
                    "./images/dongman/20190816_4405979515133736_2.jpg",
                    "./images/dongman/20190816_4405979515133736_3.jpg",
                    "./images/dongman/20190816_4405979515133736_4.jpg",
                    "./images/dongman/20190816_4405979515133736_5.jpg",
                    "./images/dongman/20190816_4405979515133736_6.jpg",
                    "./images/dongman/20190816_4405979515133736_7.jpg",
                    "./images/dongman/20190816_4405979515133736_8.jpg",
                    "./images/dongman/20190816_4405979515133736_9.jpg",
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
                "Content":"#新鲜笑点# 这个训练项目也太难了吧！能量君是无法完成的#每天笑出正能量# 每天笑出正能量的微博视频 ",
                "Publisher": "正能量笑长",
                "Avatar": "./images/head/32.jpg",
                "Video": "./videos/life/20190107_4325799571767411.mp4",
            },
            {
                "Order":"0",
                "Content":"拧瓶盖太简单，霸气女生这么开瓶！#超级红人节# #动漫次元潮# 阿狸的微博视频 ",
                "Publisher": "阿狸",
                "Avatar": "./images/head/83.jpg",
                "Video": "./videos/dongman/20190723_4397278540280808.mp4",
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
                "Content":"#长大后才解其中味的动画片#《葫芦小金刚》值得拥有重温画面，小时候的你真的看懂了吗 ",
                "Publisher": "上美影动画车间",
                "Avatar": "./images/head/5.jpg",
                "Images": [
                    "./images/dongman/20190829_4410670827336999_1.jpg",
                    "./images/dongman/20190829_4410670827336999_2.jpg",
                    "./images/dongman/20190829_4410670827336999_3.jpg",
                    "./images/dongman/20190829_4410670827336999_4.jpg",
                    "./images/dongman/20190829_4410670827336999_5.jpg",
                    "./images/dongman/20190829_4410670827336999_6.jpg",
                    "./images/dongman/20190829_4410670827336999_7.jpg",
                    "./images/dongman/20190829_4410670827336999_8.jpg",
                    "./images/dongman/20190829_4410670827336999_9.jpg",
                ]
            },
            {
                "Order":"0",
                "Content":"前段时间从微博动漫看到国产漫画《真理面具》，感觉剧情很赞，推翻了我对国产漫画剧情只有搞笑幼稚剧情的认知，原来国漫也可以又虐又燃，抽空烧了个静止系mad来卖安利 素材：《真理面具》漫画 音乐：泽野弘之  Call your name 41days林枫的微博视频 ",
                "Publisher": "41days林枫",
                "Avatar": "./images/head/3.jpg",
                "Video": "./videos/dongman/20190824_4408938634071914.mp4",
            },

            {
                "Order":"0",
                "Content":"#谢谢你系列万悟声#第8期送上！@田朴珺 对话《 #足球小将# 》作者#高桥阳一#，探访集英社，《周刊少年Jump》主编惊喜展示#火影忍者# 珍贵原稿，爆柯南式催稿绝招！快戳链接体验日本漫画的热血与激情！探访集英社！电话轰炸？上门堵人？《少年JUMP》总编回忆催稿绝招！ ",
                "Publisher": "谢谢你系列-万悟声",
                "Avatar": "./images/head/98.jpg",
                "Video": "./videos/dongman/20190802_4400809078851025.mp4",
            },
            {
                "Order":"0",
                "Content":"#动漫次元潮# 史诗级科普！这只哪吒算丑化吗？《哪吒》观影前后必备宝典  碧落九重剑_的微博视频 ",
                "Publisher": "碧落九重剑_",
                "Avatar": "./images/head/42.jpg",
                "Video": "./videos/dongman/20190725_4397993501873852.mp4",
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
            /*
            for (let i = 0; i < this.materials.length; i++) {
                const random = Math.floor(Math.random() * (i + 1));
                [this.materials[i], this.materials[random]] = [this.materials[random], this.materials[i]];
            }
            */
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
