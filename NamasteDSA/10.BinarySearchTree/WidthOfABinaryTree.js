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
 * @return {number}
 */
var widthOfBinaryTree = function(root) {

    const queue = []
    queue.push([root,0])

    let first = 0
    let last = 0
    let maxWidth = 0
    
    while(queue.length>0){
        let size = queue.length
        let levelMin = queue[0][1]; // Index of first node in this level


        for(let i = 0; i < size;i++){
               const [node, index] = queue.shift()
               const normalizedIndex  = index - levelMin
               if(i==0)first = normalizedIndex
               if(i==size-1) last = normalizedIndex
               if(node.left) queue.push([node.left, normalizedIndex*2 + 1])
               if(node.right) queue.push([node.right, normalizedIndex*2 + 2])
        }

                maxWidth = Math.max(maxWidth, last - first + 1);


    }

    return maxWidth

     
};


// Given the root of a binary tree, return the maximum width of the given tree.

// The maximum width of a tree is the maximum width among all levels.

// The width of one level is defined as the length between the end-nodes (the leftmost and rightmost non-null nodes), where the null nodes between the end-nodes that would be present in a complete binary tree extending down to that level are also counted into the length calculation.

// It is guaranteed that the answer will in the range of a 32-bit signed integer.

 

// Example 1:


// Input: root = [1,3,2,5,3,null,9]
// Output: 4
// Explanation: The maximum width exists in the third level with length 4 (5,3,null,9).