// const obj = {}

// const fibonacci = (num) => {
//     if(num<=1) return num
//     if(obj[num]) return obj[num]
//     console.log("fibinacci", num)
//     const result =  fibonacci(num -1) + fibonacci(num - 2)
//     obj[num] = result
//     return obj[num]
// }

// console.log("fibonnaci series", fibonacci(5))


const obj = {}

const fibonacci = (num) => {
     
     
   previous1 = 1
   previous2 = 0
   current = 0
    
    for(let i = 2; i <= num; i++){
        current = previous1 + previous2
        previous2 = previous1
        previous1 = current
    }
    
    return  current
}

console.log("fibonnaci series", fibonacci(10))


