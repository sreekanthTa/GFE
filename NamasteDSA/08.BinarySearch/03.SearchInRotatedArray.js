/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1

    while(left <= right){
        
        const mid = Math.floor((left+right)/2)

        const midValue =  nums[mid]

        if(midValue==target) return mid

        if(nums[left] <= nums[mid]){
             if(target >= nums[left]&&target <= nums[mid]){
                right = mid-1
             }else{
               left = mid+1
             }
        }else{
           if(target >= nums[mid] && target <= nums[right]){
               left = mid+1
           }else{
            right = right - 1
           }
        }



    }

    return -1
 
};

// Input: nums = [4,5,6,7,0,1,2], target = 0
// Output: 4