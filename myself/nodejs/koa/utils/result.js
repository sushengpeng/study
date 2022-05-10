const index = require("../config/index")
const Msg = require("./Msg")
/**
 * @author flygg123
 * @param {any} data 
 * @param {Object} options 
 */
class Result {
  constructor(data, options = {}) {
    this.statusCode = options.statusCode || "000000"
    this.options = options
    this.data = {
      data: data,
      msg: new Msg().getMsg(this.statusCode),
    }

  }
  success() {
    this.data.statusCode = this.statusCode || index.success_status_code
    return this.data
  }
  fail() {
    this.data.statusCode = this.statusCode || index.fail_status_code
    return this.data
  }
}
module.exports = Result