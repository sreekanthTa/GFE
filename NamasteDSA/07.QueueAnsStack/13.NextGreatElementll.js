var nextGreaterElements = function(nums) {
    const n = nums.length;
    const result = new Array(n).fill(-1);
    const stack = [];

    for (let i = 2 * n - 1; i >= 0; i--) {
        const index = i % n;

        while (stack.length && nums[stack[stack.length - 1]] <= nums[index]) {
            stack.pop();
        }

        if (stack.length) {
            result[index] = nums[stack[stack.length - 1]];
        }

        stack.push(index);
    }

    return result;
};



// Input: nums = [1,2,1]
// Output: [2,-1,2]
// Explanation: The first 1's next greater number is 2; 
// The number 2 can't find next greater number. 
// The second 1's next greater number needs to search circularly, which is also 2.
