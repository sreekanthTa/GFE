
const linearSearch = (arr, target) =>{

    for(let i = 0; i <arr.length; i++){
        if(arr[i] == target){
            return i
        }
    }

    return -1
}

const numbers = [4, 2, 7, 1, 9, 3];
const target = 7;
console.log("LinearSearch", linearSearch(numbers, target))