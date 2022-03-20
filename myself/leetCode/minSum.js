/**
 * 在一个数组中，每一个数左边比当前数小的数累加起来，叫做这个数组的小和
 * [1,3,4,3,5] 1右边比1小的数，没有；3左边比3小的数有1；4:1、3;5:1、3、4
 * 所以 小和数为1+1+3+1+3+4+2=16
 */
// 取出对应数组中的小和
function minSum(arr, l, r) {
  if (l === r) {
    return 0
  }
  let m = l + ((r - l) >> 1)
  return minSum(arr, l, m) + minSum(arr, m + 1, r) + merge(arr, l, m, r)
}
/**
 * [1,3,4,3,5] => [1,3,4]、[3,5] => [1,3]
 * 
 */
function merge(arr, l, m, r) {
  let help = new Array(r - l + 1)
  let p1 = l
  let p2 = m + 1
  let res = 0
  let i = 0
  while (p1 <= m && p2 <= r) {
    res += arr[p1] < arr[p2] ? (r - p2 + 1) * arr[p1] : 0
    help[i++] = arr[p1] < arr[p2] ? arr[p1++] : arr[p2++]
  }
  while (p1 <= m) {
    help[i++] = arr[p1++]
  }
  while (p2 <= r) {
    help[i++] = arr[p2++]
  }
  for (let i = 0; i < help.length; i++) {
    arr[l + i] = help[i]
  }
  console.log(res, help);
  return res
}
let arr = [1, 3, 4, 2, 100, 1, 3, 4, 4]
// let arr = [1, 3, 4, 2, 5]
minSum(arr, 0, 8)