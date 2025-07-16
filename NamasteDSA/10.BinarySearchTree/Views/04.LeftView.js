class Solution {
    leftView(root) {
        const result = [];

        const dfsWithLevel = (node, level) => {
            if (!node) return;

            if (result.length === level) {
                result.push(node.data); // use node.data instead of node.val
            }

            dfsWithLevel(node.left, level + 1);
            dfsWithLevel(node.right, level + 1);
        };

        dfsWithLevel(root, 0);
        return result;
    }
}



// You are given the root of a binary tree. Your task is to return the left view of the binary tree. The left view of a binary tree is the set of nodes visible when the tree is viewed from the left side.

// If the tree is empty, return an empty list.

// Examples :

// Input: root[] = [1, 2, 3, 4, 5, N, N]

// Output: [1, 2, 4]
// Explanation: From the left side of the tree, only the nodes 1, 2, and 4 are visible.