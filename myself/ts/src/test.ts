var message: string = "helloworld"
let flag: boolean = true
let arrNumber: Array<number> = [1, 2, 3]
let arrString: Array<string> = ['1', '2', '3']
let arrBoolean: Array<boolean> = [false, true]
//枚举
enum Direction {
  NORTH,
  SOUTH,
  EAST,
  WEST,
}
let dir: Direction = Direction.SOUTH;
enum Enum {
  A = "0",
  B = "1",
  C = "2",
  D = "3",
  E = "4",
  F = "5",
}
let letter: Enum = Enum.F
let notSure: any = 666;
let value: unknown;
let value1: any = value
let arrList: [string, number] = ['2', 2]
const err = (message: string): never => {
  throw new Error(message);
}
enum CarTransmission {
  Automatic = 200,
  Manual = 300
}

interface Motorcycle {
  vType: "motorcycle"; // discriminant
  make: number; // year
}

interface Car {
  vType: "car"; // discriminant
  transmission: CarTransmission
}

interface Truck {
  vType: "truck"; // discriminant
  capacity: number; // in tons
}
type Vehicle = Motorcycle;
// console.log(Vehicle)
let a: number = -1
console.log(a / 2)

type Factory<T> = T | number | string;
type Stringify<T> = {
  [K in keyof T]: string;
};
interface IFoo {
  prop1: string;
  prop2: number;
  prop3: boolean;
  prop4: () => void;
}
type PartialIFoo = Stringify<IFoo>;
type IsEqual<T> = T extends true ? 1 : 2;
type A = IsEqual<true>; // 1
interface Test2 {
  prop: A
}
function universalAdd<T extends number | bigint | string>(x: T, y: T) {
  return x + (y as any);
}