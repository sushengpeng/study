let obj = {
    '0':'laskdj',
    '1':'lkjlkj',
    '2':'123',
    length:3//必要的
}
let arr = [].slice.call(obj)
//等同于
let arr1 = Array.from(obj)
let arr2 = Object.getOwnPropertyNames(obj)
let newMap = new Map()
newMap.set(1,'222asda')
newMap.set(2,'222asda')
// console.log(arr,arr1,arr2)
// console.log(newMap.get(1))
let arr3 = Array.from(newMap)//[ [ 1, '222asda' ], [ 2, '222asda' ] ]
console.log(arr3)