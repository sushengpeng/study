// // 输入: 
// // 输出:
// // [
// //   ["ate","eat","tea"],
// //   ["nat","tan"],
// //   ["bat"]
console.time('总时间')
let arr = ["eat", "tea", "tan", "ate", "nat", "bat"]
groupArr = (str) => {
    let arr = str.split('')
    let mapStr = arr.sort().join('')
    // console.log(mapStr)
    return mapStr
}
let map = new Map()
let result = []
let total = -1
arr.map(item => {
    // console.log(map.has(groupArr(item)))
    let str = groupArr(item)
    if (!map.has(str)) {
        map.set(str)
        total++
        result.push([])
    }
    result[total].push(item)
    // groupArr(item)
})
console.log(result)

// let map = new Map();
// let result = [];
// for (let i = 0; i < strs.length; i++) {
//     const sortStrs = strs[i].split('').sort().join('');
//     if (map.get(sortStrs) !== undefined) {
//         result[map.get(sortStrs)].push(strs[i]);
//     } else {
//         map.set(sortStrs, result.length);
//         result.push([strs[i]]);
//     }
// }

// let res = groupAnagrams[strs]
// console.log(result)
console.timeEnd('总时间')