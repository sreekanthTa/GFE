/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    let maxLength = 0

    for(const item of wordDict){
        maxLength = Math.max(maxLength, item.length)
    }

    const wordSet = new Set(wordDict)

    const dp = new Array(s.length + 1).fill(false)

    dp[0] = true

    for(let i = 1; i <=s.length; i++){

        for(let j = i - 1 ; j>= Math.max(0, i- maxLength); j--){

            const word= s.substring(i,j)
            if(dp[j] && wordSet.has(word)){
                dp[i] = true
                break
            }
        }
    }

    return dp[s.length]
};

// Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.

// Note that the same word in the dictionary may be reused multiple times in the segmentation.

 

// Example 1:

// Input: s = "leetcode", wordDict = ["leet","code"]
// Output: true
// Explanation: Return true because "leetcode" can be segmented as "leet code".