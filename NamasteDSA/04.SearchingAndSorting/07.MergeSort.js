const merge = (left, right) => {
    const result = [];
    let i = 0, j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    // Append remaining elements
    while (i < left.length) {
        result.push(left[i]);
        i++;
    }

    while (j < right.length) {
        result.push(right[j]);
        j++;
    }

    return result;
};

const mergeSort = (arr) => {
    if (arr.length <= 1) return arr;

    const mid = Math.floor(arr.length / 2);

    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));

    return merge(left, right);
};

const arr = [1, 2, 6, 4, 5];
const sorted = mergeSort(arr);
console.log(sorted); // [1, 2, 4, 5, 6]




//INPLACE MERGE SORT

// const merge = (arr, l, mid, r) => {
//     const result = [];
//     let i = l, j = mid+1;

//     while (i <= mid && j <= r) {
//         if (arr[i] < arr[j]) {
//             result.push(arr[i]);
//             i++;
//         } else {
//             result.push(arr[j]);
//             j++;
//         }
//     }

//     // Append remaining elements
//     while (i <= mid) {
//         result.push(arr[i]);
//         i++;
//     }

//     while (j <= r) {
//         result.push(arr[j]);
//         j++;
//     }
    
//     for(let k = 0; k< result.length; k++){
//         arr[l+k] = result[k]
//     }

//     return arr;
// };

// const mergeSort = (arr, l, r) => {
//      if(l>=r) return
     
//      const mid = Math.floor((l+r) / 2)
     
//      mergeSort(arr, l, mid)
//      mergeSort(arr, mid + 1 , r)
//      return merge(arr, l, mid, r)
// };

// const arr = [1, 2, 6, 4, 5];
// const sorted = mergeSort(arr, 0, arr.length-1);
// console.log(sorted); // [1, 2, 4, 5, 6]

