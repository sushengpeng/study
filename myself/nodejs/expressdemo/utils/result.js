const index = require("../config/index")
class Result {
  constructor(data, msg = "操作成功", options = {}) {
    this.data = {
      msg: msg,
      statusCode: "000000"
    }
    if (arguments.length === 1) {
      this.data.data = data
    } else if (arguments.length === 2) {
      this.data = {
        ...this.data,
        data:data,
        ...options
      }
    }
  }
  success(){
    this.data.statusCode = index.success_status_code
    return this.data
  }
  fail(){
    this.data.statusCode = index.fail_status_code
    return this.data
  }
}
module.exports = Result