var evalRPN = function(tokens) {
    const stack = [];

    for (let val of tokens) {
        if (val === '+') {
            stack.push(stack.pop() + stack.pop());
        } else if (val === '-') {
            const b = stack.pop(), a = stack.pop();
            stack.push(a - b);
        } else if (val === '*') {
            stack.push(stack.pop() * stack.pop());
        } else if (val === '/') {
            const b = stack.pop(), a = stack.pop();
            stack.push(Math.trunc(a / b)); // use trunc to match LeetCode behavior
        } else {
            stack.push(parseInt(val));
        }
    }

    return stack[0];
};


// Input: tokens = ["2","1","+","3","*"]
// Output: 9
// Explanation: ((2 + 1) * 3) = 9