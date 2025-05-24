// Input: root = [13,null,-55]
// Output: [[13],[-55]]
// Explanation: The root has two levels: the first level with the value 13, and the second level with the value -55.
/**
 * @param {TreeNode | null} root
 * @return {number[][]}
 */
export default function binaryTreeLevelOrderTraversal(root) {
    const queue = [root];
    const result = [];
  
    while (queue.length > 0) {
      const lefvel = [];
      const size = queue.length;
      for (let i = 0; i < size; i++) {
        const node = queue.shift();
        lefvel.push(node.val);
        if (node.left) {
          queue.push(node.left);
        }
        if (node.right) {
          queue.push(node.right);
        }
      }
      result.push(lefvel);
    }
  
    return result;
  }
  