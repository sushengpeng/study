let arr1 = [2, 4, 3]
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