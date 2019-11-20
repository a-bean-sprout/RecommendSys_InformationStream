var user = new Vue({
    el: '#user-account',
    data: {
        userName: '',
        nickName: '',
    },
    watch: {},
    created: function () {
        this.loadUserInfo(); //初始
    },
    methods: {
        loadUserInfo: function () {
            this.userName = localStorage.getItem('username');
            this.nickName = localStorage.getItem('nickname');
        },
    }
});
