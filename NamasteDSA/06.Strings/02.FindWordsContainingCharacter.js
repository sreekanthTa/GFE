/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function(words, x) {
    
    const arr = []

    const regex = new RegExp(x, 'i')

    for(let i = 0 ; i < words.length;i++){
        if(regex.test(words[i])){
            arr.push(i)
        }
    }

    return arr
};

// Example 1:

// Input: words = ["leet","code"], x = "e"
// Output: [0,1]
// Explanation: "e" occurs in both words: "leet", and "code". Hence, we return indices 0 and 1.