/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    const obj = {};
    for (let i = 0; i < inorder.length; i++) {
        obj[inorder[i]] = i;
    }

    const constructTree = function(postorder, poststart, postend, inorder, instart, inend, obj) {
        if (poststart > postend || instart > inend) return null;

        const rootVal = postorder[postend];
        const rootIndex = obj[rootVal];
        const root = new TreeNode(rootVal);

        const leftSize = rootIndex - instart;

        root.left = constructTree(
            postorder, poststart, poststart + leftSize - 1,
            inorder, instart, rootIndex - 1, obj
        );

        root.right = constructTree(
            postorder, poststart + leftSize, postend - 1,
            inorder, rootIndex + 1, inend, obj
        );

        return root;
    };

    return constructTree(
        postorder, 0, postorder.length - 1,
        inorder, 0, inorder.length - 1,
        obj
    );
};


// Given two integer arrays inorder and postorder where inorder is the inorder traversal of a binary tree and postorder is the postorder traversal of the same tree, construct and return the binary tree.

 

// Example 1:


// Input: inorder = [9,3,15,20,7], postorder = [9,15,7,20,3]
// Output: [3,9,20,null,null,15,7]