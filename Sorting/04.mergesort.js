const merge = (arr1, arr2) =>{
    let firstIndex = 0;
    let secondIndex = 0;

    let ind = 0;
    const newArray = []

    while(firstIndex < arr1.length&& secondIndex < arr2.length){
        if( arr1[firstIndex] < arr2[secondIndex]){
            // newArray.push(arr1[firstIndex])
            newArray[ind] = arr1[firstIndex]
            firstIndex++;
            ind++
        }

        if(arr1[firstIndex] > arr2[secondIndex]){
            newArray.push(arr2[secondIndex])
            secondIndex++;
            ind++
        }
    }

    while(firstIndex < arr1.length){
        newArray.push(arr1[firstIndex])
        firstIndex++
        ind++
    }
    while(secondIndex < arr2.length){
        newArray.push(arr2[secondIndex])
        secondIndex++
        ind++
    }

    return newArray
}

const mergeSort = (arr)=>{

    if (arr.length<=1) return arr;

    const mid = Math.floor((arr.length) / 2)

    const leftAr =  mergeSort(arr.slice(0, mid))
    const rightAr =  mergeSort(arr.slice(mid))

    return merge(leftAr, rightAr)

}

const arr = [5,1,2,4,6,3]
// const start = 0
// const la = arr.length - 1
console.log("Merge sort", mergeSort(arr))