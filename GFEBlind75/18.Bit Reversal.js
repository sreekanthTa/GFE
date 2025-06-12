/**
 * @param {number} n
 * @return {number}
 */
export default function bitReversal(n) {
    let result = 0;
  
    for (let i = 0; i < 32; i++) {
      
      result = result << 1;
  
      result = result | (n & 1);
  
      n = n >> 1;
    }
  
    return result >>> 0;
  }

  
// Examples
// Input: n = 8
// Output: 268435456
// Explanation: 8 in binary is 00000000000000000000000000001000. After reversing its bits, it becomes 00010000000000000000000000000000, which is 268435456 in decimal.
// Input: n = 3
// Output: 3221225472
// Explanation: 3 in binary is 00000000000000000000000000000011. After reversing its bits, it becomes 11000000000000000000000000000000, which is 3221225472 in decimal.
// Input: n = 0
// Output: 0
// Explanation: 0 in binary is 00000000000000000000000000000000. After reversing its bits, it becomes 00000000000000000000000000000000, which is 0 in decimal.