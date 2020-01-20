<?php
    header("content-type:text/html;charset=utf8");
    $hostname= "b-a0usu21tqajpo4.bch.rds.gz.baidubce.com";
    $uname="b_a0usu21tqajpo4";
    $pwd="577452275su";
    $dbname="b_a0usu21tqajpo4";

    $conn = new mysqli($hostname,$uname,$pwd,$dbname);
    if($conn->connect_error){
        // die("数据库连接失败：".$conn->connect_error);
    }else{
        // die("数据库连接成功");
    }
?>