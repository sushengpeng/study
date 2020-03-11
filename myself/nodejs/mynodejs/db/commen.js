const query = require('./index')

class CommentModel {
  constructor () {}
  static test (values) {
    const _sql = `SELECT * FROM t_filelist`
    return query(_sql, values)
  }
}

module.exports = CommentModel