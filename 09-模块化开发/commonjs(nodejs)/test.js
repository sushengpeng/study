
var nameModule = require('./myModel');   //加载模块


// console.log(nameModule);
nameModule.printName();

// 第二行nameModule.printName(),在第一行require('./myModel.js');之后运行，因此必须等myModel.js加载完成。也就是说，如果加载时间很长，整个应用就会停在那里等。
// 这对服务器端不是一个问题，因为所有的模块都存放在本地硬盘，可以同步加载完成，等待时间就是硬盘的读取时间。但是，对于浏览器，这却是一个大问题，因为模块都放在服务器端，等待时间取决于网速的快慢，可能要等很长时间，浏览器处于"假死"状态。
// 因此，浏览器端的模块，不能采用"同步加载"（synchronous），只能采用"异步加载"（asynchronous）。这就是AMD规范诞生的背景。


nameModule.printFullName("klz");

console.log(very);