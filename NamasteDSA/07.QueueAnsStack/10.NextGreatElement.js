/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let stack = []
    const obj = {}

    for(let i = nums2.length-1; i >=0; i--){

        const val = nums2[i]

        while(stack.length && stack[stack.length-1] <= val){
            stack.pop()
        }

        obj[val] = stack.length ==0 ? -1 : stack[stack.length-1]
        
        stack.push(val)

    } 

    return nums1.map(num => obj[num]);
};


// Input: nums1 = [4,1,2], nums2 = [1,3,4,2]
// Output: [-1,3,-1]
// Explanation: The next greater element for each value of nums1 is as follows:
// - 4 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1.
// - 1 is underlined in nums2 = [1,3,4,2]. The next greater element is 3.
// - 2 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1.