/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * nums = [2,7,11,15], target = 9
 */
var twoSum = function (nums, target) {
  let length = nums.length
  for (let i = 0; i < length; i++) {
    let sliceNumber = target - nums[i]
    // let sliceIndex = nums.slice(i+1).indexOf(sliceNumber)+i+1
    // if (sliceIndex > -1 && sliceIndex !== i) {
    //   return [i, sliceIndex]
    // }
    for (let j = i + 1; j < length; j++) {
      if(sliceNumber === nums[j]){
        return [i,j]
      }
    }
  }
  return [0, 0]
};
let arr = [3, 2, 4]
let target = 6
console.log(twoSum(arr, target))