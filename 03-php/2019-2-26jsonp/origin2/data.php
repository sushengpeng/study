<?php
    // 解决跨域方式一：CORS(cross origin resource sharing)跨站资源共享
    // header('Access-Control-Allow-Origin:*');
    // $arr = array("name"=>"zs");
    // echo json_encode($arr);

    //jsonp方式返回的数据
    // echo("alert()");
    // $arr = array("name"=>"zs","age"=>18);
    // echo "clsj(".json_encode($arr).")";

    //改进版的
    $arr = array("name"=>"zs","age"=>18,"hobby"=>"codding");
    $cb = $_GET["callback1"];
    echo $cb."(".json_encode($arr).")";
?>