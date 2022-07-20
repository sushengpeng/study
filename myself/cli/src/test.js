const path = require("path");
const fs = require("fs");
let _path = path.join(__dirname, "../history.json");
// console.log(_path)
// let content = JSON.parse(fs.readFileSync(_path))
let content;
try {
  content = require("../history.json");
} catch (error) {
  content = "";
}
console.log(1111)
if (content) {
  console.log(content);
  content.list.unshift({
    time: new Date().getTime(),
    cli: "npm run dev",
  });
  // content.list = content.list.slice(0,3)
  console.log(content);
  let str = JSON.stringify(content);
  console.log(str);
  fs.writeFile("./history1.json", str, "utf8", function (t) {
    console.log("写入成功");
  });
}
