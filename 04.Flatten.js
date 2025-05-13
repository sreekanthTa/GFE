
const result = [];

function flatten(value) {
    const result = [];

    if(value.length==0) return []
  
    const helper =  (arr) =>{
    
    if (arr?.length == 0) return ;
  
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        helper(arr[i]);
      } else {
        result.push(arr[i]);
      }
    }
  
    }
  
    helper(value)
  
    return result;
}

const res = flatten([1, [2, [3]]]); // [1, 2, 3]
console.log(res)
