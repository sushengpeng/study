function identity<T>(arg: T): T {
    return arg;
}
let output = identity<string>("myString");  // type of output will be 'string'
let number = identity<number>(1111);
console.log(number)
function loggingIdentity<T>(arg: Array<T>): Array<T> {
    console.log(arg.length);  // Array has a .length, so no more error
    return arg;
}
console.log(loggingIdentity([1, 2, 3, 4, 5]))
class GenericNumber<T> {
    zeroValue: T | undefined;
    add: ((x: T, y: T) => T) | undefined;
}
let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
console.log(222);

myGenericNumber.add = function (x, y) { return x + y; };
console.log(myGenericNumber.add(10, 11))

function combine<Type>(a: Type[], b: Type[]): Type[] {
    return a.concat(b);
}
const arr1 = combine<number | string>([11, 2, 3], ['1', '2','3'])