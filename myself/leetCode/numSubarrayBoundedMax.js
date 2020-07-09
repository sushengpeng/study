/**
 * @param {number[]} A
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
let A = [876, 880, 482, 260, 132, 421, 732, 703, 795, 420, 871, 445, 400, 291, 358, 589, 617, 202, 755, 810, 227, 813, 549, 791, 418, 528, 835, 401, 526, 584, 873, 662, 13, 314, 988, 101, 299, 816, 833, 224, 160, 852, 179, 769, 646, 558, 661, 808, 651, 982, 878, 918, 406, 551, 467, 87, 139, 387, 16, 531, 307, 389, 939, 551, 613, 36, 528, 460, 404, 314, 66, 111, 458, 531, 944, 461, 951, 419, 82, 896, 467, 353, 704, 905, 705, 760, 61, 422, 395, 298, 127, 516, 153, 299, 801, 341, 668, 598, 98, 241]
let L = 658
let R = 719
var numSubarrayBoundedMax = function (A, L, R) {
    let allLength = A.length
    let resultList = []
    for (let i = 0; i < allLength; i++) {
        if (A[i] > R) continue
        let testArray = []
        for (let j = i; j < allLength; j++) {
            if(A[j]>R) break
            testArray.push(A[j])
            let max = Math.max.apply(null, testArray)
            if (max >= L && max <= R) {
                resultList.push(testArray)
            }
        }
    }
    return resultList
};
console.log(numSubarrayBoundedMax(A, L, R))