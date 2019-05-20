// requirejs的默认路径是引入requireJS的HTML页面目录
require.config({
	baseUrl: 'js',
	paths: {
		'math': 'amd-module/math',
		'people': 'umd-module/people'
	}
});

// 调用模块
// amd和umd都可以使用requirejs来进行模块化
require(['math', 'people'], function (math,people){
	console.log(math.add(1,2));

	var p = new people({
		name: "xiaoming"
	});

	p.showName();
});