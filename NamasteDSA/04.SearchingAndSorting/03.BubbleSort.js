const bubbleSort = (arr) => {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
};

const nums = [5, 2, 9, 1, 5, 6];
console.log("Bubble Sort:", bubbleSort(nums)); // Output: [1, 2, 5, 5, 6, 9]
