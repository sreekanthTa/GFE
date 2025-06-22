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