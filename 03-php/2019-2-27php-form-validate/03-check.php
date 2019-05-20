<?php
    header("content-type:text/html;charset=utf8");
    $uname = $_REQUEST["uname"];
    $pwd = $_REQUEST["pwd"];

    function check_input($data){
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
    }

    //如果$uname 验证不通过的时候才创建一个$unameerr,存放提示信息
    if(empty($uname)){
        $unameerr="用户名不能为空";
    }else{
        $uname = check_input($uname);
        if(!preg_match("/^\w{6,18}$/",$uname)){
            $unameerr = "用户名必须是字母数字下划线，并且长度是6-18位";
        }
    }
    
    if(!preg_match("/^\w{6,12}$/",$pwd)){
        $pwderr = "密码必须是字母数字下划线，并且长度是6-12位";
    }

    if(isset($unameerr) || isset($pwderr)){
        header("location:02-login.php?unameerr=".$unameerr."&pwderr=".$pwderr);
    }else{
        //登陆成功，跳转到管理页面
        echo "登陆成功";
    }

?>