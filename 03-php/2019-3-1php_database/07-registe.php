<?php
    include "dbconn.php";
    header("content-type:text/html;charset=utf8");
    $uname = $_REQUEST["uname"];
    $pwd = $_REQUEST["pwd"];

    $sql = "insert into userlist(uname,pwd) values('$uname','$pwd')";
    
    if($conn->query($sql)===TRUE){
        echo "注册成功！";
        // header("location:login.html");   //php页面跳转
    }else{
        echo "注册失败：$sql".$conn->error;
    }
    $conn->close();
?>