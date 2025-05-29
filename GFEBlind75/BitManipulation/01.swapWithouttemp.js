let a = 1 // Try edit me
let b = 2
 

console.log(a,b)

a = a ^ b
b = a ^ b // (a ^ b) ^b => b and b =1, so b = a
a = a ^ b //(a^b) ^ a = b

console.log(a,b)
