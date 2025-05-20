/**
 * @param {Function} func
 * @returns Function
 */
export default function memoize(func) {  
    const cache = new Map();  // Here we are using MAP since OBJECT will override the default 1 with '1' but not in map.  if keys are object we use WeakMap
  
    return function (arg) {
      if (cache.has(arg)) {
        return cache.get(arg);
      } else {
        const result = func.call(this, arg);
        cache.set(arg, result)
        return result;
      }
    };
  }

  
  function expensiveFunction(n) {
    console.log('Computing...');
    return n * 2;
  }
  
  // Create a memoized version of the function.
  const memoizedExpensiveFunction = memoize(expensiveFunction);
  
  // First call (computes and caches the result).
  console.log(memoizedExpensiveFunction(5)); // Output: Computing... 10
  
  // Second call with the same argument (returns the cached result).
  console.log(memoizedExpensiveFunction(5)); // Output: 10
  
  // Third call with a different argument (computes and caches the new result).
  console.log(memoizedExpensiveFunction(10)); // Output: Computing... 20
  
  // Fourth call with the same argument as the third call (returns the cached result).
  console.log(memoizedExpensiveFunction(10)); // Output: 20