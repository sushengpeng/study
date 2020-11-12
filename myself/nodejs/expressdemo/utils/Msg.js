
class Msg {
  constructor() {
    this.statusCodeList = {
      "000000": "操作成功",
      "000001": "数据库访问失败"
    }
  }
  getMsg(statusCode) {
    return this.statusCodeList[statusCode]
  }
}

module.exports = Msg