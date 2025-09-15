/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    
    class MinHeap{
        constructor(){
            this.heap = []
        }

        getParentIndex(index){
            return Math.floor((index-1)/2)
        }
        getLeftChildIndex(index){
            return (2 * index) + 1
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
            while(parentIndex!=null && this.heap[parentIndex] > this.heap[index]){
                [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]]

                index =parentIndex
                parentIndex= this.getParentIndex(index)
            }

        }

        pop(){
            if(this.heap.length == 0) return null
            if(this.heap.length==1) return this.heap[0]
            const minElement = this.heap[0]

            this.heap[0] = this.heap.pop()
            this.heapifyDown(0)
            return minElement;
        }

        heapifyDown(index){
            let leftChildIndex = this.getLeftChildIndex(index)
            let rightChildIndex = this.getRightChildIndex(index)
            let smallestIndex = index;

            if(leftChildIndex< this.heap.length && this.heap[leftChildIndex] <this.heap[smallestIndex]){
               smallestIndex = leftChildIndex
            }

            if(rightChildIndex < this.heap.length && this.heap[rightChildIndex]
            <this.heap[smallestIndex]){
                 smallestIndex = rightChildIndex
            }

            if(smallestIndex != index){
              [this.heap[index], this.heap[smallestIndex]] = 
                [this.heap[smallestIndex], this.heap[index]]
                this.heapifyDown(smallestIndex)
            }
        }
    }

    const minHeap = new MinHeap()

    for(let num of nums){
        minHeap.insert(num)
        if(minHeap.heap.length > k){
            minHeap.pop()
        }
    }

    return minHeap.heap[0]

};



// Given an integer array nums and an integer k, return the kth largest element in the array.

// Note that it is the kth largest element in the sorted order, not the kth distinct element.

// Can you solve it without sorting?

 

// Example 1:

// Input: nums = [3,2,1,5,6,4], k = 2
// Output: 5