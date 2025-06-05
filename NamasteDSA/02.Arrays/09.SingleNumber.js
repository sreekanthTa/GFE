/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    
    let result=0

    for(let i =0;i<nums.length; i++){
    result= result ^ nums[i]
           
    }

    return result
};

// Input: nums = [2,2,1]

// Output: 1

const nums = [2,2,1]
console.log('SingleNumber', singleNumber(nums))