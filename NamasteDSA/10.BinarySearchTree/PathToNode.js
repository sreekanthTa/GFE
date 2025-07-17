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
 * @param {number} target
 * @return {number[]} The path from root to the target node (or empty if not found)
 */
var findPathToNode = function(root, target) {
    const path = [];

    const dfs = (node) => {
        if (!node) return false;

        path.push(node.val);

        if (node.val === target) return true;

        // Check left or right subtrees
        if (dfs(node.left) || dfs(node.right)) {
            return true;
        }

        // Backtrack if target not found in this path
        path.pop();
        return false;
    };

    dfs(root);
    return path;
};
