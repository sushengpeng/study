---
title: page
date: 2021-03-08 15:08:21
tags: IIFE
---
# 关于IIFE

## 1、定义
``` text
IIFE: Immediately Invoked Function Expression，立即调用的函数表达式
```
### 下面是不进行立即表达式的写法

```javascript
function getName(){}
getName()
//方法声明后自动执行
```
### 常用的写法
```javascript
true && function () { console.log(1) };
//逗号选择符号 操作每个表达式并返回最后一个操作数的值
0, function () { console.log(2) }();
let a = 1, b = 2
let c = () => { return a++, b++, 10 }
console.log(c())
!function () { console.log(3) }();
~function () { console.log(4) }();
-function () { console.log(5) }();
+function () { console.log(6) }();

//new 关键字在创建函数时会执行内部逻辑
new function () { console.log(7) };
new function () { console.log(8) }();
```
``` bash
控制台输出
2
10
3
4
5
6
7
8
```



