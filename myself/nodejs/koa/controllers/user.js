/*
 * @Autor: flygg123
 * @Date: 2022-04-30 13:27:24
 * @LastEditTime: 2022-05-01 21:06:36
 * @LastEditors: Please set LastEditors
 * @Description:
 */
const Result = require("../utils/result");
import { set_userInfo } from "../db/sql"
const uuid = require('uuid')
//接口函数
class UserController {
  // 新增一条数据
  async getUserName(ctx) {
    ctx.body = {
      code: 200,
      message: "叫我詹111躲躲",
      type: "warning",
    };
  }
  async setUser(ctx) {
    const { account, userName, password } = ctx.request.body;
    const id = uuid.v1()
    try {
      let setResult = set_userInfo()
      ctx.body = new Result(shopList).success();
    } catch (error) {
      ctx.body = new Result(shopList).fail();
      throw error;
    }
  }
}

module.exports = {
  UserController,
};
