/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {

    if(!root) return []
 
    const result = [];
    const stack = [root]
 
    while(stack.length > 0){
      const element = stack.pop()
      result.push(element.val)
 
      if(element.right) stack.push(element.right)
      if(element.left) stack.push(element.left)
  
    }
  
 
    return result
 
     
 };