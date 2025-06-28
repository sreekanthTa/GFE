/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    
    let left = 0
    let right = nums.length - 1

    let ans = Infinity

     while(left<=right){
        const mid = Math.floor((left+right)/2)

        if(nums[left]  <= nums[mid]){
             ans = Math.min(ans, nums[left])
             left = mid+1
        }else{
             ans = Math.min(ans, nums[mid])
             right = mid-1
        }
     }

    return ans
};

// Input: nums = [3,4,5,1,2]
// Output: 1
// Explanation: The original array was [1,2,3,4,5] rotated 3 times.