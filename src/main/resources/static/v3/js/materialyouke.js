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
                "Content":"来了来了！韩红怼黄晓明的视频合集来了！！求求韩红老师上中餐厅吧！  名场面放映员张美丽的微博视频 ",
                "Publisher": "名场面放映员张美丽",
                "Avatar": "./images/head/60.jpg",
                "Video": "./videos/yingshi/20190828_4410315951000279.mp4",
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
