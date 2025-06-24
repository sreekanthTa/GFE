/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const obj = {}

    for(let i = 0 ; i < strs.length; i++){
        const val = strs[i].split("").sort().join("")

        if(obj[val]){
            obj[val].push(strs[i])
        }else{
            obj[val] = [strs[i]]
        }
    }

    return Object.values(obj)
};


// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

 

// Example 1:

// Input: strs = ["eat","tea","tan","ate","nat","bat"]

// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

// Explanation:

// There is no string in strs that can be rearranged to form "bat".
// The strings "nat" and "tan" are anagrams as they can be rearranged to form each other.
// The strings "ate", "eat", and "tea" are anagrams as they can be rearranged to form each other.