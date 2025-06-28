/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {

    const result = [-1, -1]

    function findIndex(isFirst) {

    let left = 0
    let right = nums.length-1
    let index= -1

    while(left <= right){

        const mid = Math.floor((left + right) / 2)

        if(nums[mid] == target) {
            if(isFirst){
              right = mid - 1
            }else{
              left = mid + 1
            }
            index = mid
        }

        else if(target < nums[mid]){
          right = mid - 1
        }else{
          left = mid + 1
        }
    }

    return index

    }

    result[0] = findIndex(true)
    result[1] = findIndex()
    
    return result
};


// Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

// If target is not found in the array, return [-1, -1].

// You must write an algorithm with O(log n) runtime complexity.

 

// Example 1:

// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]