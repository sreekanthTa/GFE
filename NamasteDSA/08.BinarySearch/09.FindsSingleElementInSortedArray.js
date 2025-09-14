/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {

    if(nums.length==1) return nums[0]

    if(nums[0] != nums[1]) return nums[0]

    if(nums[nums.length-1] != nums[nums.length-2]) return nums[nums.length-1]

    let left = 1
    let right = nums.length - 2

    while(left<=right){

        const mid = Math.floor((left+right) / 2)

        if(nums[mid] != nums[mid+1] && nums[mid] != nums[mid-1]){
            return nums[mid]
        }else if(
            (mid%2 ==1 && nums[mid-1] == nums[mid])
            ||  
            (mid%2 ==0 && nums[mid+1] == nums[mid])
            ){
                left = mid+1
            }else{
                right = mid - 1
            }
    }
    
    return -1
};

// Input: nums = [1,1,2,3,3,4,4,8,8]
// Output: 2
