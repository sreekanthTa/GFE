/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    
    let i = m - 1
    let j = n -1
    let k = m + n -1

    while(j>=0){

        if(i>=0&&nums1[i]> nums2[j]){
            nums1[k] = nums1[i]
            i--
        }else{
            nums1[k] = nums2[j]
            j--
        }
        k--
    }

    return nums1
};


// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]
// Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
// The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.

nums1 = [1,2,3,0,0,0]
 m = 3 
 nums2 = [2,5,6]
  n = 3

  console.log("MergedSortedArray", merge(nums1,m,nums2,n))
