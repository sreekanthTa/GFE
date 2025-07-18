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
var maxDepth = function(root) {
    const dfs = (node) => {
        if (!node) return 0;

        const leftDepth = dfs(node.left);
        const rightDepth = dfs(node.right);

        return 1 + Math.max(leftDepth, rightDepth);
    };

    return dfs(root);
};
