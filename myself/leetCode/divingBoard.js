/**
 * 
 * 
你正在使用一堆木板建造跳水板。有两种类型的木板，其中长度较短的木板长度为shorter，长度较长的木板长度为longer。你必须正好使用k块木板。编写一个方法，生成跳水板所有可能的长度。
返回的长度需要从小到大排列。
输入：
shorter = 1
longer = 2
k = 3
输出： {3,4,5,6}
 */
/**
 * @param {number} shorter
 * @param {number} longer
 * @param {number} k
 * @return {number[]}
 */
var divingBoard = function (shorter, longer, k) {
    let number = []
    let sum = 0
    for (let i = 0; i < k; i++) {
        sum = i * shorter + longer * (k - i)
        if (!number.includes(sum)) { number.push(sum) } 
    }
    return number
};
console.log(divingBoard(1,2,3))
