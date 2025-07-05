/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {

    let left =0;
    let right = numbers.length -  1

    while(left < right){

        const val= numbers[left] + numbers[right]
        
        if(val == target ){
          return [left +1, right +1]
        }else if(val > target){
          right --
        }else{
              left++
        }

    }
    return [-1, -1]
    
};


// Input: numbers = [2,7,11,15], target = 9
// Output: [1,2]
// Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].