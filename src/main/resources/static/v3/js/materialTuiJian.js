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
                "Content":"《夏洛特烦恼》哈哈哈！上天给了重生的机会就要勇敢的向喜欢的人表白好励志鸭！#每天笑出正能量# #新鲜笑点# 每天笑出正能量的微博视频 ",
                "Publisher": "正能量笑长",
                "Avatar": "./images/head/32.jpg",
                "Video": "./videos/life/20190102_4323925569999382.mp4",
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
