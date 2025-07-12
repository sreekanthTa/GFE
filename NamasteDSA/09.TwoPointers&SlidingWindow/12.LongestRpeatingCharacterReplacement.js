/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    
    let left = 0
    let right = 0
    let obj = {}
    let maxFreq = 0
    let maxWindow = 0

    for(right = 0 ; right<s.length; right++){
        obj[s[right]] = (obj[s[right]] ||0) + 1

        maxFreq = Math.max(maxFreq, obj[s[right]])

        let windowLength = right - left+1

        if(windowLength - maxFreq > k){
            obj[s[left]] -= 1
            left++
        }

        windowLength =  right-left+1
        maxWindow = Math.max(maxWindow, windowLength)


    }

    return maxWindow
};

// You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.

// Return the length of the longest substring containing the same letter you can get after performing the above operations.

 

// Example 1:

// Input: s = "ABAB", k = 2
// Output: 4
// Explanation: Replace the two 'A's with two 'B's or vice versa.