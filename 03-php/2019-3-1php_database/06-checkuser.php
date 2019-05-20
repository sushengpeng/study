<?php
    include "dbconn.php";
    $uname = $_REQUEST["uname"];

    $sql = "select uname from userlist where uname ='$uname'";
    $result = $conn->query($sql);
    if($result->num_rows==0){
        echo "没有重名";
    }else{
        echo "重名";
    }
    $conn->close();
?>