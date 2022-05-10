/*
 * @Autor: flygg123
 * @Date: 2022-05-01 20:21:05
 * @LastEditTime: 2022-05-01 20:42:23
 * @LastEditors: Please set LastEditors
 * @Description:
 */
const mysql = require("mysql");
const db_config = require("../config/db");
const pool = mysql.createPool({
  host: db_config.host,
  user: db_config.user,
  password: db_config.passowrd,
  database: db_config.database,
});

const dbQuery = (sql: string, values: any) => {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) {
        reject(err);
        return;
      }
      connection.query(sql, values, (err, rows) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(rows);
        connection.release();
      });
    });
  });
};
module.exports = dbQuery;
