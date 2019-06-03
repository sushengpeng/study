<?php
    include "conn.php";
    $itemname=$_REQUEST['itemname'];
    $img=$_REQUEST['img'];
    $price=$_REQUEST['price'];
    $class=$_REQUEST['class'];
    $comnum=$_REQUEST['comnum'];
    $field=$_REQUEST['field'];
    $brand=$_REQUEST['brand'];
    $des=$_REQUEST['describe'];
    $weight=$_REQUEST['weight'];
    $gift=$_REQUEST['gift']==1?0:1;
    $sql="insert into t_itemlist(itemname,img,price,class,comnum,field,brand,des,weight,gift) value('$itemname','$img','$price','$class','$comnum','$field','$brand','$des','$weight','$gift')";
    // echo $sql;
    if($conn->query($sql)===TRUE){
        echo "成功";
    }else{
        echo mysql_error();
    }
    $conn->close();

?>