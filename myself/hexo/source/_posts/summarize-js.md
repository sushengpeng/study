---
title: js 基础知识
date: 2019-05-29 13:35:09
tags: js
---

> 1、js中六种原始值类型

``` text
 Null,Undefined,Boolean,Number,String,Symbol
 <!-- 经过typeof运算后 -->
 object,undefined,boolean,number,string,symbol

```

> 2、js中的六种假值

``` text
null,undefined,'',NaN,0,false

```

> 3、js中的隐式转换

``` text
+'1'   =====>1
+'1'+2 =====>3
2+'1'  =====>'21'
```

> 4、浏览器渲染过程

``` text
· 解析html构建dom树，并行请求css/image/js
· css下载完成后，开始构建cssom树
· cssom构建结束后，和dom一起生成Render Tree渲染树
· 布局：计算每个节点的位置
· 显示

```

> 5、dom和bom的区别

``` text
bom的最核心对象是window对象
dom的核心对象是document

```

> 6、函数的防抖和节流

``` text
函数防抖：对于高频率触发的时间，比如屏幕滚动和键盘输入，函数只有在到达给定时间后才触发一次
```

``` javascript
function debounce(fn, delay) {
    var delay = delay || 200;
    var timer;
    return function() {
        var th = this;
        var args = arguments;
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(function() {
            timer = null;
            fn.apply(th, args);
        }, delay);
    };
}
```

``` text
函数节流：函数在固定时间内才触发一次，比如规定时间为10s，在十秒内函数只能执行一次，下一个十秒才能继续触发
```

``` javascript
function throttle(fn, delay) {
    var last;
    var timer;
    var interval = interval || 200;
    return function() {
        var th = this;
        var args = arguments;
        var now = +new Date();
        if (last && now - last < interval) {
            clearTimeout(timer);
            timer = setTimeout(function() {
                last = now;
                fn.apply(th, args);
            }, interval);
        } else {
            last = now;
            fn.apply(th, args);
        }
    }
}
```

> 7、javaScript中的作用域与变量声明提升

``` text
在js中作用域为function(){}内的区域，称为函数作用域

js变量声明提升

使用var对变量进行声明时，js引擎会自动的将变量声明到作用域顶端，在实际代码声明前使用，会报undefined的错误

可使用ES6中的let和const对变量进行声明，可以解决js变量提升的问题
```

> 8、js中的原型链

``` text
每一个js对象上面都有一个__proto__属性，这个属性指向的是该对象的原型，在对象调用自身的方法不存在时，会从__proto__关联的prototype对象上寻找，以此类推，直到找到或者undefined，构成原型链
```

> 9、JavaScript创建对象的几种方式

``` javascript
// 对象字面量方式
person = {
    firstname: 'park',
    lastname: 'yun'
}
// 用function来模拟无参的构造函数
function Person() {}
var person = new Person()
person.name = 'park'
person.lastname = 25
person.work = function() {
    alert()
}
person.work()

// function模拟构造函数
function Pet(name, age, hobby) {
    this.name = name; //this作用域：当前对象
    this.age = age;
    this.hobby = hobby;
    this.eat = function() {
        alert("我叫" + this.name + ",我喜欢" + this.hobby + ",是个程序员");
    }
}
var maidou = new Pet()
maidou.eat() //调用eat方法
```
