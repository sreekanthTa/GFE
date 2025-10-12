/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    
    let leftProduct = 1
    let rightProduct = 1
    let max = nums[0]

    for(let i = 0; i < nums.length; i++){

        leftProduct = leftProduct ==0 ? 1 : leftProduct
        rightProduct = rightProduct ==0 ? 1 : rightProduct
        leftProduct *= nums[i]
        rightProduct *= nums[nums.length-1-i]
        max = Math.max(max, Math.max(leftProduct, rightProduct))
    }
    return max
};


// Given an integer array nums, find a subarray that has the largest product, and return the product.

// The test cases are generated so that the answer will fit in a 32-bit integer.

 

// Example 1:

// Input: nums = [2,3,-2,4]
// Output: 6
// Explanation: [2,3] has the largest product 6.