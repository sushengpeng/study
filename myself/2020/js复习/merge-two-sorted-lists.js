// 将两个有序链表合并为一个新的有序链表并返回。

// 新链表是通过拼接给定的两个链表的所有节点组成的。 

// 示例：
// 输入：1->2->4, 1->3->4
// 输出：1->1->2->3->4->4
let arr1 = [1, 2, 4]
let arr2 = [1, 3, 4, 5]
let newArr = arr1.concat(arr2)
let arr = newArr.sort(function (a, b) { return b - a })
function array2list(ary) {
    if (!ary.length) {
        return null
    }
    var head = { value: ary[0], next: null }//浅拷贝
    var pnode = head  //pnode变量用来保存前一个节点
    for (var i = 1; i < ary.length; i++) {
        let node = { value: ary[i], next: null }
        pnode.next = node   //将前一个节点的next指向当前节点
        pnode = node   //将node赋值给pnode
    }

    return head
}
let sortList1 = array2list(arr1)
let sortList2 = array2list(arr2)
let sort1 = sortList1
let sort2 = sortList2
var mergeTwoLists = function (l1, l2) {
    var mergedHead = {
        value: -1,
        next: null
    },
        crt = mergedHead;
    while (l1 && l2) {
        if (l1.value > l2.value) {
            crt.next = l2;
            l2 = l2.next;
        } else {
            crt.next = l1;
            l1 = l1.next;
        }
        crt = crt.next;
    }
    crt.next = l1 || l2;
    return mergedHead.next;
};
console.log(mergeTwoLists(sortList1, sortList2))
sort1