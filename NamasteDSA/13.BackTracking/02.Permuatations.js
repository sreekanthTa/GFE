/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    
    const result = []
 
    const backtrack = (path, used) => {
        if(path.length == nums.length){
            result.push([...path])
            return
        }

        for(let i = 0 ; i < nums.length; i++){
            if (used[i]) continue; // sk
             
             path.push(nums[i])
             used[i] = true

             backtrack(path, used)

             path.pop()
             used[i] = false

        }
    }

    backtrack([],[])

    return result;
};

// Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.

 

// Example 1:

// Input: nums = [1,2,3]
// Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]