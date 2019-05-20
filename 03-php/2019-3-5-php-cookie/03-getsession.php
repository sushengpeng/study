<?php
    session_start();
    //获取session，前提是必须session_start();
    echo $_SESSION["uid"];
    $_SESSION["uid"]="sdfsdfed";
    echo $_SESSION["uid"];

    //删除单个session
    unset($_SESSION["uid"]);
    echo $_SESSION["uid"];


    $_SESSION["uid"]="1";
    $_SESSION["uid2"]="2";
    //删除所有session
    session_destroy();

    echo $_SESSION["uid"];
    echo $_SESSION["uid2"];
?>