// Input: root = [3,1,7,null,2,6,10], a = 7, b = 6
// Output: 7
// Explanation: The LCA of nodes 7 and 6 is 7 because 7 is the ancestor of 6.

const BSTLowestCommonAncestor = (root, a, b) =>{

    if(!root) return null
    let current = root

    if(current.val < a.val && current.val < b.val){
        return BSTLowestCommonAncestor(current.right, a, b)
    }
    if(current.val > a.val && current.val > b.val){
        return BSTLowestCommonAncestor(current.left, a, b)
    }

 
    return root;
}