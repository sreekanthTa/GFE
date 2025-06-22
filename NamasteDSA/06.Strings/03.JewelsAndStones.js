/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    
    const obj = {}
    let count = 0

    for(let i = 0 ; i < jewels.length; i++){
        obj[jewels[i]] = true
    }

    for(let i = 0 ; i <stones.length; i++){
        if(obj[stones[i]]) count++
    }

    return count
};


// Example 1:

// Input: jewels = "aA", stones = "aAAbbbb"
// Output: 3