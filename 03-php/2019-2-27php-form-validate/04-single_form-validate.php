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
        $uname=$pwd=$sex = "";
        $unameerr = $pwderr = $sexerr= "";
        function check_input($data){
            $data = trim($data);
            $data = stripslashes($data);
            $data = htmlspecialchars($data);
            return $data;
        }
        //获取传过来的uname的值，判断是否为空
        // $uname = $_GET["uname"];   //不能将没有的参数uname赋给一个变量
        if(empty($_GET["uname"])){
            $unameerr="用户名不能为空";
        }else{
            $uname = check_input($_GET["uname"]);
            if(!preg_match("/^\w{6,18}$/",$uname)){
                $unameerr = "用户名必须是字母数字下划线，并且长度是6-18位";
            }
        }

        // $pwd = $_GET["pwd"];
        if(empty($_GET["pwd"])){
            $pwderr="密码不能为空";
        }else{
            $pwd = check_input($_GET["pwd"]);
            if(!preg_match("/^\w{6,12}$/",$pwd)){
                $pwderr = "密码必须是字母数字下划线，并且长度是6-12位";
            }
        }

        //验证性别
        // $sex = $_GET["sex"];
        if(empty($_GET["sex"])){
            $sexerr="性别不能为空";
        }else{
            $sex = check_input($_GET["sex"]);
        }

        if(empty($unameerr) && empty($pwderr) && empty($sexerr)){
            header("location:manage.php");
        }
    ?>
    <form>
        <input type="text" id="uname" name="uname" value="<?php echo $uname; ?>"><span><?php echo $unameerr; ?></span><br/>
        <input type="text" id="pwd" name="pwd" value="<?php echo $pwd; ?>"><span><?php echo $pwderr; ?></span><br/>

        <label>男：<input type="radio" name="sex" value="male" <?php if($sex=="male"){echo "checked";} ?>/></label>
        <label>女：<input type="radio" name="sex" value="female"  <?php if($sex=="female"){echo "checked";} ?>/></label><span><?php echo $sexerr; ?></span><br/>
        <input type="submit" />
    </form>
</body>
</html>