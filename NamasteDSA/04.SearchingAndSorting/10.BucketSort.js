const bucketSort = (arr) => {
    if (arr.length === 0) return [];

    let min = arr[0];
    let max = arr[0];

    // Find min and max
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) min = arr[i];
        if (arr[i] > max) max = arr[i];
    }

    const bucketSize = 5; // You can adjust this
    const bucketCount = Math.floor((max - min) / bucketSize) + 1;

    // Create buckets (array of arrays)
    const buckets = Array.from({ length: bucketCount }, () => []);

    // Distribute elements into buckets
    for (let i = 0; i < arr.length; i++) {
        const index = Math.floor((arr[i] - min) / bucketSize);
        buckets[index].push(arr[i]);
    }

    // Sort each bucket and merge
    const sortedArray = [];
    for (let i = 0; i < buckets.length; i++) {
        buckets[i].sort((a, b) => a - b);
        sortedArray.push(...buckets[i]);
    }

    return sortedArray;
}

const arr = [29, 25, 3, 49, 9, 37, 21, 43];
console.log(bucketSort(arr)); 
// Output: [3, 9, 21, 25, 29, 37, 43, 49]
