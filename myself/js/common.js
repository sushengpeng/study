// 2.js
// this.a = 1
// exports.b = 2;
// exports = {
//   c: 3
// }
// module.exports = {
//   d: 4
// }
// exports.e = 5;
// this.f = 6;
// require("./2.js")
// this { a:1,b:2,f:6 }
// module.exports = { d:4 }
// exports = { c:3,e: 5 }
// 真正运行模块代码的辅助函数
// function _require(exports, require, module, __filename, __dirname) {
//   // 目标模块的代码再这里运行
// }
// var modules = {
//   exports: {}
// }
// var exports = modules.exports;
// var __filename = moduleId;
// var __dirname = getDirname(__filename);
// _require.call(exports, exports, modules, __filename, __dirname);
// return module.exports;
const { d } = require("./2")
console.log(d)