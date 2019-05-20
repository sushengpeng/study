<?php
    include "dbconn.php";

    $scontent = $_REQUEST["con"];

    $sql = "select * from booklist where bookname like '%$scontent%' or author like '%$scontent%' ";

    $result = $conn->query($sql);
?>