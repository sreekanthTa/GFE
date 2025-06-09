/**
 * @param {TreeNode | null} root
 * @param {TreeNode | null} subRoot
 * @return {boolean}
 */
export default function binaryTreeSubtree(root, subRoot) {
    // Arrays to hold preorder traversal values of root and subRoot
    const roots = [];
    const subRoots = []; // changed name to avoid conflict with function argument
  
    // Preorder traversal of the main root tree
    const traverseRoot = (node) => {
      if (!node) {
        roots.push(`#null`); // push null to keep structure info
        return;
      }
  
      roots.push(`#${node.val}`);
  
      traverseRoot(node.left);
      traverseRoot(node.right);
    };
  
    // Preorder traversal of the subRoot tree
    const traverseSubRoot = (node) => {
      if (!node) {
        subRoots.push(`#null`);
        return;
      }
  
      subRoots.push(`#${node.val}`);
  
      traverseSubRoot(node.left);
      traverseSubRoot(node.right);
    };
  
    traverseRoot(root);
    traverseSubRoot(subRoot);
  
    // Convert to strings to check if subRoots array is a substring of roots array
    const rootsStr = roots.join(',');
    const subRootsStr = subRoots.join(',');
   
    return rootsStr.includes(subRoots);
  }
  


//   Input: root = [1,2,3], subRoot = [1,2]
// Output: false
// Explanation: SubRoot cannot be a subtree since the root node structure differs.