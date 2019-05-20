<?php
   header('Content-type:text/html;charset=utf-8');
   if(!empty($_FILES['upfile'])){
   //文件格式
   $image=array('image/jpg',
     'image/jpeg',
     'image/png',
     'image/pjpeg',
     'image/gif',
     'image/bmp',
     'image/x-png'
   );
  // $updir=$_SERVER['DOCUMENT_ROOT'].$_config['g']['baseUrl'].'/attached/images/';
  $updir='./upload/';
  $upfile=$_FILES['upfile'];
  $name=$upfile['name'];
  $ext=substr($upfile['name'],strpos($upfile['name'],'.'));
  $upname=md5(time().rand(1, 1000)).$ext;
  $type=$upfile['type'];
  $size=$upfile['size'];
  $tmp_name=$upfile['tmp_name'];
  $error=$upfile['error'];
  $ok=0;
   
  foreach ($image as $key=>$value) {
    if($type==$value)$ok=1;
    }
    if($ok=='1' && $error=='0'){
        move_uploaded_file($tmp_name,$updir.$upname);
    //echo '<br>'.$tmp_name.'<br>'.$upname.'<br>'.$updir.'<br>'.$ext.'上传成功';
    //echo '上传成功';
    echo $upname;
    //$im=$updir.$upname;
    //echo $im;
    //echo '<img src='.$updir.$upname.' />';
    //$views->assign('image',$upname);
    //$views->display('default/testupfile.html');
    }
    else echo '上传失败2';
    }
    else echo '上传失败1';


?>