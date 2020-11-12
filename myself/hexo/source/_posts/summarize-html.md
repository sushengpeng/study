---
title: summarize_html
date: 2019-05-28 11:04:23
tags:
---
# 总结html中的问题
> *1*、 页面导入样式时，使用link和@import有什么区别

``` text
· link属于XHTML标签，除了加载CSS外还能用于定义Rss，定义rel连接属性等作用；而@import是Css提供的，只能用于加载Css
· 页面被加载时，林可会同时被加载而@import引用的css会等到页面被加载完后被加载
· link支持使用js控制DOM去改变样式，而@import不支持

```
> *2*、常见的浏览器内核，以及兼容写法

``` text
ie:trident -ms
firefox:Gecko -moz
safari:webkit -webkit
chrome:blink -webkit
opera: presto -o
```
> *3*、title 与 h1 的区别、b 与 strong 的区别、i 与 em 的区别？

``` text
· title属性没有明确的意义只是表示一个标题，而h1表示层次明确的标题，对SEO抓取页面有很大的影响，一个页面最好只有一个h1标题
· strong和em都有强调文本的作用
```
> *4*、meta标签的作用
``` html
<!-- META标签的内容设计对于搜索引擎营销来说是至关重要的一个因素（description、keywords），seo优化 -->
<meta http-equiv="Refresh" content="n;url=http://yourlink"><!-- 定时让网页在指定的时间n内，跳转到你的页面； -->
<meta http-equiv="Content-Type" content="text/html;charset=gb_2312-80">
<meta http-equiv="Content-Language" content="zh-CN">
<!-- 用以说明主页制作所使用的文字以及语言；又如英文是ISO-8859-1字符集，还有BIG5、utf-8、shift-Jis、Euc、Koi8-2等字符集 -->
<meta http-equiv="set-cookie" content="Mon,12 May 2001 00:20:00 GMT">
<!-- cookie设定，如果网页过期，存盘的cookie将被删除。需要注意的也是必须使用GMT时间格式； -->
<meta http-equiv="Pragma" content="no-cache">
<!-- 是用于设定禁止浏览器从本地机的缓存中调阅页面内容，设定后一旦离开网页就无法从Cache中再调出； -->
```
