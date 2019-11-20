$(function () {
    //进入登陆页面，清空缓存
    localStorage.clear()

    layui.use('layer', function(){
        var layer = layui.layer;
    });

    //登陆提交
    $("._login").click(function () {
        //$()里面是类名 click(）是点击行为的函数
        var userName = $("._logForm ._userName").val();
        var password = $("._logForm ._password").val();
        console.log(userName, password);
        if (!checkLoginStr(userName, password)) return;

        $.ajax({
            url: '/views/user/Login',
            type: 'GET',
            contentType: "application/json",
            dataType: "json",
            data: ({
                "username": userName,
                "password": password
            }),
            success: function (data) {
                // === 使用恒等判断
                if (data.code===0) {
                    localStorage.setItem('username',userName);
                    localStorage.setItem('nickname',data.data[0].nickname);
                    if(!data.data[0].age){
                        layer.msg('新用户需设置个人信息 ,  即将跳转', {time: 4000, icon:6},function(){
                            location.href=('user.html');
                        });
                    }
                    else{
                        localStorage.setItem('sex',data.data[0].sex);
                        localStorage.setItem('age',data.data[0].age);
                        localStorage.setItem('favoriteCat1',data.data[0].favoriteCat1);
                        localStorage.setItem('favoriteCat2',data.data[0].favoriteCat2);
                        localStorage.setItem('favoriteCat3',data.data[0].favoriteCat3);
                        localStorage.setItem('userProfession',data.data[0].userProfession);
                        localStorage.setItem('address',data.data[0].address);
                        localStorage.setItem('company',data.data[0].company);
                        layer.msg('登陆成功', {
                            icon: 1
                            ,time: 1000

                        }, function(){
                            location.href=('index.html');
                        })

                    }
                }
                else {
                    alert("密码或用户名错误");
                }
            }
        });
    });

    //注册按钮点击
    $("._register").click(function () {
        var nickName = $("._regForm ._nickName").val();
        var userName = $("._regForm ._userName").val();
        var password = $("._regForm ._password").val();
        var confirm = $("._regForm ._confirm").val();
        if (!checkRegStr(nickName, userName, password, confirm)) return;
        postRegister(nickName, userName, password);
    });

    //注册提交
    function postRegister(nickName, userName, password) {
        $.ajax({
            url: '/views/user/Register',
            type: 'GET',
            contentType: "application/json",
            dataType: "json",
            data:({
                "nickname": nickName,
                "username": userName,
                "password": password
            }),
            success: function (data) {
                if (data.code===0) {
                    //注册成功 跳转
                    layer.msg('注册成功', {
                        icon: 1
                        ,time: 1000

                    }, function(){
                        window.location.href = "login.html";
                    })
                }
                else {
                    //注册失败
                    alert(data.Data || data.Text);
                }
            }
        });
    };

    //非空检测
    function checkRegStr(nickName, userName, password, confirm) {

        if (nickName.length < 2) {
            alert("请设置2个字以上的昵称");
            return false;
        }

        if (userName.length < 3) {
            alert("请设置3位以上的账号");
            return false;
        }


        if (password.length < 4) {
            alert("请设置4到16位长度的密码");
            return false;
        }

        if (password != confirm) {
            alert("两次密码输入不一致");
            return false;
        }

        return true;
    };

    function checkLoginStr(userName, password) {
        console.log(userName, password);
        if (userName.length < 3) {
            alert("用户名长度在3到16位");
            return false;
        }

        if (password.length < 4) {
            alert("密码长度在4到16位");
            return false;
        }
        return true;
    };

    function storageUserInfo(userName, nickName) {
        localStorage.setItem("userName", userName); //存入 参数： 1.调用的值 2.所要存入的数据 
        localStorage.setItem("nickName", nickName); //存入 参数： 1.调用的值 2.所要存入的数据 
    }
});