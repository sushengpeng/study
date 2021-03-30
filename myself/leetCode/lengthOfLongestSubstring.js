/**
 * @param {string} s
 * @return {number}
 */
// var lengthOfLongestSubstring = function (s) {
//   let length = s.length
//   let max = 0
//   if (length <= 1) {
//     max = length
//   } else {
//     for (let i = 0; i < length; i++) {
//       for (let j = i + 1; j < length; j++) {
//         let s1 = s.slice(i, j)
//         let s2 = s.slice(j, j + 1)
//         max = Math.max(max, j - i)
//         if (s1.indexOf(s2) !== -1) {
//           break;
//         } else {
//           if (s1 + s2 === s.slice(i)) {
//             max = s.slice(i).length
//           }
//         }
//       }
//       if (max >= length - i) {
//         break
//       }
//     }
//   }
//   return max
// };
// var lengthOfLongestSubstring = function (s) {
//   let length = s.length
//   let strset = new Set()
//   let right = 0
//   let max = 0
//   for (let i = 0; i < length; i++) {
//     while (right < length && !strset.has(s.charAt(right))) {
//       strset.add(s.charAt(right))
//       console.log(strset)
//       right++
//       console.log(right)
//     }
//     strset.delete(s.charAt(i))
//     max = Math.max(max, right - i)
//     console.log(111,max)
//   }
// };
var lengthOfLongestSubstring = function (s) {
  let length = s.length
  let strset = new Set(s)
  let newStr = [...strset].j
};
let str = "asadfgdasd"
// console.time('time')
lengthOfLongestSubstring(str)
// console.timeEnd('time')