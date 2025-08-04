const countingSort = (arr) => {
    
    let max = arr[0]
    
    for(let i = 0; i< arr.length; i++){
        if(arr[i] > max){
            max = arr[i]
        }
    }
    
    const count = new Array(max + 1).fill(0);
    
    for(let i =0 ; i < arr.length; i++){
        count[arr[i]]++
    }
    
    let index = 0
    
    for(let i = 0; i <count.length; i++){
       
        while(count[i] > 0){
            arr[index] = i
            index++
            count[i]--
        }
    }
    
    return arr;
    
    
}

const arr = [4, 2, 2, 8, 3, 3, 1];
console.log(countingSort(arr)); // [1, 2, 2, 3, 3, 4, 8]










