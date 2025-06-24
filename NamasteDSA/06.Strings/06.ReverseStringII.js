/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    
    let arr = s.split('')

    for(let i = 0 ; i < arr.length; i += 2 * k){
        
        let left  = i
        let right = Math.min(i + k - 1 , arr.length - 1 )

        while(left<right){
            [arr[left], arr[right]] = [arr[right],arr[left]]
            left++
            right--
        }

    }

    return arr.join('')
};



// Given a string s and an integer k, reverse the first k characters for every 2k characters counting from the start of the string.

// If there are fewer than k characters left, reverse all of them. If there are less than 2k but greater than or equal to k characters, then reverse the first k characters and leave the other as original.


// Example 1:

// Input: s = "abcdefg", k = 2
// Output: "bacdfeg"