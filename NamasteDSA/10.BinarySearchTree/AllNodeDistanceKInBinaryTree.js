/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} k
 * @return {number[]}
 */
var distanceK = function(root, target, k) {
    const targetMap = new Map()

    const dfs = function(node) {
      if(!node) return node;
      
      if(node.left)targetMap.set(node.left, node)
      dfs(node.left)

      if(node.right)targetMap.set(node.right, node)
      dfs(node.right)
    }

    dfs(root)

    
    const queue = [[target, 0]]
    const visited = new Map()
    const result = []

    while( queue.length > 0 ){
       const size = queue.length

       for(let i = 0 ; i < size; i++){
         const [element, distance] = queue.shift()

         if(!element || visited.has(element)) continue

         visited.set(element, true)

         if(distance == k){
            result.push(element.val)
            continue;
         }

         if(element.left) queue.push([element.left, distance+1])
         if(element.right) queue.push([element.right, distance + 1])
         if(targetMap.has(element)) queue.push([targetMap.get(element), distance+1])
       }
    }

    return result
};


// Given the root of a binary tree, the value of a target node target, and an integer k, return an array of the values of all nodes that have a distance k from the target node.

// You can return the answer in any order.

 

// Example 1:


// Input: root = [3,5,1,6,2,0,8,null,null,7,4], target = 5, k = 2
// Output: [7,4,1]
// Explanation: The nodes that are a distance 2 from the target node (with value 5) have values 7, 4, and 1.