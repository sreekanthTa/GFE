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




const topKfrequentElements = (arr, k) => {
    const obj = {}
    for(let i = 0 ; i < arr.length; i++){
        obj[arr[i]] = (obj[arr[i]] || 0) + 1
     }
     
     const buckets  = Array.from({length: arr.length +1}, () => [])
      for(const  key in obj){
          const freq =  obj[key]
           buckets[freq].push(Number(key))
     }
     
     console.log(buckets)
     const result = []
     
     for(let i=  buckets.length -1 ; i>=0 && result.length< k; i--){
         for (const num of buckets[i]){
             result.push(num)
             if(result.length == k) break
         }
         
     }
     return result
}

nums = [1,1,1,2,2,3], k = 2
console.log(topKfrequentElements(nums,k))