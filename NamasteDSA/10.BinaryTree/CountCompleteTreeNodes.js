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
var countNodes = function(root) {
    if (!root) return 0;

    const getLeftHeight = (node) => {
        let height = 0;
        while (node) {
            height++;
            node = node.left;
        }
        return height;
    }
 

    let leftHeight = getLeftHeight(root.left);
    let rightHeight = getLeftHeight(root.right);

    if (leftHeight == rightHeight) {
        // Left subtree is perfect
        return (1 << leftHeight) + countNodes(root.right);
    } else {
        // Right subtree is perfect
        return (1 << rightHeight) + countNodes(root.left);
    }
};


// Given the root of a complete binary tree, return the number of the nodes in the tree.

// According to Wikipedia, every level, except possibly the last, is completely filled in a complete binary tree, and all nodes in the last level are as far left as possible. It can have between 1 and 2h nodes inclusive at the last level h.

// Design an algorithm that runs in less than O(n) time complexity.

 

// Example 1:


// Input: root = [1,2,3,4,5,6]
// Output: 6