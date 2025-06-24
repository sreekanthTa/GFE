/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    
    let counter=  0
    if(s.trim().length==1) return 1

    for(let i = s.length-1; i >= 0; i--){
       if(s[i]?.trim()){
           counter+=1
       }else{
           if(counter){
             return counter;
           }
       }
    }

    return counter
};

console.log

// Example 1:

// Input: s = "Hello World"
// Output: 5
// Explanation: The last word is "World" with length 5.
// Example 2:

// Input: s = "   fly me   to   the moon  "
// Output: 4
// Explanation: The last word is "moon" with length 4.