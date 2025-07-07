/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let pointer = 0

    for(let i = 0 ; i<t.length; i++){
        if(t[i] == s[pointer]){
            pointer +=1
        }
    }

    return pointer == s.length ? true : false
};

// Input: s = "abc", t = "ahbgdc"
// Output: true