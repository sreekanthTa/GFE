/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    
    const freqMap = {}

    for(const num of nums){
        freqMap[num]  = (freqMap[num] || 0) + 1
    }

    const minHeap = []

    for(const [num, freq] of Object.entries(freqMap)){
          minHeap.push([freq, num])
          minHeap.sort((a,b)=>a[0]-b[0])

          if(minHeap.length > k){
            minHeap.shift()
          }
    }


    return minHeap.map((e)=>e?.[1]*1)
    
    
    
};


// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

 

// Example 1:

// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]