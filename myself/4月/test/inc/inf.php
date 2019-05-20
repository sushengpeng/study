<?php
    include "dbconn.php";
    $num=$_REQUEST["num"];
    $sql = "select * from commity where id>$num limit 5";
    $result = $conn->query($sql);
    if($result->num_rows>0){
        while($row = mysqli_fetch_assoc($result)){
            $value[] = $row;
        }
    }
    echo json_encode($value);
    $conn->close();
    // $smarty->assign("data",$arr);
?>