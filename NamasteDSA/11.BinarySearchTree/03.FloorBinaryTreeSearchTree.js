// User function Template for javascript
function floor(root, x) {
    // code here
    let current = root
    
    let floor = -1
    
    while(current){
        if(current.data == x){
            return current.data
        }else if(x < current.data){
            current = current.left
        }else{
            floor = current.data
            current = current.right
        }
    }
    
    return floor
}



// You are given a BST(Binary Search Tree) with n number of nodes and value x. your task is to find the greatest value node of the BST which is smaller than or equal to x.
// Note: when x is smaller than the smallest node of BST then returns -1.

// Examples:

// Input:
// n = 7               2
//                      \
//                       81
//                     /     \
//                  42       87
//                    \       \
//                     66      90
//                    /
//                  45
// x = 87
// Output: 87
// Explanation: 87 is present in tree so floor will be 87.