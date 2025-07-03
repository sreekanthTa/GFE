const arr = [5, 4, 6, 5, 9, 2, 1];

const sort = (array, element) => {
  if (array.length == 0 || array[array.length - 1] <= element) {
    array.push(element);
    return;
  }
  const popElement = array.pop()

  sort(array, element)

  array.push(popElement)

};

const recursion = array => {
  if (array.length == 0) return;

  const topElement = array.pop();
  recursion(array);
  sort(array, topElement)
};

recursion(arr);
console.log(arr);


// Given a stack, the task is to sort it such that the top of the stack has the greatest element.

// Example 1:

// Input:
// Stack: 3 2 1
// Output: 3 2 1