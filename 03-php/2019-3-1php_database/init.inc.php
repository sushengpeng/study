<?php
	//必须写成这样的绝对路径，否则当改变根目录php文件到html文件夹后将出现找不到路径的问题
	define("ROOT", str_replace("\\", "/", dirname(__FILE__)).'/');
	include_once(ROOT.'smarty/Smarty.class.php');
    $smarty = new Smarty(); 
    $smarty -> setTemplateDir(ROOT."templates"); //模板存放目录
    $smarty -> setCompileDir(ROOT."templates_c"); //模板编译目录 
    $smarty -> caching = false;     //是否运行缓存
    $smarty -> left_delimiter = "{{"; //左定界符 
    $smarty -> right_delimiter = "}}"; //右定界符 
    $smarty -> auto_literal = false;   //设置左右定界符内允许出现空格
 
	// 如果仅仅把php文件放在根目录，把模板文件放在template文件夹下，那么下面的配置是可行的
	// include_once('smarty/Smarty.class.php');
 //    $smarty = new Smarty(); 
 //    $smarty -> setTemplateDir("./templates"); //模板存放目录
 //    $smarty -> setCompileDir("./templates_c"); //模板编译目录 
 //    $smarty -> caching = false;     //是否运行缓存
 //    $smarty -> left_delimiter = "{"; //左定界符 
 //    $smarty -> right_delimiter = "}"; //右定界符 
 //    $smarty -> auto_literal = false;   //设置分
?>