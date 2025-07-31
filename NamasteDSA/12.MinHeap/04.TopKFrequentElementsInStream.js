class MinHeap{
    constructor(){
        this.heap = []
    }

    getParentIndex(index){
        return Math.floor((index-1)/2)
    }

    getLeftChildIndex(index){
        return (2*index) + 1
    }

    getRightChildIndex(index){
        return (2*index) + 2
    }

    insert(value){
        this.heap.push(value)
        this.heapifyUp(this.heap.length-1)
    }

    heapifyUp(index){
        let parentIndex = this.getParentIndex(index)
        while(parentIndex!=null && this.heap[index] < this.heap[parentIndex]){
            [this.heap[index], this.heap[parentIndex]] = 
            [this.heap[parentIndex], this.heap[index]]
            index = parentIndex
            parentIndex = this.getParentIndex(index)
        }
    }

    delete(index){
        if(this.heap.length==0) return null
        if(this.heap.length==1) return this.heap.pop()

        const minValue = this.heap[0]
        this.heap[0] = this.heap.pop()
        this.heapifyDown(0)
        return minValue
    }

    heapifyDown(index){
        const leftIndex = this.getLeftChildIndex(index)
        const rightIndex = this.getRightChildIndex(index)

        let smallestIndex = index

        if(leftIndex < this.heap.length &&
           this.heap[smallestIndex] > this.heap[leftIndex]
          ){
            smallestIndex = leftIndex
          }

          if(rightIndex < this.heap.length&&
          this.heap[smallestIndex] > this.heap[rightIndex]){
            smallestIndex = rightIndex
          }

          if(index != smallestIndex){
            [this.heap[index], this.heap[smallestIndex]] =
            [this.heap[smallestIndex],  this.heap[index]]

            this.heapifyDown(smallestIndex)
          }
    }
}

/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
    this.k = k
    this.minHeap = new MinHeap()

    for(const num of nums){
        this.add(num)
    }
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    this.minHeap.insert(val)
     if (this.minHeap.heap.length > this.k) {
        this.minHeap.delete();
    }
    return this.minHeap.heap[0];
};

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