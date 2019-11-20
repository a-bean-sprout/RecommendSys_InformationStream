$(function () {
    //注册按钮点击
    $("._register").click(function () {
        var nickName = $("._regForm ._nickName").val();
        var userName = $("._regForm ._userName").val();
        var password = $("._regForm ._password").val();
        var confirm = $("._regForm ._confirm").val();
        if (!checkStr(nickName, userName, password, confirm)) return;
        postRegister(nickName, userName, password);
    });

    //注册提交
    function postRegister(nickName, userName, password) {
        $.ajax({
            url: '/api/AccountTest/Register',
            type: 'POST',
            contentType: "application/json",
            dataType: "json",
            data: JSON.stringify({
                "NickName": nickName,
                "UserName": userName,
                "Password": password
            }),
            success: function (data) {
                if (data.Status) {
                    //注册成功
                }
                else {
                    //注册失败
                    alert(data.Data || data.Text);
                }
            }
        });
    };

    //非空检测
    function checkStr(nickName, userName, password, confirm) {

        if (nickName.length < 2) {
            alert("请设置2个字以上的昵称");
            return false;
        }

        if (userName.length < 8) {
            alert("请设置6位以上的账号");
            return false;
        }


        if (password.length < 8) {
            alert("请设置8到16位长度的密码");
            return false;
        }

        if (password != confirm) {
            alert("两次密码输入不一致");
            return false;
        }

        return true;
    };
})