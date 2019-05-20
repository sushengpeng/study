<?php
    include "inc/dbconn.php";

    $id = $_REQUEST["id"];
    $sql = "delete from booklist where id in ($id)";

    if($conn->query($sql)===TRUE){
        echo "删除成功";
    }else{
        echo "删除不成功：$sql------".$conn->error;
    }

    $conn->close();
?>