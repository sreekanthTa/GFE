/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    
    const obj = {}

    for(let i=0; i< nums.length; i++){

        const val = target - nums[i]

        if(obj[val] || obj[val] == 0){
              return [obj[val],i]
        }else{
            obj[nums[i]] = i
        }

    }

    return -1 
};


// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].