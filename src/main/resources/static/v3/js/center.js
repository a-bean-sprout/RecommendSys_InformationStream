var app = new Vue({
    el: '#center',
    data: {
        isLogin: false,
        userInfo: {
            Id: '',
            userName: '',
            nickName: '',
            City: '',
            Sex: 1,
            Job: '',
            ImageSrc: ''
        },
        totalPageCount: number = 0,
        pager: {
            PageSize: 5,
            PageIndex: 1
        },
        materials: [] //物料集合
    },
    watch: {},
    created: function () {
        this.loadUserInfo(); //初始

    },
    methods: {
        loadUserInfo: function () {
            var localstroage = window.localStorage;
            this.userInfo.userName = localstroage.getItem('username');
            this.userInfo.nickName = localstroage.getItem('nickname');
        },

        loginOut: function () {
            alert("sss");
            var localstroage = window.localStorage;
            localstroage.removeItem("userName");
            localstroage.removeItem("nickName");
            window.location.href = "login.html";
        },

        postFrom: function () {

            var Image = $("#file1").val();
            console.log(Image);
        }
    }
});