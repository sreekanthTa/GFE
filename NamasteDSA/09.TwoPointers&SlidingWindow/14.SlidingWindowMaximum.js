/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
 const dequeue = []
 const result = []
 for(let i=0; i< nums.length;i++){
    
    //Remove out of index from front
    if(dequeue.length&&dequeue[0] <= i-k){
       dequeue.shift()
    }

   //Remove smaller elements
    while(dequeue.length&&nums[dequeue[dequeue.length-1]] < nums[i]){
        dequeue.pop()
    }

    //push element
    dequeue.push(i)

    //Save Max once we reach window
    if(i>=k-1){
        result.push(nums[dequeue[0]])
    }


 }

 return result
};

// You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position.

// Return the max sliding window.

 

// Example 1:

// Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
// Output: [3,3,5,5,6,7]
// Explanation: 
// Window position                Max
// ---------------               -----
// [1  3  -1] -3  5  3  6  7       3
//  1 [3  -1  -3] 5  3  6  7       3
//  1  3 [-1  -3  5] 3  6  7       5
//  1  3  -1 [-3  5  3] 6  7       5
//  1  3  -1  -3 [5  3  6] 7       6
//  1  3  -1  -3  5 [3  6  7]      7