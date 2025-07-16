class Solution {
    bottomView(root) {
        if (!root) return [];

        const queue = [];
        let head = 0; // pointer to the start of the queue

        const map = new Map(); // better than plain object for sparse keys
        let minLine = 0, maxLine = 0;

        queue.push([root, 0]);

        while (head < queue.length) {
            const [node, line] = queue[head++];
            
            // update map with the most recent node at each line
            map.set(line, node.data);

            if (node.left) {
                queue.push([node.left, line - 1]);
                minLine = Math.min(minLine, line - 1);
            }
            if (node.right) {
                queue.push([node.right, line + 1]);
                maxLine = Math.max(maxLine, line + 1);
            }
        }

        const result = [];
        for (let i = minLine; i <= maxLine; i++) {
            result.push(map.get(i));
        }

        return result;
    }
}



// Given a binary tree, return an array where elements represent the bottom view of the binary tree from left to right.

// Note: If there are multiple bottom-most nodes for a horizontal distance from the root, then the later one in the level order traversal is considered. For example, in the below diagram, 7 and 34 both are the bottommost nodes at a horizontal distance of 0 from the root, here 34 will be considered.

// For the above tree, the output should be 5 8 34 22 25