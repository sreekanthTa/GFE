var levelOrder = function(root) {
    if (!root) return []; // <- add this check

    const queue = [];
    const result = [];

    queue.push(root);

    while (queue.length > 0) {
        let length = queue.length;
        const temp = [];

        for (let i = 0; i < length; i++) {
            const element = queue.shift();
            temp.push(element.val);

            if (element.left) queue.push(element.left);
            if (element.right) queue.push(element.right);
        }

        result.push(temp);
    }

    return result;
};

// Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

 

// Example 1:


// Input: root = [3,9,20,null,null,15,7]
// Output: [[3],[9,20],[15,7]]
