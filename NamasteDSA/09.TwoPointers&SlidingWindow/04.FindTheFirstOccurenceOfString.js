/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    
    let result = 0
    let pointer = 0
    for(let i = 0; i< haystack.length; i++){
     
         if(needle[pointer] == haystack[i]){
              pointer +=1
             if(pointer == needle.length){
                return i+1 - pointer
             }
         }else{
            i = i - pointer
            pointer=0
         }

    }

    return -1
};


Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

 

// Example 1:

// Input: haystack = "sadbutsad", needle = "sad"
// Output: 0
// Explanation: "sad" occurs at index 0 and 6.
// The first occurrence is at index 0, so we return 0.