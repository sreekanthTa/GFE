
  function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        
      let minJ = i;
  
      for (let j = i; j < arr.length; j++) {
        if (arr[j] < arr[minJ]) {
          minJ = j;
        }
      }
  
      if(minJ != i){
        let temp = arr[minJ];
        arr[minJ] = arr[i];
        arr[i] = temp;
      }
  
    }
  
    return arr;
  }
  

  console.log("Selection sort", selectionSort([5,2,4,6,8,3]))