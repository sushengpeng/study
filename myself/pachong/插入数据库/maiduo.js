const mysql = require('mysql')
var http = require('http');
// const pool = mysql.createPool({
//   host: 'localhost',
//   user: 'root',
//   passowrd: 'root',
//   database: 'db_maiduo'
// })
// const query = (sql, values) => {
//   return new Promise((resolve, reject) => {
//     pool.getConnection((err, connection) => {
//       if (err) {
//         reject(err)
//         return
//       }
//       connection.query(sql, values, (err, rows) => {
//         if (err) {
//           reject(err)
//           return
//         }
//         resolve(rows)
//         connection.release()
//       })
//     })
//   })
// }
const options = {
  hostname: 'api.maiduoshop.com',
  path: 'index/you-like-products',
  method: 'POST'
};
console.log(http)
http.request(options,(res,error)=>{
  console.log(res)
  console.log(error)
})

