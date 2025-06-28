/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    
    let left = 0
    let right = x
    let ans = 0
    while(left<=right){

        const mid = Math.floor((left+right)/2)

        const midSquare = mid * mid

        if(midSquare == x){
             return mid
        }
        else if(midSquare < x){
            left = mid + 1
            ans = mid; 
        }else{
            right = mid - 1 
        }
    }
 


 return ans;  
};


// Example 1:

// Input: x = 4
// Output: 2
// Explanation: The square root of 4 is 2, so we return 2.
// Example 2:

// Input: x = 8
// Output: 2
// Explanation: The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned.