<?php
    include "conn.php";
    $status=$_REQUEST["status"];
    $id=$_REQUEST["id"];
    $sql = "update userlist set status=$status where id=$id";
    if($conn->query($sql)===TRUE){
        echo "成功";
    }else{
        echo "登录失败：$sql".$conn->error;
    }
    $conn->close();
?>