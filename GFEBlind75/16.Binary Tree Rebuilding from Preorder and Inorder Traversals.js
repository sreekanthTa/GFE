/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode | null}
 */
// class TreeNode {
//     val: number;
//     left: TreeNode | null;
//     right: TreeNode | null;
  
//     constructor(
//       val: number,
//       left: TreeNode | null = null,
//       right: TreeNode | null = null,
//     ) {
//       this.val = val;
//       this.left = left;
//       this.right = right;
//     }
//   }
  
  export default function binaryTreeRebuildingFromTraversals(preorder, inorder) {
     let preOrderIndex = 0
  
     let inOrderIndexes = {}
     
     for(let i = 0; i<inorder.length; i++){
      inOrderIndexes[inorder[i]] = i
     }
  
    function arrayToTree(left, right){
  
      if(left>right) return null;
  
      let rootVal = preorder[preOrderIndex++]
  
      let root = new TreeNode(rootVal);
  
      root.left = arrayToTree(left, inOrderIndexes[rootVal] -1);
  
      root.right = arrayToTree(inOrderIndexes[rootVal] + 1, right);
  
      return root;
  
    }
  
    return arrayToTree(0, preorder.length-1);
  
  }



// Input: preorder = [3,1,2,6,5,9], inorder = [1,2,3,5,6,9]
// Output: [3,1,6,null,2,5,9]
// Explanation: The root is 3, with left subtree [1, 2] and right subtree [6, 5, 9].