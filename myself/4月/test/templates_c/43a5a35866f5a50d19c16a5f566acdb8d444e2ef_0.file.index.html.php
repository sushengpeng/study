<?php
/* Smarty version 3.1.32, created on 2019-03-06 11:40:02
  from 'E:\code\03-php\2019-3-6-smarty\templates\index.html' */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.32',
  'unifunc' => 'content_5c7f4112e6dc64_48001810',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '43a5a35866f5a50d19c16a5f566acdb8d444e2ef' => 
    array (
      0 => 'E:\\code\\03-php\\2019-3-6-smarty\\templates\\index.html',
      1 => 1551843601,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_5c7f4112e6dc64_48001810 (Smarty_Internal_Template $_smarty_tpl) {
?><!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <ul>
        <?php
$_from = $_smarty_tpl->smarty->ext->_foreach->init($_smarty_tpl, $_smarty_tpl->tpl_vars['data']->value, 'value', false, 'key');
if ($_from !== null) {
foreach ($_from as $_smarty_tpl->tpl_vars['key']->value => $_smarty_tpl->tpl_vars['value']->value) {
?>
        <li>
            <p>书名:<?php echo $_smarty_tpl->tpl_vars['value']->value["bookname"];?>
</p>
            <p>作者:<?php echo $_smarty_tpl->tpl_vars['value']->value["author"];?>
</p>
            <p>价格:<?php echo $_smarty_tpl->tpl_vars['value']->value["price"];?>
</p>
            <p>封面:<img src='<?php echo $_smarty_tpl->tpl_vars['value']->value["picture"];?>
' /></p>
        </li>
        <?php
}
}
$_smarty_tpl->smarty->ext->_foreach->restore($_smarty_tpl, 1);?>

    </ul>
    
</body>
</html><?php }
}
