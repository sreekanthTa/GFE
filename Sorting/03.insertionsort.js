const insertionSort = (arr) => {

    for( let i= 1; i< arr.length; i++){

        //  let key = arr[i]
         let j = i

         while( arr[j] <  arr[j-1]){
            let temp = arr[j]
            arr[j] = arr[j-1]
            arr[j-1] = temp
          
             j--
         }


    }

    return arr

}


console.log('Insertion sort is', insertionSort([2,1]))