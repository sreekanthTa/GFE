/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    
    const arr = Array.from({length: m}, () => Array(n).fill(0));

    for(let i = 0; i < m; i++){
        for(let j =0; j < n ; j++){
            if(i ==0 || j==0) {
                arr[i][j] = 1
            } else{
                arr[i][j] = arr[i-1][j]  + arr[i][j-1]
            }
        }
    }

    return arr[m-1][n-1]
};


// There is a robot on an m x n grid. The robot is initially located at the top-left corner (i.e., grid[0][0]). The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move either down or right at any point in time.

// Given the two integers m and n, return the number of possible unique paths that the robot can take to reach the bottom-right corner.

// The test cases are generated so that the answer will be less than or equal to 2 * 109.

 

// Example 1:


// Input: m = 3, n = 7
// Output: 28