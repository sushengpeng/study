---
title: vue-component
date: 2019-05-09 22:47:17
tags: 
---
>子父之间传值传值
* 在子组件标签中用一个自定义的数据名来接收父组件中的数据
```javascript
<child :message='msg'></child>
```

* 在子组件实例中添加props用来存放父组件中传来的值
```javascript
props:['自定义数据名']
// props是vue实例中的基础配置，配置时可以接数组，也可以为对象
props: {
    message:{
        type: String,//这里是希望传入数据的类型
        default:111,//这里是数据没有传入时的默认值
        required:true,//是否必须传入
        validator: function (value) {
        //这里是对传入的值进行验证
        // 这个值必须匹配下列字符串中的一个
        return ['success', 'warning', 'danger'].indexOf(value) !== -1
      }
    }
}
```

```html
    <div id="app">
        <parent></parent>
    </div>
```
```javascript
const child = {
        template:`
        <div class='child'>
            {{message}}
        </div>
        `,
        props:['message']
    }
    const parent = {
        template:`
        <div>
            <child :message="msg"></child>
        </div>
        `,
        data(){
            return {
                msg:'这是父组件中的数据'
            }
        }
    }
    Vue.component('child',child)
    Vue.component('parent',parent)

```
---
> 子组件中向父组件中传值
* 首先在父组件模板中找到子组件标签，绑定自定义事件@自定义的事件名='子组件中需要原生事件触发的方法'
```javascript
    const parent = {
        template:`
        <div >
            <child 
            :message="msg" 
            @change-msg='changeMsg'>
            </child>
        </div>
        `,
        data(){
            return {
                msg:'这是父组件中的数据'
            }
        },
        methods:{
            changeMsg(msg){
                this.msg = msg
            }
        }
    }
```
* 在子组件模板中绑定原生事件
* 这里是在button便签中绑定click事件
* 在子组件模板中添加方法，在方法中通过this.$emit('自定义事件名',传递的数据)
```javascript
 const child = {
        template:`
        <div class='child'>
            {{message}}
            <button @click='change'>按钮</button>
        </div>
        `,
        props:['message'],
        methods:{
            change(){
                this.$emit('change-msg','这是子组件中传入的值')
                console.log(1)
            }
        }
    }
```
* 在父组件中通过添加方法的方式接受子组件中传来的值
```javascript
changeMsg(msg){
    这里的msg就是用来接收传来的值
}
```
>非父子间的传值
* 创建一个中间仓库用来传递数据 `const bus = new Vue()`
* 在需要传送的组件中添加created生命周期函数用来监听数据的变化
`
bus.$on('send:msg',(msg)=>{this.msg=msg})
`
* 在需要传递的组件中的方法中添加 `bus.$emit('send:msg','这是兄弟中传来的值')`
 
``` javascript
    //接受方
    const parent = {
        template:`
        <div >
            {{msg}}
        </div>
        `,
        data(){
            return {
                msg:'这是父组件中的数据'
            }
        },
        created(){
            bus.$on('send:msg',(msg)=>{
                console.log(1)
                this.msg=msg
            })
        }
    }
    //传送方
    const brother={
        template:`
        <div class='brother'>
            <button @click='brother'>按钮</button>
        </div>
        `,
        methods:{
            brother(){
                bus.$emit('send:msg','这是兄弟中传来的值')
            }
        }
    }

```