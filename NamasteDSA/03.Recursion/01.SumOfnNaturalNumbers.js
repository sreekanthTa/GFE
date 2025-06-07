const sumOfNaturalNumbers = (n)=>{

      if(n==1) return n

    return n+sumOfNaturalNumbers(n-1)

}

// Input: n = 3
// Output: 6
// Explanation: 1 + 2 + 3 = 6

// Input: n = 10
// Output: 55
// Explanation: 1 + 2 + 3 + ... + 10 = 55

console.log("Sum of n natural numbers", sumOfNaturalNumbers(3)) //6
console.log("Sum of n natural numbers", sumOfNaturalNumbers(10)) //55
