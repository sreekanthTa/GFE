/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    
    let left = 0
    let right = nums.length -1

    while(left<=right){

        const mid = Math.floor((right+left)/2)

        if(nums[mid] == target) return mid;

        if(target < nums[mid] ){
           right  = mid-1
        }else{
           left = mid+1
        }
    }

    return -1
};


// Input: nums = [-1,0,3,5,9,12], target = 9
// Output: 4
// Explanation: 9 exists in nums and its index is 4

const nums = [-1, 0, 3, 5, 9, 12]
const target= 9

console.log("Binary Search is", search(nums,
    target
)) // 4