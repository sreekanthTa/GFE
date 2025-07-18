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
var diameterOfBinaryTree = function(root) {

    let max = 0

    const findDiameterWithHeight = (node) => {

        if(!node) return 0

        const lf = findDiameterWithHeight(node.left)
        const rf =findDiameterWithHeight(node.right)

        max = Math.max(max, lf +rf)

        return 1+ Math.max(lf, rf)
    }
    
    findDiameterWithHeight(root)

    return max
    
};




// Given the root of a binary tree, return the length of the diameter of the tree.

// The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

// The length of a path between two nodes is represented by the number of edges between them.

 

// Example 1:


// Input: root = [1,2,3,4,5]
// Output: 3
// Explanation: 3 is the length of the path [4,2,1,3] or [5,2,1,3].