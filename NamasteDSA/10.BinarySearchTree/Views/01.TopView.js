/**
 * @param {Node} root
 */
/**
class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
*/

class Solution {
    // Function to return a list of nodes visible from the top view
    // from left to right in Binary Tree.
    topView(root) {
        if(!root) return []
        // code here
        const queue = []
        const map = {}
        let maxLine = 0
        let minLine = 0
        queue.push([root, 0])
        
        while(queue.length>0){
            
            const [node, line] = queue.shift();

            if (map[line] === undefined) {
                map[line] = node.data;
            }
            
            if(node.left) queue.push([node.left, line-1])
            if(node.right) queue.push([node.right, line+1])
            
            maxLine = Math.max(maxLine, line)
            minLine = Math.min(minLine, line)
            
        }
        
           const result = [];

        for (let i = minLine; i <= maxLine; i++) {
            result.push(map[i]);
        }

        return result;
    }
}


// You are given a binary tree, and your task is to return its top view. The top view of a binary tree is the set of nodes visible when the tree is viewed from the top.

// Note: 

// Return the nodes from the leftmost node to the rightmost node.
// If two nodes are at the same position (horizontal distance) and are outside the shadow of the tree, consider the leftmost node only. 
// Examples:

// Input: root[] = [1, 2, 3] 
 
// Output: [2, 1, 3]