/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    
    let indexTracker = 0

    for(let i =0 ; i < nums.length; i++){
         if(nums[i] != val){
            nums[indexTracker] = nums[i]
            indexTracker +=1
        }
    }

    return indexTracker
};


// Input: nums = [3,2,2,3], val = 3
// Output: 2, nums = [2,2,_,_]

const nums = [3,2,2,3]

console.log(removeElement(nums,3))