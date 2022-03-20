/**
 * oddTimeNum2
 * 只有两种数出现奇数次 剩下所有数出现偶数次 找两奇数
 */
function oddTimeNum2(arr: number[]) {
  let eor: number = 0
  let onlyOne: number = 0
  for (let i = 0; i < arr.length; i++) {
    eor ^= arr[i]
  }
  let rightOne: number = eor & (~eor + 1)
  for (let i = 0; i <= arr.length; i++) {
    if ((arr[i] & rightOne) == 0) {
      onlyOne ^= arr[i]
    }
  }
  console.log(onlyOne + " " + (eor ^ onlyOne));

}
let arr: number[] = [2, 4, 3, 2, 5, 4]
oddTimeNum2(arr)