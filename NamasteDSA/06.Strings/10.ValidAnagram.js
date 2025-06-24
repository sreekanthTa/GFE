/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    
    if (s.length !== t.length) return false; // Optional early exit

    const obj = {}

    for(let item of s){
        obj[item] = (obj[item] || 0 ) + 1
    }

    for(let item of t){
        if(!obj[item]) return false
        obj[item]--
    }

    return true
};


// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

 

// Example 1:

// Input: s = "anagram", t = "nagaram"

// Output: true