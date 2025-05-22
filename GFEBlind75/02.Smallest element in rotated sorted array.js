// Input: numbers = [1,2,3,4]
// Output: 1
// Explanation: The original array [1,2,3,4] was rotated 0 times

//FOR LOOP O(n)

//BINARY SEARCH
const findSmallestInRotatedSortedArray = (numbers, target) =>{

    let left = 0
    let right = numbers.length-1
    let ans = 1000

    while(left<=right){
        const mid = Math.floor((left+right)/2)

        //Left Sort
        if(numbers[left]<=numbers[mid]){
          ans = Math.min(ans, numbers[left])
          left = mid+1

        }
        //Right Sort
        else{
        ans = Math.min(numbers[mid])
        right = mid-1
        }
    }

    return ans
}

const  numbers = [1,2,3,4]
const target =1
// Output: 1

const res = findSmallestInRotatedSortedArray(numbers, target)
console.log('ra',res)