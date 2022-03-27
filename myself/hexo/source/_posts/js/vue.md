---
title: vue
date: 2019-05-07 22:11:07
categories: 
           - [vue,vue-base]
---

### 主要学习的是vue中组建components的创建和使用

----------
* 1、全局注册
```html
    <div id='#app'>
    <!-- 1、组件在注册完成后调用组件
    2、这里使用的是扩折号的命名方式也可以使用大驼峰的命名 ，在html中使用时需将大写转化成小写字母间需要-连接,例：
    命名:FristCompontent
    使用<frist-compontent>
    因为html中标签大小写都会默认为小写
    3、使用小驼峰无法正常显示
    4、组件中如果包含别的组件时可直接使用大驼峰的方式使用
    -->
    <frist-compontent></frist-compontent>
    </div>
```

```javascript
    //声明方式:
    Vue.component('frist-compontent',{
        template:`
        <div>
        这是我的第一个组件
        <SecondCompontent></SecondCompontent>
        </div>
        `//组件模板
    })
    Vue.component('SecondCompontent',{
        template:`
        <div>这是我的第二个组件</div>
        `//组件模板
    })
    
```
* 2、局部注册
```javescript
```