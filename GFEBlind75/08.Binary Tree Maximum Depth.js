export default function binaryTreeMaximumDepth(root) {
    if (root == null) return 0;
  
    let left = binaryTreeMaximumDepth(root.left);
    let right = binaryTreeMaximumDepth(root.right);
  
    return 1 + Math.max(left, right);
  }