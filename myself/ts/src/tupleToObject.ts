const tuple1 = ['tesla', 'model 3', 'model X', 'model Y']


type TupleToObject<T = {}> = {
  option<K extends string, V>(key: K extends keyof T ? never : K, value: V): TupleToObject<T & Record<K, V>>
  get(): T
}
// expected { tesla: 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}
type result = TupleToObject<typeof tuple1>


export const tuple = <T extends string[]>(...args: T) => args;
export const tupleNum = <T extends number[]>(...args: T) => args;
const ButtonTypes = tuple('default', 'primary', 'ghost', 'dashed', 'link', 'text');
const ButtonNumber = tupleNum(1, 2, 3)
export type ButtonType = typeof ButtonTypes[number];

interface Point {
  x: number
  y: number
  z: number
}
type keys = keyof Point;
const k: keys = "y"

// function getValue(obj: Object, name: string) {
//   return obj[name];
// }

function getValue<T extends object, K extends keyof T>(obj: T, name: K): T[K] {
  return obj[name];
}
function copyFields<T extends U, U>(target: T, source: U): T {
  for (let id in source) {
      target[id] = (<T>source)[id]; //<T>source 就是 source as T
  }
  return target;
}

let x = { a: 1, b: 2, c: 3, d: 4 };

copyFields(x, { b: 10, d: 20 });
