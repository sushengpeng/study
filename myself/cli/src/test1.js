const path = require("path");
const fs = require("fs");
let _path = path.join(__dirname, "../history.json");
// console.log(_path)
// let content = JSON.parse(fs.readFileSync(_path))
let content;
try {
  content = require("../response.json");
} catch (error) {
  content = "";
}
let keyList = ["province", "city", "district"];

if (content) {
  let list = content.districts[0].districts
  list = list.map(item => {
    let { name, adcode, districts } = item;
    let _item = { name, adcode, districts }
    // console.log(_item)
    return _item;
  })
  console.log(list)
  // console.log(list);
  // content.list.unshift({
  //   time: new Date().getTime(),
  //   cli: "npm run dev",
  // });
  // content.list = content.list.slice(0,3)
  // console.log(content);
  let str = JSON.stringify(list);
  console.log(str);
  fs.writeFile("../history1.json", str, "utf8", function (t) {
    console.log("写入成功");
  });
}
function turnParams(obj) {
  if (keyList.includes(obj.level)) {
    let { name, adcode, districts } = item;
    return {
      label: name,
      value: adcode,
      children: districts
    }
  }
}
