class MinHeap {
    constructor() {
        this.heap = [];
    }

    getParentIndex(index) {
        if (index === 0) return null;
        return Math.floor((index - 1) / 2);
    }

    getLeftChildIndex(index) {
        return (2 * index) + 1;
    }

    getRightChildIndex(index) {
        return (2 * index) + 2;
    }

    insert(value) {
        this.heap.push(value);
        this.heapifyUp(this.heap.length - 1);
    }

    heapifyUp(index) {
        let parentIndex = this.getParentIndex(index);

        while (index > 0 && this.heap[index] < this.heap[parentIndex]) {
            [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
            index = parentIndex;
            parentIndex = this.getParentIndex(index);
        }
    }

    delete() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();

        const minValue = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown(0);
        return minValue;
    }

    heapifyDown(index) {
        const leftChildIndex = this.getLeftChildIndex(index);
        const rightChildIndex = this.getRightChildIndex(index);
        let smallestIndex = index;

        if (leftChildIndex < this.heap.length && this.heap[leftChildIndex] < this.heap[smallestIndex]) {
            smallestIndex = leftChildIndex;
        }

        if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] < this.heap[smallestIndex]) {
            smallestIndex = rightChildIndex;
        }

        if (smallestIndex !== index) {
            [this.heap[index], this.heap[smallestIndex]] = [this.heap[smallestIndex], this.heap[index]];
            this.heapifyDown(smallestIndex);
        }
    }

    peek() {
        return this.heap.length > 0 ? this.heap[0] : null;
    }

    isEmpty() {
        return this.heap.length === 0;
    }

    size() {
        return this.heap.length;
    }
}

export default MinHeap;

// 🧪 Test
const minHeap = new MinHeap();
minHeap.insert(10);
minHeap.insert(5);
minHeap.insert(20);
minHeap.insert(3);
minHeap.insert(15);
minHeap.insert(8);
minHeap.insert(12);
minHeap.insert(1);
minHeap.insert(7);
minHeap.insert(6);
minHeap.insert(4);
minHeap.insert(2);
minHeap.insert(9);
minHeap.insert(11);

const minValue = minHeap.delete();
console.log("Deleted minimum value:", minValue);
console.log("Current heap:", minHeap.heap);
