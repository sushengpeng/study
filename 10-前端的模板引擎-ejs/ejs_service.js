var ejs = require("ejs");
var data = ["bba","bmw"];
var str = "<div><%= cars.join(',') %></div>";
var html = ejs.render(str,{cars:data});
console.log(html);