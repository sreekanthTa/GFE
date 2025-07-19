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
var rightSideView = function(root) {
    
    const result = []

    const dfsWithLevel = (node, level) =>{

        if(!node) return
         
        if(result.length==level){
            result.push(node.val)
        } 

        if(node.right) dfsWithLevel(node.right, level+1)
        if(node.left ) dfsWithLevel(node.left, level+1)


    }

    dfsWithLevel(root, 0)

    return result
    
};