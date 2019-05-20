
var name = 'Tom';   //当前文件私有的
global.very = "good";  //所有文件共有的，不建议使用
function _test(){
    console.log("test");
}

function printName(){
    console.log(name);
    _test();
}

function printFullName(firstName){
    console.log(firstName + name);
}

module.exports = {
    printName: printName,
    printFullName: printFullName
}