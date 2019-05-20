<?php
/* Smarty version 3.1.32, created on 2019-03-06 11:53:17
  from 'E:\code\03-php\2019-3-1php_database\templates\index.html' */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.32',
  'unifunc' => 'content_5c7f442de83267_63549112',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '783414230287395a098134622b499f491dc177c2' => 
    array (
      0 => 'E:\\code\\03-php\\2019-3-1php_database\\templates\\index.html',
      1 => 1551844394,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_5c7f442de83267_63549112 (Smarty_Internal_Template $_smarty_tpl) {
?><!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        .block{
            height: 1000px;
            border:solid 1px red;
        }
    </style>
</head>
<body>
    <div class="block">


    </div>
    <!-- 图书板块 -->
    <h1>图书板块</h1>
    <div class="book">
        <ul>
            <?php
$_from = $_smarty_tpl->smarty->ext->_foreach->init($_smarty_tpl, $_smarty_tpl->tpl_vars['data']->value, 'value');
if ($_from !== null) {
foreach ($_from as $_smarty_tpl->tpl_vars['value']->value) {
?>
            <li>
                <p>书名：<?php echo $_smarty_tpl->tpl_vars['value']->value["bookname"];?>
</p>
                <p>作者：<?php echo $_smarty_tpl->tpl_vars['value']->value["author"];?>
</p>
                <p>价格：<?php echo $_smarty_tpl->tpl_vars['value']->value["price"];?>
</p>
                <p>封面：<img src='<?php echo $_smarty_tpl->tpl_vars['value']->value["picture"];?>
' /></p>
            </li>
            <?php
}
}
$_smarty_tpl->smarty->ext->_foreach->restore($_smarty_tpl, 1);?>
        </ul>
    </div>

    <!-- 目前比较流行的前后端分离方式 -->
    <!-- <?php echo '<script'; ?>
 src="./js/public.js"><?php echo '</script'; ?>
>
    <?php echo '<script'; ?>
>
        ajax({
            url:"01-connect-mysql.php",
            success:function(data){
                console.log(data);
                var obj = JSON.parse(data);
                console.log(obj)
                var str = "";
                for(var i=0;i<obj.length;i++){
                    str+="书名："+obj[i].bookname+" 作者："+obj[i].author+"   价格："+obj[i].price+"<br />";
                }

                var book = document.querySelector(".book");
                book.innerHTML = str;
            }
        })
    <?php echo '</script'; ?>
> -->
</body>
</html><?php }
}
