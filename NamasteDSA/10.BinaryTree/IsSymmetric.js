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
 * @return {boolean}
 */
var isSymmetric = function(root) {

    let leftNode = root.left
    let rightNode = root.right

    const isSymmetric = (left, right) =>{
          
          if(left == null || right == null){
            return left==right
          }
           
          if(left.val != right.val) return false

          return isSymmetric(left.left, right.right)
              && isSymmetric(left.right, right.left)
    }

    return isSymmetric(leftNode, rightNode)
    
};

// Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

 

// Example 1:


// Input: root = [1,2,2,3,4,4,3]
// Output: true