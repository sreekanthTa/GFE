// Input: numbers = [0,1,2,3,4], target = 2
// Output: 2
// Explanation: The original array [0,1,2,3,4] was rotated 0 times and 2 is present at 2nd index in given array


// Note: We can do for loop which is  O(N)

//BINARY SEARCH

const findInRotatedArray = (numbers, target) =>{


    let left = 0
    let right = numbers.length-1

    while(left<=right){

        const mid = Math.floor((left+right)/2)

        if(numbers[mid]==target) return mid

        //Left Sorted
        if(numbers[left] <= numbers[mid]){
           if(numbers[target] >= numbers[left] && numbers[target] < numbers[mid]){
            right = mid-1
           }else{
            left = mid+1
           }
        }
        //Right Sorted
        else{
           if(numbers[target] >= numbers[mid]&&numbers[target]<numbers[right]){
             left  = mid+1
           }else{
            right = mid-1
           }
        }
    }

    return -1

}

const numbers = [0,1,2,3,4];
const target = 2
// Output: 2

const res = findInRotatedArray(numbers, target)
console.log("respons",res)
