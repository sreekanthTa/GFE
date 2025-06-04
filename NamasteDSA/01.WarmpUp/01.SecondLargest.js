const  secondLargesetInArray = (arr)  => {

     let firstLargest  = -Infinity;
     let secondLargest = -Infinity;

     for(const num of arr){
        if(num>firstLargest){
            secondLargest= firstLargest
            firstLargest= num
        }else if(num < firstLargest && num > secondLargest){
            secondLargest = num
        }
     }

     return secondLargest

}


const arr = [10, 20, 4, 45, 99]
console.log(secondLargesetInArray([10, 20, 4, 45, 99])); // Output: 45


