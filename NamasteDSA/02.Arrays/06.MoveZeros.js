/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    
    let indexTracker = 0

    for(let i =0;i<nums.length;i++){
        if(nums[i] !=0){
            nums[indexTracker] = nums[i]
            indexTracker += 1
        }
    }

    for(let i = indexTracker; i < nums.length; i++){
        nums[i]=0
    }

    return nums
};

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]

const nums=[0,1,0,3,12]
console.log(moveZeroes(nums))
