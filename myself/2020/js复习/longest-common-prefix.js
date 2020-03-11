// 编写一个函数来查找字符串数组中的最长公共前缀。

// 如果不存在公共前缀，返回空字符串 ""。

// 示例 1:

// 输入: ["flower","flow","flight"]
// 输出: "fl"
// 示例 2:

// 输入: ["dog","racecar","car"]
// 输出: ""
// 解释: 输入不存在公共前缀。

// 说明:
// 所有输入只包含小写字母 a-z 。
console.time("总时间")
let arr = ["flower", "flow", "flight"]
// let min = { letter: Infinity, item: '' }
// let letter = ''
// arr.map(item => {
//     if (item.length < min.letter) {
//         min.letter = item.length
//         min.item = item

//     }
// })
// for(let i =0;i<min.item.length;i++){
//     for(let j=0;j<arr.length;j++){
//         if(min.item.slice(0,i)===arr[j].slice(0,i)){
//             // console.log(1)
//         }else{
//             console.log(min.item.slice(0,i-1))
//             break;
//         }
//     }
// }
var longestCommonPrefix = function (strs) {
    if (strs.length < 2) {
        return !strs.length ? '' : strs[0];
    }

    var result = strs[0];

    for (let i = 0; i < result.length; i++) {
        for (let j = 1; j < strs.length; j++) {
            if (result[i] !== strs[j][i]) {
                console.log(result.substring(0, i))
                return result.substring(0, i);
            }
        }
    }
    //   return result;
    console.log(result)
}
longestCommonPrefix(arr)
// console.log(min)
console.timeEnd("总时间")