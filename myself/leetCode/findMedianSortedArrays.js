/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let arr = [...nums1, ...nums2].sort((a,b)=>a-b)
  let length = arr.length
  if (length < 2) {
    return arr[0]
  }
  if (length % 2 === 0) {
    return (arr[length / 2 - 1] + arr[length / 2]) / 2
  } else {
    return arr[(length - 1) / 2]
  }
};
let nums1 = [3]
let nums2 = [-2, -1]
findMedianSortedArrays(nums1, nums2)