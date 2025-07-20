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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    
    let counter = 0
    let answer = -1

    const dfs = (head) =>{
        if(!head) return null

        dfs(head?.left)

        counter+=1
        if(counter == k){
            answer = head.val
            return
        }

        dfs(head?.right)

    }

    dfs(root)
        return answer

};


// Given the root of a binary search tree, and an integer k, return the kth smallest value (1-indexed) of all the values of the nodes in the tree.

 

// Example 1:


// Input: root = [3,1,4,null,2], k = 1
// Output: 1