/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
 
 const a1Array = new Array(26).fill(0)
 const a2Array = new Array(26).fill(0)

 const aCode = "a".charCodeAt(0)

 for(let i=0; i<s1.length; i++){
      a1Array[s1.charCodeAt(i) - aCode]++
 }

 function areEqual(arr1, arr2){
    for(let i = 0 ; i<arr1.length; i++){
        if(arr1[i] != arr2[i]) return false
    }
    return true
 }

 for(let i = 0; i<s2.length; i++){
      a2Array[s2.charCodeAt(i)-aCode]++

      if(i>=s1.length){
        a2Array[s2.charCodeAt(i-s1.length)-aCode]--
      }

      if(areEqual(a1Array, a2Array)) return true



 }

 return false
};


// Permutation in String
// Solved
// Medium
// Topics
// premium lock icon
// Companies
// Hint
// Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.

// In other words, return true if one of s1's permutations is the substring of s2.

 

// Example 1:

// Input: s1 = "ab", s2 = "eidbaooo"
// Output: true
// Explanation: s2 contains one permutation of s1 ("ba").