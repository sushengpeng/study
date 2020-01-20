/**
 * 创建http服务器
 */

/* 引入http模块 */
var http = require("http");

/* 创建HTTP服务器 */
var server = http.createServer(function(request, response) {
    /* 设置相应的头部 */
    response.writeHead(200, {
        "content-Type" : "text/plain"
    });

    /* 设置相应的数据 */
    response.write("Welcome to Nodejs");
    response.end();
});

/* 设置服务器端口 */
server.listen(8000, function(){
    console.log("Creat server on http://127.0.0.1:8000/");
})