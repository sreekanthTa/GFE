class Solution {
    reverse(s) {
        // code here
        
        const stack = []
        
        for(let i=0; i <s.length; i++){
            stack.push(s[i])
        }
        let res = ""
        while(stack.length){
            res+=stack.pop()
        }
        
        return res
    }
}


// You are given a string s , the task is to reverse the string using stack.

// Examples:

// Input: s ="GeeksforGeeks"
// Output:  skeeGrofskee
// Input: s ="Geek"
// Output: keeG