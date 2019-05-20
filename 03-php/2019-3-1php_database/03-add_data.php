<?php
    include "dbconn.php";
    include "fileupload.php";
    $bookname = $_REQUEST["bookname"];
    $author = $_REQUEST["author"];
    $price = $_REQUEST["price"];

    $face = $_FILES["face"];
    // var_dump($face);
    $imgtype = array("image/png","image/jpeg","image/gif","image/pjpeg");
    $result=fileupload($face,"/upload",$imgtype);
    if($result["error"]===true){
        $imgpath = "/upload/".$result["info"];
        $sql = "insert into booklist(bookname,author,price,picture) values('$bookname','$author','$price','$imgpath')";

        if($conn->query($sql)===TRUE){
            echo "添加成功";
        }else{
            echo "添加失败$sql:".$conn->error;
        }
    }
    
    $conn->close();
?>