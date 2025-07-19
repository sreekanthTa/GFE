var isBalanced = function(root) {
   
    const findHeight = (node) => {
        if (!node) return 0;

        const leftHeight = findHeight(node.left);
        if (leftHeight === -1) return -1;

        const rightHeight = findHeight(node.right);
        if (rightHeight === -1) return -1;

        if (Math.abs(leftHeight - rightHeight) > 1) return -1;

        return 1 + Math.max(leftHeight, rightHeight);
    };

    return findHeight(root) !== -1;
};


// Given a binary tree, determine if it is height-balanced.

 

// Example 1:


// Input: root = [3,9,20,null,null,15,7]
// Output: true