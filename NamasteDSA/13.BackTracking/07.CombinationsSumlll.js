/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {

    const result = []

    const backTrack = (num, current, total) => {
    
      if(current.length == k && total == n){
        result.push([...current])
        return
      }

      if(current.length > k || total > n || num > 9) return 

      current.push(num)
      backTrack(num + 1, current, total + num)

      current.pop()
      backTrack(num + 1, current, total)

    }

    backTrack(1, [] , 0)

    return result
    
};

// Find all valid combinations of k numbers that sum up to n such that the following conditions are true:

// Only numbers 1 through 9 are used.
// Each number is used at most once.
// Return a list of all possible valid combinations. The list must not contain the same combination twice, and the combinations may be returned in any order.

 

// Example 1:

// Input: k = 3, n = 7
// Output: [[1,2,4]]
// Explanation:
// 1 + 2 + 4 = 7
// There are no other valid combinations.