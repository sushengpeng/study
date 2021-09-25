const path = require("path")
const fs = require("fs")
let content = require('../history.json')
module.exports = {
  get: () => {
    return content
  },
  set: (val) => {
    content.list.unshift({
      time: new Date().getTime(),
      cli: val
    })
    content.list = content.list.slice(0,3)
    let str = JSON.stringify(content)
    fs.writeFile(path.join(__dirname,'../history.json'), str, 'utf8', function (t) {
      console.info('写入成功')
    })
  }
}