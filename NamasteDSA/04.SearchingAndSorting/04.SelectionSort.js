const selectionSort = (arr) => {

    for(let i = 0 ; i<arr.length; i++){
        
        let index = i

        for (let j = i + 1; j < arr.length; j++) {

            if(arr[index] >    arr[j]){
                index = j
            }

        }

        const temp = arr[i]
        arr[i] = arr[index]
        arr[index] = temp
    }

    return arr
}



const nums = [5, 2, 9, 1, 5, 6];

console.log("Bubblesort", selectionSort(nums)) //Output: [1, 2, 5, 5, 6, 9]