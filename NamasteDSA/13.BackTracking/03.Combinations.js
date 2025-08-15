function combine(n, k) {
    const result = [];

    function backtrack(start, path) {
        // If we have k numbers, save this combination
        if (path.length === k) {
            result.push([...path]);
            return;
        }

        // Choose next number starting from `start`
        for (let i = start; i <= n; i++) {
            path.push(i);               // choose
            backtrack(i + 1, path);     // recurse with next start
            path.pop();                 // undo choice
        }
    }

    backtrack(1, []);
    return result;
}

console.log(combine(4, 2));


// Given two integers n and k, return all possible combinations of k numbers chosen from the range [1, n].

// You may return the answer in any order.

 

// Example 1:

// Input: n = 4, k = 2
// Output: [[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]
// Explanation: There are 4 choose 2 = 6 total combinations.
// Note that combinations are unordered, i.e., [1,2] and [2,1] are considered to be the same combination.