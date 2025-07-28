/**
 * @param {number[]} arr - sorted array
 * @param {number} k - number of closest elements
 * @param {number} x - target value
 * @return {number[]}
 */
var findClosestElements = function(arr, k, x) {
    let left = 0;
    let right = arr.length - k;

    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        
        // Compare distances between x and mid vs mid + k
        if (x - arr[mid] > arr[mid + k] - x) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    return arr.slice(left, left + k);
};
