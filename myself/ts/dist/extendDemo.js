"use strict";
class Animal11 {
    constructor(name) {
        this.name = name;
    }
    move() {
        console.log(111, this.name);
    }
}
class Dog extends Animal11 {
    bark() {
        console.log('Woof! Woof!');
    }
}
let dog = new Dog("worf");
dog.move();
dog.bark();
