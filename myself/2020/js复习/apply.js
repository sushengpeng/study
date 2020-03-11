Function.prototype.myCall = function (context, ...args) {
    context = (context == null ? Object : context) || new Object(context)
    const key = Symbol()
    context[key] = this
    const result = context[key](...args)
    delete context[key]
    return result
}
let myFunction = new Function
console.log(myFunction)
var person = {
    fullName: function () {
        console.log(this.firstName + " " + this.lastName);
    }
}
var person1 = {
    firstName: "Bill",
    lastName: "Gates",
}
var person2 = {
    firstName: "Steve",
    lastName: "Jobs",
}
person.fullName.myCall(person1);  // 将返回 "Bill Gates"
let arr = [1, 2, 3, 4]
console.log(Math.max.myCall(null,...arr))