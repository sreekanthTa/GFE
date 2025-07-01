
const bottomReverse = (array, topElement) => {

  if(array.length==0){
    array.push(topElement)
    return 
  }

  const popElement = array.pop()
  bottomReverse(array, topElement)
  array.push(popElement)
}

const recursion = (array) => {

  if(array.length==0) return

  const topElement = array.pop()

  recursion(array)

  bottomReverse(array, topElement)

}

const arr = [1,2,3,4,5]


const resp = recursion(arr)
console.log(resp, arr)



// Input: elements present in stack from top to bottom 4 3 2 1
// Output: 1 2 3 4

// Input: elements present in stack from top to bottom 1 2 3
// Output: 3 2 1