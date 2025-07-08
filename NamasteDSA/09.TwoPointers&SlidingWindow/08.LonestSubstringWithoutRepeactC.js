/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {

    let i = 0 
    let j = 0

    const obj ={}
    let max = 0
    let tracker = 0

    for(let i = 0; i < s.length; i++){
         
        while(s[i] in obj){
            delete obj[s[tracker]]
            tracker++
        }

        obj[[s[i]]] = i
        max  = Math.max(max, i-tracker+1)
    }

    return max
};

// Given a string s, find the length of the longest substring without duplicate characters.

 

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.