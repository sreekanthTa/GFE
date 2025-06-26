/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
    let result =  "";
    let current = "";
    const stack = []

    for(let i = 0 ; i< s.length; i++){

        const val = s[i]
        current += val

        if(val == '('){
           stack.push('(')
        }else{
           stack.pop()
        }

        if(stack.length==0){
              
            result += current.slice(1,-1)
            current = ""
        }

    }

    return result
};


// Input: s = "(()())(())"
// Output: "()()()"
// Explanation: 
// The input string is "(()())(())", with primitive decomposition "(()())" + "(())".
// After removing outer parentheses of each part, this is "()()" + "()" = "()()()".