/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
    let result =  "";
    let tracker = 0

    for(let i = 0 ; i< s.length; i++){

        const val = s[i]

        if(val == '('){
          tracker +=1
          if(tracker>1){
            result+=val
          }
        }else{
          tracker -=1
          if(tracker>0){
            result+=val
          }
        }

    }

    return result
};


// Input: s = "(()())(())"
// Output: "()()()"
// Explanation: 
// The input string is "(()())(())", with primitive decomposition "(()())" + "(())".
// After removing outer parentheses of each part, this is "()()" + "()" = "()()()".