class MinHeap {
    constructor() {
        this.heap = [];
    }

    getParentIndex(i) {
        return Math.floor((i - 1) / 2);
    }

    getLeftChildIndex(i) {
        return 2 * i + 1;
    }

    getRightChildIndex(i) {
        return 2 * i + 2;
    }

    insert(val) {
        this.heap.push(val);
        this.heapifyUp();
    }

    heapifyUp() {
        let index = this.heap.length - 1;
        while (
            index > 0 &&
            this.heap[this.getParentIndex(index)] > this.heap[index]
        ) {
            [this.heap[this.getParentIndex(index)], this.heap[index]] = [
                this.heap[index],
                this.heap[this.getParentIndex(index)],
            ];
            index = this.getParentIndex(index);
        }
    }

    remove() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();

        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown(0);
        return min;
    }

    heapifyDown(index) {
        let smallest = index;
        const left = this.getLeftChildIndex(index);
        const right = this.getRightChildIndex(index);

        if (
            left < this.heap.length &&
            this.heap[left] < this.heap[smallest]
        ) {
            smallest = left;
        }

        if (
            right < this.heap.length &&
            this.heap[right] < this.heap[smallest]
        ) {
            smallest = right;
        }

        if (smallest !== index) {
            [this.heap[smallest], this.heap[index]] = [
                this.heap[index],
                this.heap[smallest],
            ];
            this.heapifyDown(smallest);
        }
    }

    peek() {
        return this.heap[0];
    }

    size() {
        return this.heap.length;
    }
}

class KthLargest {
    constructor(k, nums) {
        this.k = k;
        this.minHeap = new MinHeap();

        for (let num of nums) {
            this.add(num);
        }
    }

    add(val) {
        this.minHeap.insert(val);

        if (this.minHeap.size() > this.k) {
            this.minHeap.remove();
        }

        return this.minHeap.peek();
    }
}


const kthLargest = new KthLargest(3, [4, 5, 8, 2]);

console.log(kthLargest.add(3)); // returns 4
console.log(kthLargest.add(5)); // returns 5
console.log(kthLargest.add(10)); // returns 5
console.log(kthLargest.add(9)); // returns 8
console.log(kthLargest.add(4)); // returns 8


/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */



// You are part of a university admissions office and need to keep track of the kth highest test score from applicants in real-time. This helps to determine cut-off marks for interviews and admissions dynamically as new applicants submit their scores.

// You are tasked to implement a class which, for a given integer k, maintains a stream of test scores and continuously returns the kth highest test score after a new score has been submitted. More specifically, we are looking for the kth highest score in the sorted list of all scores.

// Implement the KthLargest class:

// KthLargest(int k, int[] nums) Initializes the object with the integer k and the stream of test scores nums.
// int add(int val) Adds a new test score val to the stream and returns the element representing the kth largest element in the pool of test scores so far.
 

// Example 1:

// Input:
// ["KthLargest", "add", "add", "add", "add", "add"]
// [[3, [4, 5, 8, 2]], [3], [5], [10], [9], [4]]

// Output: [null, 4, 5, 5, 8, 8]

// Explanation:

// KthLargest kthLargest = new KthLargest(3, [4, 5, 8, 2]);
// kthLargest.add(3); // return 4
// kthLargest.add(5); // return 5
// kthLargest.add(10); // return 5
// kthLargest.add(9); // return 8
// kthLargest.add(4); // return 8