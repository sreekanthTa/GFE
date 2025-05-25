
function limit(func, n) {
    let invocationCoutner = 0;
    let value;
    return function (...args) {
      if (invocationCoutner == n) {
        return value;
      }
      value = func.apply(this, args);
      invocationCoutner += 1;
      return value;
    };
  }
  
  let i = 1;

function incrementBy(value) {
  i += value;
  console.log(i)
  return i;
}

const incrementByAtMostThrice = limit(incrementBy, 3);
incrementByAtMostThrice(2); // i is now 3; The function returns 3.
incrementByAtMostThrice(3); // i is now 6; The function returns 6.
incrementByAtMostThrice(4); // i is now 10; The function returns 10.
incrementByAtMostThrice(5); // i is still 10 as this is the 4th invocation; The function returns 10 as it's the result of the last invocation.
 