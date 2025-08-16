/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {

    nums.sort((a, b) => a - b); // sort first

    const result = []

    const backTrack = (index, subset) => {
        
        if(index == nums.length&& !result.includes(subset)){
            result.push([...subset])
            return
        }

        subset.push(nums[index])
        backTrack(index + 1 , subset)

        subset.pop()

        let nextIndex = index + 1

        while(nextIndex < nums.length && nums[index] == nums[nextIndex]){
            nextIndex++
        }

        backTrack(nextIndex, subset)
    }

    backTrack(0,[])
    return result

};


// Given an integer array nums that may contain duplicates, return all possible subsets (the power set).

// The solution set must not contain duplicate subsets. Return the solution in any order.

 

// Example 1:

// Input: nums = [1,2,2]
// Output: [[],[1],[1,2],[1,2,2],[2],[2,2]]