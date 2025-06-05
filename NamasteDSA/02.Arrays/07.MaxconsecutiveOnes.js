/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let Max = 0
    let counter  = 0

    for(let i =0;i <nums.length;i++){
          if(nums[i]==1){
            counter+=1
            Max=Math.max(Max, counter)
          }else{
            counter=0
          }
    }

    return Max
};

// Input: nums = [1,1,0,1,1,1]
// Output: 3
// Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.

const nums = [1,1,0,1,1,1]
console.log("MaxConsecutiveOnes", findMaxConsecutiveOnes(nums))