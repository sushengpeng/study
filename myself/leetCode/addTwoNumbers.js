let arr1 = [2, 4, 3], arr2 = [5,6,4]

//节点
function ListNode(val, next) {
  let obj = {}
  obj.val = (val === undefined ? 0 : val)
  obj.next = (next === undefined ? null : next)
  return obj
}
/**
 * 创建node节点 {val:2,next:{}}
 *  
 */
// function array2list(arr) {
//   if (!arr.length) {
//     return null
//   }
//   var node
//   var head = { value: arr[0], next: null }
//   var pnode = head  //pnode变量用来保存前一个节点
//   for (var i = 1; i < arr.length; i++) {
//     // node = { value: arr[i], next: null }
//     node = ListNode(arr[i],null)
//     pnode.next = node   //将前一个节点的next指向当前节点
//     pnode = node   //将node赋值给pnode
//   }
//   console.log(head)
//   return head
// }
function array2list(arr1, start = 0) {
  if (start === arr1.length) {
    return null
  }
  var node = {
    value: arr1[start],
    next: null
  }
  var rest = array2list(arr1, start + 1)
  node.next = rest
  return node
}
let l1 = array2list(arr1)
let l2 = array2list(arr2)
var addTwoNumbers = function (l1, l2) {
  let arr = []
  let carry = 0
  // console.log(l1.value)
  while (l1.value && l2.value) {
    let number1 = l1.value
    let number2 = l2.value
    let sum = number1 + number2 + carry
    if (sum >= 10) {
      carry = Math.ceil(sum / 10)
      arr.push(sum % 10)
    } else {
      carry = 0
      arr.push(sum)
    }
    l1 = l1.next == null ? {} : l1.next
    l2 = l2.next == null ? {} : l2.next
  }
  console.log(array2list(arr))
  return array2list(arr)
};
addTwoNumbers(l1, l2)