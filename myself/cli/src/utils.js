const path = require("path");
const fs = require("fs");
let content;
module.exports = {
  get: () => {
    try {
      content = require("../history.json");
      return content;
    } catch (error) {
      let obj = {
        list: [],
      };
      fs.writeFile(
        path.join(__dirname, "../history.json"),
        JSON.stringify(obj),
        "utf8",
        function (t) {
          console.info("创建成功");
        }
      );
      return obj;
    }
  },
  
  set: (val) => {
    content.list.unshift({
      time: new Date().getTime(),
      cli: val,
    });
    content.list = content.list.slice(0, 3);
    let str = JSON.stringify(content);
    fs.writeFile(
      path.join(__dirname, "../history.json"),
      str,
      "utf8",
      function (t) {
        console.info("写入成功");
      }
    );
  }
};
