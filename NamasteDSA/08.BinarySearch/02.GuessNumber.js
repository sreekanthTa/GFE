/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */

// Mock guess API
function guess(num) {
    if (num === target) return 0;
    return num > target ? -1 : 1;
}

var guessNumber = function(n) {
    
    let left = 0
    let right = n

    while(left<=right){
        const mid = Math.floor((left+right)/2)

        const guessNum = guess(mid)

        if(guessNum == 0){
            return mid
        }else if(guessNum == -1 ){
            right = mid - 1
        }else{
            left  = mid+1

        }
    }

    return -1
};


// You call a pre-defined API int guess(int num), which returns three possible results:

// -1: Your guess is higher than the number I picked (i.e. num > pick).
// 1: Your guess is lower than the number I picked (i.e. num < pick).
// 0: your guess is equal to the number I picked (i.e. num == pick).
// Return the number that I picked.

 

// Example 1:

// Input: n = 10, pick = 6
// Output: 6
// Example 2: