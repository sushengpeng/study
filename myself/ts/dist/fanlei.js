"use strict";
function identity(arg) {
    return arg;
}
let output = identity("myString"); // type of output will be 'string'
let number = identity(1111);
console.log(number);
function loggingIdentity(arg) {
    console.log(arg.length); // Array has a .length, so no more error
    return arg;
}
console.log(loggingIdentity([1, 2, 3, 4, 5]));
class GenericNumber {
}
let myGenericNumber = new GenericNumber();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) { return x + y; };
console.log(myGenericNumber.add(10, 11));
