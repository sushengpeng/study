<?php
    include "conn.php";
    $oneclass='母婴家用';
    $twoclass='';
    $title=$_REQUEST['title'];
    $price=$_REQUEST['price'];
    $unique_code=$_REQUEST['unique_code'];
    $supplier_price=$_REQUEST['supplier_price'];
    $min_retail_price=$_REQUEST['min_retail_price'];
    $max_retail_price=$_REQUEST['max_retail_price'];
    $sql="insert into item(title,price,unique_code,supplier_price,min_retail_price,max_retail_price,oneclass,twoclass) values ('$title','$price','$unique_code','$supplier_price','$min_retail_price','$max_retail_price','$oneclass','$twoclass') 
    select * from item
    where not exists (select unique_code from item where unique_code ='$unique_code')";
    // $sql="insert into item(title,price,unique_code,supplier_price,min_retail_price,max_retail_price,oneclass,twoclass) values(1,1,1,1,1,1,1,1)";
    if($conn->query($sql)===TRUE){
        echo "成功";
    }else{
        echo mysql_error();
    }
    $conn->close();

?>