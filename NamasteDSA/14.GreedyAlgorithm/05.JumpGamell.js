/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {

    let maxDist = 0
    let totalJumps = 0
    let lastCoverageIndex = 0

    if(nums.length == 1 ) return 0

    for(let i = 0; i < nums.length; i++){
        
        maxDist = Math.max(maxDist, i + nums[i])
        
        if(i == lastCoverageIndex){
            lastCoverageIndex = maxDist
            totalJumps++

            
            if(maxDist >= nums.length-1){
            return totalJumps
            }

        }


    }

    return totalJumps
    
};



// You are given a 0-indexed array of integers nums of length n. You are initially positioned at index 0.

// Each element nums[i] represents the maximum length of a forward jump from index i. In other words, if you are at index i, you can jump to any index (i + j) where:

// 0 <= j <= nums[i] and
// i + j < n
// Return the minimum number of jumps to reach index n - 1. The test cases are generated such that you can reach index n - 1.

 

// Example 1:

// Input: nums = [2,3,1,1,4]
// Output: 2
// Explanation: The minimum number of jumps to reach the last index is 2. Jump 1 step from index 0 to 1, then 3 steps to the last index.