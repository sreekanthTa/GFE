var climbStairs = function(n) {
    
    if (n === 1) return 1;
    if (n === 2) return 2;


    let prev1 = 2   // ways to climb 1 step
    let prev2 = 1   // ways to climb 2 steps
    current = 0

    for (let i = 3; i <= n; i++) {
        current = prev1 + prev2   // ways for i steps
        prev2 = prev1             // shift window
        prev1 = current
    }

    return current
};



// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

 

// Example 1:

// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps