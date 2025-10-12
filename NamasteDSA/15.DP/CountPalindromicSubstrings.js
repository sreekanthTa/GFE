/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    
    const countStr = (str, left, right) => {
        let count = 0
        while(left>=0 && right<=s.length-1&&str[left] == str[right]){
            count++
            left--
            right++
        }

        return count
    }

   let total = 0
   for(let i = 0 ; i < s.length; i++){
     const evenCount = countStr(s, i, i+1)
     const oddCount = countStr(s,i,i)
     total+=evenCount+oddCount
   }

   return total

};
// Given a string s, return the number of palindromic substrings in it.

// A string is a palindrome when it reads the same backward as forward.

// A substring is a contiguous sequence of characters within the string.

 

// Example 1:

// Input: s = "abc"
// Output: 3
// Explanation: Three palindromic strings: "a", "b", "c".