<?php
    include "conn.php";
    $id=$_REQUEST["id"];
    $sql = "select username from userlist where id=$id and status=true";
    $result=$conn->query($sql);
    if($result->num_rows>0){
        // $row = mysqli_fetch_assoc($result);
        echo '登录成功';
    }else{
        echo "登录失败：$sql".$conn->error;
    }
    $conn->close();
?>