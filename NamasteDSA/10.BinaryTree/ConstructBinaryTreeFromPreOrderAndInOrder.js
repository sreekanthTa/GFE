var buildTree = function(preorder, inorder) {
    const obj = {};

    for (let i = 0; i < inorder.length; i++) {
        obj[inorder[i]] = i;
    }

    const constructTree = (preorder, preStart, preEnd, inorder, inStart, inEnd, obj) => {
        if (preStart > preEnd || inStart > inEnd) return null;

        const rootVal = preorder[preStart];
        const root = new TreeNode(rootVal);
        const rootIndex = obj[rootVal];
        const numsLeft = rootIndex - inStart;

        root.left = constructTree(
            preorder, preStart + 1, preStart + numsLeft,
            inorder, inStart, rootIndex - 1, obj
        );

        root.right = constructTree(
            preorder, preStart + numsLeft + 1, preEnd,
            inorder, rootIndex + 1, inEnd, obj
        );

        return root;
    };

    return constructTree(preorder, 0, preorder.length - 1, inorder, 0, inorder.length - 1, obj);
};


// Given two integer arrays preorder and inorder where preorder is the preorder traversal of a binary tree and inorder is the inorder traversal of the same tree, construct and return the binary tree.

 

// Example 1:


// Input: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
// Output: [3,9,20,null,null,15,7]
// Example 2: