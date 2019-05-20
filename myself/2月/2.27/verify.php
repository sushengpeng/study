<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <?php
    $username=$pwd="";
    $usernameerr=$pwderr="";
    function check_input($data){
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
    }
    if(empty($_GET["username"])){
        $usernameerr="用户名不能为空";
    }else{
        $username=check_input($username);
        if(!preg_match("/^\w{6,18}$/",$username)){
            $usernameerr = "用户名必须是字母数字下划线，并且长度是6-18位";
        }
    }
    if(empty($_GET["pwd"])){
        $pwderr="密码不能为空";
    }else{
        $pwd = check_input($_GET["pwd"]);
        if(!preg_match("/^\w{6,12}$/",$pwd)){
            $pwderr = "密码必须是字母数字下划线，并且长度是6-12位";
        }
    }
    if(empty($usernameerr) || empty($pwderr)){
        echo "登陆成功";
    }else{
        // header("location:verify.php");
    }
     ?>
    <form>
    <label for="username">用户名:
    <input type="text" name="username" id="username" value="<?php echo $username; ?>"><span><?php echo $usernameerr; ?></span>
    </label></br>
    <label for="pwd">密码:
    <input type="text" name="pwd" id="pwd" value="<?php echo $pwd; ?>"><span><?php echo $pwderr; ?></span>
    </label></br>
    <input type="submit">
    </form>
</body>
</html>