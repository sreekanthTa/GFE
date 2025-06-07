const findFactorialNumber = (num) =>{
  if(num==1) return num

  return num * findFactorialNumber(num-1)


}

console.log("Factorial of a ", findFactorialNumber(5))