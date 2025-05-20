const partition = (arr, p, q) =>{
    let i = p
    let pivot = arr[p]
    for( let j = i+1 ; j < q; j++){

          if(arr[j] < pivot){
           i = i + 1

           let temp = arr[i]
           arr[i] = arr[j]
           arr[j] = temp

          }
    }

    [arr[i], arr[p]] = [arr[p], arr[i]]

    return i;
}

const quickSort =(arr, low, high)=>{
    if(low<high){
        let pivotIndex = partition(arr, low, high)
        quickSort(arr, low, pivotIndex - 1 )
        quickSort(arr, pivotIndex + 1, high)
    }
    return arr
}

const arr =[ 16,56,6,6,4]

console.log(quickSort(arr, 0, arr.length))