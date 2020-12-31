"use strict";
function identity(arg) {
    return arg;
}
var output = identity("myString"); // type of output will be 'string'
var number = identity(1111);
console.log(number);
function loggingIdentity(arg) {
    console.log(arg.length); // Array has a .length, so no more error
    return arg;
}
console.log(loggingIdentity([1, 2, 3, 4, 5]));
var GenericNumber = /** @class */ (function () {
    function GenericNumber() {
    }
    return GenericNumber;
}());
var myGenericNumber = new GenericNumber();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) { return x + y; };
console.log(myGenericNumber.add(10, 11));
