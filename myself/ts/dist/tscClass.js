"use strict";
class Site {
    name() {
        console.log("Runoob");
    }
}
var obj = new Site();
obj.name();
let x;
let y;
// 运行错误，数字类型不能转为 never 类型
// x = 123;
// 运行正确，never 类型可以赋值给 never类型
// x = (()=>{ throw new Error('exception')})();
// // 运行正确，never 类型可以赋值给 数字类型
y = (() => { throw new Error('exception'); })();
// 返回值为 never 的函数可以是抛出异常的情况
function error(message) {
    throw new Error(message);
}
// 返回值为 never 的函数可以是无法被执行到的终止点的情况
function loop() {
    while (true) { }
}
// 元组
let tupleType;
tupleType = ['1', true];
function printEmployeeInformation(emp) {
    console.log("Name: " + emp.name);
    if ("privileges" in emp) {
        console.log("Privileges: " + emp.privileges);
    }
    if ("startDate" in emp) {
        console.log("Start Date: " + emp.startDate);
    }
}
