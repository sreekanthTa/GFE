/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    
    let left = 0
    let right = s.length-1
    const strRegex = /[a-zA-Z]/i
    while(left<=right){
        while(left < right &&!strRegex.test(s[left]))  left++
        while(left < right &&!strRegex.test(s[right])) right--

        if(s[left].toLowerCase() == s[right].toLowerCase()){
            left++
            right--
        }else{
            return false
        }
    }

    return true;

};

const s1 = "race a car" // false
const s2 ="A man, a plan, a canal: Panama" //True


console.log("isPalindrome",isPalindrome(s2))