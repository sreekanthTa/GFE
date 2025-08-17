/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
 function isPalindrome(str, l, r) {
        while (l < r) {
            if (str[l] !== str[r]) return false;
            l++;
            r--;
        }
        return true;
    }

    const path = []
    const result = []

    const backTrack = (index) => {

        if(index == s.length){
            result.push([...path])
            return
        }

        for(let i =  index; i < s.length; i++){
             
            if(isPalindrome(s, index, i)){
                path.push(s.substring(index, i + 1))
                backTrack(i+1)
                path.pop()
            }
        }
    }

    backTrack(0)
    return result
    
};


// Palindrome Partitioning
// Solved
// Medium
// Topics
// premium lock icon
// Companies
// Given a string s, partition s such that every substring of the partition is a palindrome. Return all possible palindrome partitioning of s.

 

// Example 1:

// Input: s = "aab"
// Output: [["a","a","b"],["aa","b"]]