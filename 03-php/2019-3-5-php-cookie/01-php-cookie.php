<?php
    //设置cookie
    // setcookie("name","zs",time()+3600);
    // 取回cookie
    // echo $_COOKIE["manage"];
    echo $_COOKIE["name"];
    echo $_COOKIE["aaa"];

    //删除cookie,删除的是当前目录下的cookie
    // setcookie("manage","",0);
    //就想在当前根目录删除manage下的cookie
    // setcookie("manage","",0,"/manage");

    //修改cookie
    setcookie("name","ww",time()+3600);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    
</body>
</html>