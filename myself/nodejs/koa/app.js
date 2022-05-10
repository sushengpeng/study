/*
 * @Autor: flygg123
 * @Date: 2022-04-30 12:38:12
 * @LastEditTime: 2022-05-01 20:52:36
 * @LastEditors: Please set LastEditors
 * @Description:
 */
// 导入koa
const Koa = require("koa");
const logger = require('koa-logger')
const bodyParser = require("koa-bodyparser");
// 创建一个koa对象
const app = new Koa();
const Router = require("koa-router"); // 引入koa-router
const router = new Router(); // 创建路由，支持传递参数
const user = require('./router/user')
app.use(bodyParser());
app.use(logger())
// 调用router.routes()来组装匹配好的路由，返回一个合并好的中间件
// 调用router.allowedMethods()获得一个中间件，当发送了不符合的请求时，会返回 `405 Method Not Allowed` 或 `501 Not Implemented`
app.use(router.routes());
app.use(
    router.allowedMethods({
        // throw: true, // 抛出错误，代替设置响应头状态
        // notImplemented: () => '不支持当前请求所需要的功能',
        // methodNotAllowed: () => '不支持的请求方式'
    })
    );
    
router.use(user.routes(),user.allowedMethods())
module.exports = app;
