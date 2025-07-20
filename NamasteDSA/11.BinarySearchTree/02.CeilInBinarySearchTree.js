class Solution {
    // Function to return the ceil of given number in BST.
    findCeil(root, input) {
        let ceil = -1;
        let current = root;

        while (current) {
            if (current.data === input) {
                return current.data; // Exact match
            }

            if (input < current.data) {
                ceil = current.data; // Potential ceil
                current = current.left;
            } else {
                current = current.right;
            }
        }

        return ceil;
    }
}


// Given a BST and a number X, find Ceil of X.
// Note: Ceil(X) is a number that is either equal to X or is immediately greater than X.

// If Ceil could not be found, return -1.

// Examples:

// Input: root = [5, 1, 7, N, 2, N, N, N, 3], X = 3

// Output: 3
// Explanation: We find 3 in BST, so ceil of 3 is 3.