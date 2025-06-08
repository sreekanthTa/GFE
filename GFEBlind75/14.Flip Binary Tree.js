/**
 * @param {TreeNode | null} root
 * @return {TreeNode | null}
 */
export default function binaryTreeFlip(root) {
    if (!root) return null;
  
    const left = binaryTreeFlip(root.left);
    const right = binaryTreeFlip(root.right);
  
    root.right = left;
    root.left = right;
  
    return root;
  }
  