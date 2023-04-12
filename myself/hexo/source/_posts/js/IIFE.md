---
title: IIFE
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

### call、apply、bind
```javascript
Function.prototype.myCall = function(target,...args){
  target = target || window
  const symbolKey = Symbol()
  target[symbolKey] = this
  const res = target[symbolKey](...args) // args本身是rest参数，搭配的变量是一个数组，数组解构后就可以一个个传入函数中
  delete target[symbolKey] // 执行完借用的函数后，删除掉，留着过年吗？
  return res
}
Function.prototype.myApply = function(target,args){ // 区别就是这里第二个参数直接就是个数组
  target = target || window
  const symbolKey = Symbol()
  target[symbolKey] = this
  const res = target[symbolKey](...args) // args本身是个数组，所以我们需要解构后一个个传入函数中
  delete target[symbolKey] // 执行完借用的函数后，删除掉，留着过年吗？
  return res
}
Function.prototype.myBind = function (target,...outArgs) {
  target = target || {} // 处理边界条件
  const symbolKey = Symbol()
  target[symbolKey] = this
  return function (...innerArgs) { // 返回一个函数
    const res = target[symbolKey](...outArgs, ...innerArgs) // outArgs和innerArgs都是一个数组，解构后传入函数
    // delete target[symbolKey] 这里千万不能销毁绑定的函数，否则第二次调用的时候，就会出现问题。
    return res
  } 
}
```



