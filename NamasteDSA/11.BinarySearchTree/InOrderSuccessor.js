// Definition for a binary tree node.
function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @return {TreeNode}
 */
var inorderSuccessor = function(root, p) {
    let successor = null;

    while (root) {
         if (p.val < root.val) {
            successor = root;
            root = root.left;
        } else {
            root = root.right;
        }
    }

    return successor;
};

// This function finds the inorder successor of a given node p in a Binary Search Tree (BST). The inorder successor of a node is the node with the smallest key greater than p.val.

// It works by:

// Starting from the root and traversing down the tree.