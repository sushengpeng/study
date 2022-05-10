/*
 * @Autor: flygg123
 * @Date: 2022-04-30 12:49:41
 * @LastEditTime: 2022-04-30 15:05:10
 * @LastEditors: Please set LastEditors
 * @Description: 
 */
// router/index.js
const Router = require('koa-router')
const router = new Router()
const UserController  = require("../controllers/user").UserController


//实例
const userController = new UserController()

router.post('/user/serUser', userController.setUser)

module.exports = router

