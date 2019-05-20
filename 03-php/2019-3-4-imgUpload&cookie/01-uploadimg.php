<?php
    header("content-type:text/html;charset=utf8");
//    var_dump($_REQUEST["tx"]);
    include "fileupload.php";
    // var_dump($_FILES);
    $imgtype = array("image/png","image/jpeg","image/gif","image/pjpeg");
    var_dump(fileupload($_FILES["tx"],"/upload",$imgtype));
?>