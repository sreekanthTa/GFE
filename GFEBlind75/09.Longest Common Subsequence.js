/**
 * @param {string} str1
 * @param {string} str2
 * @return {number}
 */
export default function longestCommonSubsequence(str1, str2) {
    const m = str1.length;
    const n = str2.length;
  
    // Initialize a 2D array with -1 (uncomputed)
    const memo = Array.from({ length: m + 2 }, () => Array(n + 1).fill(-1));
    // console.log(memo);
  
    const lcs = (i, j) => {
      if (i == 0 || j == 0) return 0;
  
      if (memo[i][j] !== -1) return memo[i][j];
  
      if (str1[i - 1] === str2[j - 1]) {
        memo[i][j] = 1 + lcs(i - 1, j - 1);
      } else {
        memo[i][j] = Math.max(lcs(i - 1, j), lcs(i, j - 1));
      }
  
      return memo[i][j];
    };
  
    return lcs(m, n);
  }
  



  /**
 * @param {string} str1
 * @param {string} str2
 * @return {number}
 */
export default function longestCommonSubsequence(str1, str2) {
    const m = str1.length;
    const n = str2.length;
  
    // Initialize a 2D array with -1 (uncomputed)
    const memo = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
    // console.log(memo);
  
    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        if (str1[i - 1] == str2[j - 1]) {
          memo[i][j] = 1 + memo[i - 1][j - 1];
        } else {
          memo[i][j] = Math.max(memo[i - 1][j], memo[i][j - 1]);
        }
      }
    }
  
    return memo[m][n];
  }
  