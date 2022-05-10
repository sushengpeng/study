/*
 * @Autor: flygg123
 * @Date: 2022-05-01 20:29:28
 * @LastEditTime: 2022-05-01 20:41:48
 * @LastEditors: Please set LastEditors
 * @Description:
 */
const dbQuery = require("../db/index");
//插入用户信息
export function set_userInfo(params: any) {
  let sql = `insert into user (${params.id},${params.account},${params.userName},${params.password})`;
  return dbQuery();
}
