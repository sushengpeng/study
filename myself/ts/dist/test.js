"use strict";
var message = "helloworld";
let flag = true;
let arrNumber = [1, 2, 3];
let arrString = ['1', '2', '3'];
let arrBoolean = [false, true];
//枚举
var Direction;
(function (Direction) {
    Direction[Direction["NORTH"] = 0] = "NORTH";
    Direction[Direction["SOUTH"] = 1] = "SOUTH";
    Direction[Direction["EAST"] = 2] = "EAST";
    Direction[Direction["WEST"] = 3] = "WEST";
})(Direction || (Direction = {}));
let dir = Direction.SOUTH;
var Enum;
(function (Enum) {
    Enum["A"] = "0";
    Enum["B"] = "1";
    Enum["C"] = "2";
    Enum["D"] = "3";
    Enum["E"] = "4";
    Enum["F"] = "5";
})(Enum || (Enum = {}));
let letter = Enum.F;
let notSure = 666;
let value;
let value1 = value;
let arrList = ['2', 2];
const err = (message) => {
    throw new Error(message);
};
var CarTransmission;
(function (CarTransmission) {
    CarTransmission[CarTransmission["Automatic"] = 200] = "Automatic";
    CarTransmission[CarTransmission["Manual"] = 300] = "Manual";
})(CarTransmission || (CarTransmission = {}));
// console.log(Vehicle)
