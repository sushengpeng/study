<?php
    include "inc/dbconn.php";


    if(isset($_REQUEST["uname"])){
        $uname = $_REQUEST["uname"];
        $pwd = $_REQUEST["pwd"];
    }else{
        $uname = $_COOKIE["uname"];
        $pwd = $_COOKIE["pwd"];
    }
    

    $sql = "select * from userlist where uname='$uname' and pwd='$pwd'";
    $result =  $conn->query($sql);
    if($result->num_rows==1){
        echo "验证通过";
    }else{
        echo "验证失败";
    }
    $conn->close();
?>
