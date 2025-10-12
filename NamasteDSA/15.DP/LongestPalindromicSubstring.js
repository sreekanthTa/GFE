/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    
    const countStr = (str, left, right) => {
        while(left>=0 && right<=s.length-1&&str[left] == str[right]){
            left--
            right++
        }

        return right - left - 1;
    }

   let total = 0
   let start = 0
   let end = 0
   for(let i = 0 ; i < s.length; i++){
     const len1 = countStr(s, i, i+1)
     const len2 = countStr(s,i,i)
     const len = Math.max(len1, len2)

        if(len > end - start){
            start = i - Math.floor((len - 1) / 2)
            end = i + Math.floor(len / 2)
        }

   }

   return s.substring(start, end + 1);

};

// Given a string s, return the longest palindromic substring in s.

 

// Example 1:

// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.
// Example 2:

// Input: s = "cbbd"
// Output: "bb"
 