"use strict";
var message = "helloworld";
var flag = true;
var arrNumber = [1, 2, 3];
var arrString = ['1', '2', '3'];
var arrBoolean = [false, true];
//枚举
var Direction;
(function (Direction) {
    Direction[Direction["NORTH"] = 0] = "NORTH";
    Direction[Direction["SOUTH"] = 1] = "SOUTH";
    Direction[Direction["EAST"] = 2] = "EAST";
    Direction[Direction["WEST"] = 3] = "WEST";
})(Direction || (Direction = {}));
var dir = Direction.SOUTH;
var Enum;
(function (Enum) {
    Enum["A"] = "0";
    Enum["B"] = "1";
    Enum["C"] = "2";
    Enum["D"] = "3";
    Enum["E"] = "4";
    Enum["F"] = "5";
})(Enum || (Enum = {}));
var letter = Enum.F;
var notSure = 666;
var value;
var value1 = value;
var arrList = ['2', 2];
var err = function (message) {
    throw new Error(message);
};
var CarTransmission;
(function (CarTransmission) {
    CarTransmission[CarTransmission["Automatic"] = 200] = "Automatic";
    CarTransmission[CarTransmission["Manual"] = 300] = "Manual";
})(CarTransmission || (CarTransmission = {}));
console.log(Vehicle);
