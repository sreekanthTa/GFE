// Input: numbers = [1,-1,-1,-4,-5]
// Output: 2
// Explanation: The longest consecutive subsequences are -1, 1 and -5, -4, both with a length of 2


 function longestConsecutiveNumberSeq(numbers) {
    if (numbers.length === 0) return 0;
    const set = new Set(numbers);
  
    let max = 0;
  
    console.log(set)
    for (const value of numbers) {
      console.log(value);
      if (!set.has(value - 1)) {
        let counter = 1;
        while (set.has(value + counter)) {
          counter += 1;
        }
        max = Math.max(max, counter);
      }
    }
  
    return max;
  }
  

const numbers = [1,-1,-1,-4,-5]
// Output: 2
const res = longestConsecutiveNumberSeq(numbers)

console.log('respiose',res)