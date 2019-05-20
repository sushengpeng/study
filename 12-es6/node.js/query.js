var mysql = require('mysql');
var pool  = mysql.createPool({
  connectionLimit : 10,
  host            : 'localhost',
  user            : 'root',
  password        : 'root',
  database        : 'db_yuedu'
});


module.exports = function (sql, callback) {
  pool.getConnection(function(err, connection) {
    if (err) throw err; 
    connection.query(sql, function (error, results, fields) {
      // When done with the connection, release it.
      connection.release();
      // Handle error after the release.
      if (error) throw error
      // Don't use the connection here, it has been returned to the pool.
      callback && callback(results)
    });
  });
}
