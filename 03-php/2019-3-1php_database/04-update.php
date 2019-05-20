<?php
    include "dbconn.php";

    $bookname = $_REQUEST["bookname"];
    $author = $_REQUEST["author"];
    $price = $_REQUEST["price"];
    $id = $_REQUEST["id"];

    $sql = "update booklist set bookname='$bookname',author='$author',price='$price' where id=$id";
    // echo $sql;
    if($conn->query($sql)===TRUE){
        echo '修改成功';
    }else{
        echo "修改失败：$sql".$conn->error;
    }

    $conn->close();
?>