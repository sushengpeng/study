const query = require('./index')

class CommentModel {
  constructor() { }
  static test(values) {
    const _sql = `SELECT * FROM t_filelist`
    return query(_sql, values)
  }
  static fileCeated(values) {
    const _sql = `INSERT INTO t_filelist (path,filename) VALUES (${values.path},${values.filename})`
    return query(_sql, values)
  }
}

module.exports = CommentModel