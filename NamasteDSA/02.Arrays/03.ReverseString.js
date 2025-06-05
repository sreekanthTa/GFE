/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    
    let left = 0;
    let right = s?.length - 1;

    while(left <= right){
       let temp =  s[left]
       s[left] = s[right]
       s[right] =  temp
       left = left + 1
       right = right - 1
    }

    return s;
};

const s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]

console.log('reverse a string', reverseString(s))