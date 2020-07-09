
//创建跟节点
/**
给定一个二叉树和一个目标和，判断该树中是否存在根节点到叶子节点的路径，这条路径上所有节点值相加等于目标和。

说明: 叶子节点是指没有子节点的节点。

示例: 
给定如下二叉树，以及目标和 sum = 22，
//              5            1
//          4       8        2
//      11       13    4     4
//    7    2              1  6
 */
class BinaryNode {
    constructor(node) {
        this.val = node;
        this.right = null;
        this.left = null;
    }
}
//创建根节点的构造函数
class BinaryTree {
    constructor() {
        this.val = null
    }
    insert(newNode) {
        // debugger
        //这里是创建节点
        var newNode = new BinaryNode(newNode)
        //如果已经存在根节点
        if (this.val) {
            //这里是往根节点赋值
            this.insertNode(this.val, newNode)
        } else {
            //没有根节点就直接赋值给根节点
            this.val = newNode
        }
    }
    insertNode(node, newNode) {
        // debugger
        //node为上一层根节点，
        //比较值，如果上层节点大于新的值，则往左子树赋值
        if (node.val > newNode.val) {
            //这里是没有左子树则直接赋值
            if (node.left === null) {
                node.left = newNode
            } else {
                //如果左子树有值， 则重新调用此函数，
                this.insertNode(node.left, newNode)
            }
        } else {
            if (node.right === null) {
                node.right = newNode
            } else {
                this.insertNode(node.right, newNode)
            }
        }
    }
}
var nodes = [5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1]
var binaryTree = new BinaryTree()
nodes.forEach(node => {
    binaryTree.insert(node)
})
let root = binaryTree.val

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
let sum = 22
var hasPathSum = function (root, sum) {
    if(!root) return false;
    //如果是叶子节点，判断减去这个节点的值是否为0
    if(!root.left&&!root.right) return sum-root.val==0;
    return hasPathSum(root.left, sum - root.val) || hasPathSum(root.right, sum - root.val);

};
console.log(hasPathSum(root, sum))