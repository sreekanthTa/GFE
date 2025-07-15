var zigzagLevelOrder = function(root) {
    if (!root) return [];

    const queue = [root];
    const result = [];
    let leftToRight = true;

    while (queue.length > 0) {
        const length = queue.length;
        const temp = [];

        for (let i = 0; i < length; i++) {
            const node = queue.shift();

            // Push at the right place based on direction
            if (leftToRight) {
                temp.push(node.val);
            } else {
                temp.unshift(node.val);
            }

            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        result.push(temp);
        leftToRight = !leftToRight; // toggle direction
    }

    return result;
};


// Given the root of a binary tree, return the zigzag level order traversal of its nodes' values. (i.e., from left to right, then right to left for the next level and alternate between).

 

// Example 1:


// Input: root = [3,9,20,null,null,15,7]
// Output: [[3],[20,9],[15,7]]