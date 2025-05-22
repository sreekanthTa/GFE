/**
 * @param {TreeNode | null} root
 * @return {boolean}
 */
export default function binarySearchTreeValidate(root) {
    const values = [];
  
    const dfs = (root) => {
      if (!root) return null;
  
      dfs(root?.left);
  
      values.push(root.val);
  
      dfs(root?.right);
    };
  
    dfs(root);
  
    for (let i = 1; i < values.length; i++) {
      if (values[i - 1] >= values[i]) {
        return false;
      }
    }
  
    return true;
  }
  