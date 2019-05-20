//定义模块
// 语法:
// define(function(require,exports,module){
// 	require() // 引入依赖
// 	//业务逻辑
// 	exports.fun = fun;
// 	module.exports = {};
// });
define(function (require, exports, module) {
	
	var add = function (x, y){
		return x + y;
	};
	var des = require('cd');
	console.log(des.a);

	exports.add = add;
});