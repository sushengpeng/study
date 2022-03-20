/**
 * 在一个数组中，左边的数如果比右边的数大，则两个数购车一个逆序对，打印所有逆序
 */
let res = []
function reverseOrderPair(arr, l, r) {
  if (l === r) {
    return 0
  }
  let m = l + ((r - l) >> 1)
  reverseOrderPair(arr, l, m)
  reverseOrderPair(arr, m + 1, r)
  merge(arr, l, m, r)
}

function merge(arr, l, m, r) {
  let help = new Array(r - l + 1)
  let p1 = l
  let p2 = m + 1
  let i = 0
  while (p1 <= m && p2 <= r) {
    if (arr[p1] > arr[p2]) {
      // res.push(arr[p1] + ',' + arr[p2])
      for (let z = p1; z <= m; z++) {
        res.push(arr[z] + ',' + arr[p2])
      }
    }
    help[i++] = arr[p1] > arr[p2] ? arr[p2++] : arr[p1++]
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
  console.log(help, res);
}
let arr = [1, 3, 4, 2, 100, 1, 1, 1, 1, 0, 3, 4]
reverseOrderPair(arr, 0, 11)