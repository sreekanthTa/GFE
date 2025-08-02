class MaxHeap {
    constructor() {
        this.heap = [];
    }

    insert(val) {
        this.heap.push(val);
        this._bubbleUp();
    }

    extractMax() {
        const max = this.heap[0];
        const end = this.heap.pop();
        if (this.heap.length > 0) {
            this.heap[0] = end;
            this._sinkDown();
        }
        return max;
    }

    _bubbleUp() {
        let idx = this.heap.length - 1;
        const element = this.heap[idx];

        while (idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2);
            let parent = this.heap[parentIdx];

            if (element <= parent) break;

            this.heap[parentIdx] = element;
            this.heap[idx] = parent;
            idx = parentIdx;
        }
    }

    _sinkDown() {
        let idx = 0;
        const length = this.heap.length;
        const element = this.heap[0];

        while (true) {
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftChild, rightChild;
            let swapIdx = null;

            if (leftChildIdx < length) {
                leftChild = this.heap[leftChildIdx];
                if (leftChild > element) {
                    swapIdx = leftChildIdx;
                }
            }

            if (rightChildIdx < length) {
                rightChild = this.heap[rightChildIdx];
                if (
                    (swapIdx === null && rightChild > element) ||
                    (swapIdx !== null && rightChild > leftChild)
                ) {
                    swapIdx = rightChildIdx;
                }
            }

            if (swapIdx === null) break;

            this.heap[idx] = this.heap[swapIdx];
            this.heap[swapIdx] = element;
            idx = swapIdx;
        }
    }
}

// Main function
var maxProduct = function(nums) {
    const heap = new MaxHeap();

    for (let num of nums) {
        heap.insert(num);
    }

    const first = heap.extractMax();
    const second = heap.extractMax();

    return (first - 1) * (second - 1);
};


// or

function maxProduct(nums) {
    let firstMax = 0; // Holds the largest number found in the array
    let secondMax = 0; // Holds the second largest number found in the array

    // Iterate through each number in the provided array
    for (const num of nums) {
        if (num > firstMax) {
            // If the current number is greater than firstMax, update secondMax to firstMax
            // and then update firstMax to the current number
            secondMax = firstMax;
            firstMax = num;
        } else if (num > secondMax) {
            // If the current number is not greater than firstMax but is greater than secondMax,
            // update secondMax to the current number
            secondMax = num;
        }
    }

    // Return the product of (firstMax - 1) and (secondMax - 1)
    return (firstMax - 1) * (secondMax - 1);
}