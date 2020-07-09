class Site { 
   name():void { 
      console.log("Runoob") 
   } 
} 
var obj = new Site(); 
obj.name();
let x: never;
let y: number;

// 运行错误，数字类型不能转为 never 类型
// x = 123;

// 运行正确，never 类型可以赋值给 never类型
// x = (()=>{ throw new Error('exception')})();

// // 运行正确，never 类型可以赋值给 数字类型
y = (()=>{ throw new Error('exception')})();

// 返回值为 never 的函数可以是抛出异常的情况
function error(message: string): never {
    throw new Error(message);
}

// 返回值为 never 的函数可以是无法被执行到的终止点的情况
function loop(): never {
    while (true) {}
}
// 元组
let tupleType :[string,boolean]
tupleType = ['1',true]
interface Admin {
  name: string;
  privileges: string[];
}

interface Employee {
  name: string;
  startDate: Date;
}

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
  console.log("Name: " + emp.name);
  if ("privileges" in emp) {
    console.log("Privileges: " + emp.privileges);
  }
  if ("startDate" in emp) {
    console.log("Start Date: " + emp.startDate);
  }
}