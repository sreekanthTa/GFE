/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    
    strs.sort()
    let firstS  = strs[0]
    let lastS  = strs[strs.length - 1]
    let s = ""
    for(let i = 0 ; i < firstS.length; i++){
        if(firstS[i]!=lastS[i]){
          return s
        }else{
          s += firstS[i]
        }
    }
    return s;
};


// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
 

