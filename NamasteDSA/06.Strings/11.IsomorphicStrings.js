/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {

    if(s.length != t.length) return false

    const objST  = {}
    const objTS  = {}

    for(let i=0; i < s.length; i++){
         let one = s[i]
         let two = t[i]

         if(!objST[one]&&!objTS[two]){
            objST[one] = two
            objTS[two] = one
         }else{
            if(objST[one] != two || objTS[two] != one){
                return false
            }
         }
 
    }

    return true
};



// Given two strings s and t, determine if they are isomorphic.

// Two strings s and t are isomorphic if the characters in s can be replaced to get t.

// All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

 

// Example 1:

// Input: s = "egg", t = "add"

// Output: true

// Explanation:

// The strings s and t can be made identical by:

// Mapping 'e' to 'a'.
// Mapping 'g' to 'd'.
