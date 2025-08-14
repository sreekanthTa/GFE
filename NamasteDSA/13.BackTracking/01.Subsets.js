/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {

    const result = []

    const subset = []

    const track = (index, subset) => {
    
         if(index == nums.length){
            result.push([...subset])
            return
         }

         subset.push(nums[index])
         track(index+1,subset)

         subset.pop()
         track(index+1, subset)
    }

    track(0,subset)

    return result
    
};


// Given an integer array nums of unique elements, return all possible subsets (the power set).

// The solution set must not contain duplicate subsets. Return the solution in any order.

 

// Example 1:

// Input: nums = [1,2,3]
// Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]