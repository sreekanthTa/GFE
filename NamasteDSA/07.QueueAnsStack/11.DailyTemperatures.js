/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  const stack = [];
  const tempArr = new Array(temperatures.length).fill(0);

  for (let i = temperatures.length - 1; i >= 0; i--) {
    let currentElement = temperatures[i];
    let topElement = temperatures[stack[stack.length - 1]];

    while (
      stack.length > 0 &&
      currentElement >= temperatures[stack[stack.length - 1]]
    ) {
      stack.pop();
    }

    if (stack.length > 0) {
      tempArr[i] = stack[stack.length - 1] - i;
    }

    stack.push(i);
  }

  return tempArr;
};



// Given an array of integers temperatures represents the daily temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. If there is no future day for which this is possible, keep answer[i] == 0 instead.

// Input: temperatures = [73,74,75,71,69,72,76,73]
// Output: [1,1,4,2,1,1,0,0]