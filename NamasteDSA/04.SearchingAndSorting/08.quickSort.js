const partition = (arr, low, high) => {
    const pivot = arr[low];
    let i = low + 1;

    for (let j = low + 1; j <= high; j++) {
        if (arr[j] < pivot) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
            i++;
        }
    }

    [arr[low], arr[i - 1]] = [arr[i - 1], arr[low]];
    return i - 1;
};

const quickSort = (arr, low = 0, high = arr.length - 1) => {
    if (low < high) {
        const index = partition(arr, low, high);
        quickSort(arr, low, index - 1);
        quickSort(arr, index + 1, high);
    }
};

const arr = [1, 2, 6, 4, 5];
quickSort(arr);
console.log(arr); // [1, 2, 4, 5, 6]
