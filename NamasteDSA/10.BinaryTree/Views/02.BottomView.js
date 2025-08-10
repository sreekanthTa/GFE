class Solution {
    bottomView(root) {
        if (!root) return [];

        const queue = [[root, 0]];
        let front = 0; // pointer to track current index in queue

        const map = {};
        let min = 0, max = 0;

        while (front < queue.length) {
            const [node, index] = queue[front++];
            
            // Overwrite for bottom view
            map[index] = node.data;

            if (node.left) queue.push([node.left, index - 1]);
            if (node.right) queue.push([node.right, index + 1]);

            min = Math.min(min, index);
            max = Math.max(max, index);
        }

        const result = [];
        for (let i = min; i <= max; i++) {
            result.push(map[i]);
        }

        return result;
    }
}



// Given a binary tree, return an array where elements represent the bottom view of the binary tree from left to right.

// Note: If there are multiple bottom-most nodes for a horizontal distance from the root, then the later one in the level order traversal is considered. For example, in the below diagram, 7 and 34 both are the bottommost nodes at a horizontal distance of 0 from the root, here 34 will be considered.

// For the above tree, the output should be 5 8 34 22 25

// Examples :

// Input: root[] = [1, 3, 2]

// Output: [3 1 2]
// Explanation: First case represents a tree with 3 nodes and 2 edges where root is 1, left child of 1 is 3 and right child of 1 is 2.