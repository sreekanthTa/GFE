/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
  
class MaxHeap {
    constructor() {
        this.heap = [];
    }

    insert(val) {
        this.heap.push(val);
        this.heapifyUp();
    }

    extractMax() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();

        const max = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown(0);
        return max;
    }

    heapifyUp() {
        let index = this.heap.length - 1;
        while (
            index > 0 &&
            this.heap[Math.floor((index - 1) / 2)] < this.heap[index]
        ) {
            const parentIndex = Math.floor((index - 1) / 2);
            [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
            index = parentIndex;
        }
    }

    heapifyDown(index) {
        const length = this.heap.length;
        let largest = index;

        const left = 2 * index + 1;
        const right = 2 * index + 2;

        if (left < length && this.heap[left] > this.heap[largest]) {
            largest = left;
        }

        if (right < length && this.heap[right] > this.heap[largest]) {
            largest = right;
        }

        if (largest !== index) {
            [this.heap[largest], this.heap[index]] = [this.heap[index], this.heap[largest]];
            this.heapifyDown(largest);
        }
    }

    size() {
        return this.heap.length;
    }
}

     const maxHeap = new MaxHeap();
      
     //insert into heap
     for(const stone of stones){
        maxHeap.insert(stone)
     }

     //Do calculations
     while(maxHeap.size() > 1){
        const firstMax = maxHeap.extractMax()
        const secondMax = maxHeap.extractMax()

        const diff = firstMax -  secondMax

        if(diff){
            maxHeap.insert(diff)
        }
     }

     return maxHeap.size() == 1 ?maxHeap.extractMax() : 0



};


// You are given an array of integers stones where stones[i] is the weight of the ith stone.

// We are playing a game with the stones. On each turn, we choose the heaviest two stones and smash them together. Suppose the heaviest two stones have weights x and y with x <= y. The result of this smash is:

// If x == y, both stones are destroyed, and
// If x != y, the stone of weight x is destroyed, and the stone of weight y has new weight y - x.
// At the end of the game, there is at most one stone left.

// Return the weight of the last remaining stone. If there are no stones left, return 0.

 

// Example 1:

// Input: stones = [2,7,4,1,8,1]
// Output: 1
// Explanation: 
// We combine 7 and 8 to get 1 so the array converts to [2,4,1,1,1] then,
// we combine 2 and 4 to get 2 so the array converts to [2,1,1,1] then,
// we combine 2 and 1 to get 1 so the array converts to [1,1,1] then,
// we combine 1 and 1 to get 0 so the array converts to [1] then that's the value of the last stone.