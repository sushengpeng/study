function swap(arr, i, j) {
  let a = arr[i]
  arr[i] = arr[j]
  arr[j] = a
  return arr
}
function quickSort(arr, l, r) {
  if (l >= r) {
    return arr
  }
  let i = r
  let j = r - 1
  let base = arr[r]
  let total = 0
  while (j < i && j >= l) {
    if (base < arr[j]) {
      if (i - j === 1) {
        swap(arr, i, j)
        i--
      } else {
        swap(arr, i, i - 1)
        swap(arr, i, j)
      }
    } else if (base == arr[j]) {
      // j --
      i--
      total++
    }
    j--
    console.log(111)
  }
  console.log(arr)
  quickSort(arr, l, i - 1)
  quickSort(arr, i + 1, r)
}
let arr = [6, 4, 8, 5, 2, 6, 4, 8, 5, 2, 6, 4, 8, 5, 26, 4, 8, 5, 2]
quickSort(arr, 0, 18)