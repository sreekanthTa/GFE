/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} start
 * @return {number}
 */
var amountOfTime = function(root, start) {
  

    let startNode = null;
   
    const targetMap = new Map()
  
    const dfs = (node) =>{
      if(!node) return 
    if (node.val === start) startNode = node;
  
      if(node.left) targetMap.set(node.left, node)
      dfs(node.left)
  
      if(node.right) targetMap.set(node.right, node)
      dfs(node.right)
    }
    dfs(root)
  
    const queue = [[startNode, 0]]
    const visited = new Map()
    let maxDistance = 0
  
  while(queue.length > 0){
    const [element, distance] = queue.shift();
    if (!element || visited.has(element)) continue;
  
    visited.set(element, true);
    maxDistance = Math.max(maxDistance, distance);
  
    if (element.left) queue.push([element.left, distance + 1]);
    if (element.right) queue.push([element.right, distance + 1]);
    if (targetMap.has(element)) queue.push([targetMap.get(element), distance + 1]);
  }
  
    return maxDistance;
  
  };


//   Amount of Time for Binary Tree to Be Infected
// Solved
// Medium
// Topics
// premium lock icon
// Companies
// Hint
// You are given the root of a binary tree with unique values, and an integer start. At minute 0, an infection starts from the node with value start.

// Each minute, a node becomes infected if:

// The node is currently uninfected.
// The node is adjacent to an infected node.
// Return the number of minutes needed for the entire tree to be infected.

 

// Example 1:


// Input: root = [1,5,3,null,4,10,6,9,2], start = 3
// Output: 4
// Explanation: The following nodes are infected during:
// - Minute 0: Node 3
// - Minute 1: Nodes 1, 10 and 6
// - Minute 2: Node 5
// - Minute 3: Node 4
// - Minute 4: Nodes 9 and 2
// It takes 4 minutes for the whole tree to be infected so we return 4.