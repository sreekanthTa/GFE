/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
     const result = []

     candidates.sort((a,b) => a-b)

     const backTrack = (index, current, total) => {

        if(total == target){
            result.push([...current])
            return
        }

        if(index >= candidates.length || total > target) return

        current.push(candidates[index])
        backTrack(index + 1, current, total + candidates[index])
        
        current.pop()
        
        let nextIndex = index + 1

        while(index < candidates.length && candidates[index] == candidates[nextIndex]){
            nextIndex++
        }

        backTrack(nextIndex, current, total)

     }

     backTrack(0,[],0)

     return result;
};

// Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sum to target.

// Each number in candidates may only be used once in the combination.

// Note: The solution set must not contain duplicate combinations.

 

// Example 1:

// Input: candidates = [10,1,2,7,6,1,5], target = 8
// Output: 
// [
// [1,1,6],
// [1,2,5],
// [1,7],
// [2,6]
// ]