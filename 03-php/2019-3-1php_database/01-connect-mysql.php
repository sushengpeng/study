<?php
    header("content-type:text/html;charset=utf8");
    // $hostname="localhost";
    // $uname="root";
    // $pwd="root";
    // $dbname="bookmanage";

    // $conn = new mysqli($hostname,$uname,$pwd,$dbname);
    // if($conn->connect_error){
    //     die("数据库连接失败！".$conn->connect_error);
    // }
    // echo "连接成功";

    include "dbconn.php";  
    
    if(isset($_REQUEST["id"])){
        $id = $_REQUEST["id"];
        $sql = "select * from booklist where id=$id order by id ";
        // echo $sql;
    }elseif(isset($_REQUEST["con"])){
        $scontent = $_REQUEST["con"];
        $sql = "select * from booklist where bookname like '%$scontent%' or author like '%$scontent%' ";
    }else{
        $sql = "select * from booklist order by id";
    }

    
    $result = $conn->query($sql);
    // var_dump( $result);
    // echo "<br />";
    // $row = mysqli_fetch_assoc($result);
    // var_dump($row);
    // echo "<br />";
    // $row = mysqli_fetch_assoc($result);
    // var_dump($row);
    // echo "<br />";
    // $row = mysqli_fetch_assoc($result);
    // var_dump($row);
    // echo "<br />";
    // $row = mysqli_fetch_assoc($result);
    // var_dump($row);
    // echo "<br />";
    // $row = mysqli_fetch_assoc($result);
    // var_dump($row);
    // echo "<br />";
    // $row = mysqli_fetch_assoc($result);
    // var_dump($row);
    // echo "<br />";
    if($result->num_rows>0){
        while($row=mysqli_fetch_assoc($result)){
            $arr[] = $row;
        }
        // var_dump($arr);
        echo json_encode($arr);
    }else{
        echo "数据不存在";
    }
    $conn->close();

?>