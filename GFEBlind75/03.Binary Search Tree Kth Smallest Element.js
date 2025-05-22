// A TreeNode has the following interface:

// interface TreeNode {
//   val: number;
//   left: TreeNode | null;
//   right: TreeNode | null;
// }
// Input
// root: TreeNode: Root node of the tree. Examples display a level-order traversal of the tree
// k: number: A positive integer
// Examples
// Input: root = [7,3,10,1,5,8,12], k = 2
// Output: 3
// Explanation: In this BST, the second smallest value is 3.

const kthSmallestInBinaryTree = (root, k) =>{

    let count = 0
    let answer = null

    const dfs = (node) =>{
        if(!node || answer !=null) return null
        dfs(node.left)
        count+=1
        if(count==k) {
            answer = node.val
            return
        }
        dfs(node.right)
    }

    dfs(root)
    return answer
}

const root = [7,3,10,1,5,8,12]
const k = 2

const res = kthSmallestInBinaryTree(root, k)
console.log("Radsf",res)