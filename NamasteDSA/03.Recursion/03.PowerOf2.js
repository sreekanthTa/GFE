var isPowerOfTwo = function(n) {
  if (n === 1) return true;       // Base case: 2^0 = 1
  if (n <= 0 || n % 2 !== 0) return false;  // Not a power of two
  return isPowerOfTwo(n / 2);     // Recursive call
};



console.log(isPowerOfTwo(16)); // true
console.log(isPowerOfTwo(3));  // false
console.log(isPowerOfTwo(1));  // true
console.log(isPowerOfTwo(0));  // false
