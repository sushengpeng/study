<?php
    include "init.inc.php";
    include "inc/dbconn.php";

    $sql = "select * from booklist ";
    $result = $conn->query($sql);
    if($result->num_rows>0){
        while($row = mysqli_fetch_assoc($result)){
            $arr[] = $row;
        }
    }
    // echo json_encode($arr);
    $conn->close();

    $smarty->assign("data",$arr);
    $smarty->display("index.html");
?>