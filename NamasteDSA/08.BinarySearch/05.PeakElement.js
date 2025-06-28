var findPeakElement = function(nums) {
    let left = 0, right = nums.length - 1;

    while (left <= right) {
        
        let mid = Math.floor((left + right) / 2);
        
        if (mid < nums.length-1 && nums[mid] < nums[mid + 1]) {
             
            left = mid + 1;
        } else if(mid > 0 && nums[mid] < nums[mid-1]){
            
            right = mid - 1;
        }else{
             return mid
        }
    }

    return -1; // or right, both are same here
};


// Input: nums = [1,2,3,1]
// Output: 2
// Explanation: 3 is a peak element and your function should return the index number 2.