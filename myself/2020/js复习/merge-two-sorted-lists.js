// 将两个有序链表合并为一个新的有序链表并返回。

// 新链表是通过拼接给定的两个链表的所有节点组成的。 

// 示例：
// 输入：1->2->4, 1->3->4
// 输出：1->1->2->3->4->4
let arr1 = [1, 2, 4]
let arr2 = [1, 3, 4, 5]
let newArr = arr1.concat(arr2)
let arr = newArr.sort(function(a,b){return b-a})
let list = []
for(let i = 0;i<arr.length;i++){
    let obj = {}
    if(i==0){
        obj.pre = null
    }else{
        list[i-1].next = list[i]
    }
    if(i==arr.length){
        obj.next = null
    }else{
        list[i-1].pre = list[i]
    }
    obj.value = arr[i]
    list.push(obj)
}
console.log(list[0].next)