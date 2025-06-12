/**
 * @param {number} n
 * @return {number[]}
 */
export default function bitCounting(n) {
    const ans = [];
    for (let i = 0; i <= n; i++) {
      let count = 0;
      let num = i;
  
      while (num > 0) {
        count += num & 1;
        num = num >> 1;
      }
  
      ans.push(count);
    }
  
    return ans;
  }

  
// Examples
// Input: n = 1
// Output: [0,1]
// Explanation: The number of set bits in 0 (binary: 0) is 0, and in 1 (binary: 1) is 1.
// Input: n = 2
// Output: [0,1,1]
// Explanation: The number of set bits in 0 (binary: 0) is 0, in 1 (binary: 1) is 1, and in 2 (binary: 10) is 1.
// Input: n = 3
// Output: [0,1,1,2]
// Explanation: The number of set bits in 0 (binary: 0) is 0, in 1 (binary: 1) is 1, in 2 (binary: 10) is 1,