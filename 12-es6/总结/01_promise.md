# promise

> promise是用来解决异步操作的一个新的工具 （之前使用的回调函数），proimise把异步请求变成了链式调用，更符合我们正常的习惯

## priomise方法

* Promise.prototype.then
* Promise.prototype.catch

> 想要调用这两个方法就必须new Promise得到对应的promise对象

### 创建promise

```javascript
var promise = new Promise((resolve, reject) => {
  // 一般会执行一些操作，如果成功则调用resolve失败则调用reject
})

```


```javascript
/* 
  .then方法中有一个函数

  

  如果需要多次.then，则将catch放在最后

 */

promise.then(() => {
  // 这个函数就是在new Promise时的resolve函数
}).catch(() => {
  // 这个函数就是reject函数
})

// resolve函数中的返回值
promise.then(() => {
  return 1
}).then(num => {
  // num 就是1
})

// 如果返回值是一个promise对象
promise.then(() => {
  return promise
}).then((res) => {
  // res就是上一个then中返回的promise对象的.then结果
})
```