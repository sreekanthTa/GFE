/**
 * @param {number[]} gifts
 * @param {number} k
 * @return {number}
 */
var pickGifts = function(gifts, k) {

    class MaxHeap{
        constructor(){
            this.heap = []
        }

        getParentIndex(index){
            return Math.floor((index -1)/2)
        }

        getLeftChildIndex(index){
            return ( 2 * index ) + 1
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

            while (index > 0 && this.heap[parentIndex] < this.heap[index]) {
                if(this.heap[parentIndex]<this.heap[index]){
                    [this.heap[parentIndex], this.heap[index]] =
                    [this.heap[index], this.heap[parentIndex]]

                    index = parentIndex
                    parentIndex = this.getParentIndex(index)
                }
            }
        }


        delete(){
            if(this.heap.length==0) return null
            if(this.heap.length==1) return this.heap.pop()

            const maxValue = this.heap[0]

            this.heap[0] = this.heap.pop()

            this.heapifyDown(0)
            
            return maxValue
        }

        heapifyDown(index){
            let leftChildIndex = this.getLeftChildIndex(index)
            let rightChildIndex = this.getRightChildIndex(index)
            let largesTIndex = index

            if(leftChildIndex < this.heap.length && 
               this.heap[leftChildIndex] > this.heap[largesTIndex] ){
                largesTIndex = leftChildIndex
               }

            if(rightChildIndex < this.heap.length &&
               this.heap[rightChildIndex] > this.heap[largesTIndex]){
                largesTIndex = rightChildIndex
               }

            if(index != largesTIndex){
                [this.heap[largesTIndex], this.heap[index]] =
                [this.heap[index], this.heap[largesTIndex]]

                this.heapifyDown(largesTIndex)
            }

        }
    }

    const maxHeap = new MaxHeap()

    for(const gift of gifts){
        maxHeap.insert(gift)
    }

 
    for(let i = 0; i < k;i++){
        const maxGift = maxHeap.delete()
        const updatedGift = Math.floor(Math.sqrt(maxGift));
        maxHeap.insert(updatedGift)
    }

        return maxHeap.heap.reduce((sum, val) => sum + val, 0);

    
};


// You are given an integer array gifts denoting the number of gifts in various piles. Every second, you do the following:

// Choose the pile with the maximum number of gifts.
// If there is more than one pile with the maximum number of gifts, choose any.
// Reduce the number of gifts in the pile to the floor of the square root of the original number of gifts in the pile.
// Return the number of gifts remaining after k seconds.

 

// Example 1:

// Input: gifts = [25,64,9,4,100], k = 4
// Output: 29
// Explanation: 
// The gifts are taken in the following way:
// - In the first second, the last pile is chosen and 10 gifts are left behind.
// - Then the second pile is chosen and 8 gifts are left behind.
// - After that the first pile is chosen and 5 gifts are left behind.
// - Finally, the last pile is chosen again and 3 gifts are left behind.
// The final remaining gifts are [5,8,9,4,3], so the total number of gifts remaining is 29.