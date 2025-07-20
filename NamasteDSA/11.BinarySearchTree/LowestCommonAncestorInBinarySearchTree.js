/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    
    if(!root ) return null

    if(root.val < p.val && root.val < q.val){
        return lowestCommonAncestor(root.right, p, q)
    }

    if(root.val > p.val && root.val > q.val){
        return lowestCommonAncestor(root.left, p, q)
    }

    return root
};

// the BST.

// According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”

 

// Example 1:


// Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
// Output: 6
// Explanation: The LCA of nodes 2 and 8 is 6.