/**
 * @param {number[]} arr
 * @return {number}
 */
var minSetSize = function(arr) {
    
    const obj = {}

    for(const element of arr){
        obj[element] = (obj[element] || 0 )+1
    }

    const SortedElements = Object.values(obj).sort((a,b)=>b-a)
    
    let count =0
    let un = 0
    for(const el of SortedElements){
          count += el
          un+=1
          if(count>=(arr.length/2)){
            break;
          }
    }

    return un;


};

// You are given an integer array arr. You can choose a set of integers and remove all the occurrences of these integers in the array.

// Return the minimum size of the set so that at least half of the integers of the array are removed.

 

// Example 1:

// Input: arr = [3,3,3,3,5,5,5,2,2,7]
// Output: 2