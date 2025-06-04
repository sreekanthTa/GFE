/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    
    let indexCount = 1;

    for(let i = 1; i <nums.length ; i++){
        if(nums[i] != nums[i-1]){
           nums[indexCount] = nums[i]
           indexCount++;
        } 
    }
 
    return indexCount
    

};

// Example 1:

// Input: nums = [1,1,2]
// Output: 2, nums = [1,2,_]
// Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).
// Example 2: