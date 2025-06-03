/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number}
 */
export default function combinationTargetSum(numbers, target) {
    let dp = new Map();
    dp.set(0, 1);
    for (const num of numbers) {
      const nextDp = new Map();
  
      for (const [sum, count] of dp.entries()) {
        const plus = sum + num;
        const minus = sum - num;
  
        nextDp.set(plus, (nextDp.get(plus) || 0) + count);
        nextDp.set(minus, (nextDp.get(minus) || 0) + count);
      }
      dp = nextDp;
    }
  
    return dp.get(target) || 0;
  }
  