// User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number[]} dep
 * @returns {number}
 */

class Solution {
    findPlatform(arr, dep) {
        // code here
        
        const arr_sort = arr.sort((a,b) => a-b)
        const dep_sort = dep.sort((a,b) => a-b)
        
        let i = 0
        let j = 0
        const n = arr_sort.length
        
        let count = 0
        let maxCount = 0
       
        
        while(i < n){
            
            if(arr_sort[i] <= dep_sort[j]){
                i = i + 1
                count = count + 1
            }else{
                j = j + 1
                count = count - 1
            } 
            
            maxCount = Math.max(maxCount, count)
        }
        return maxCount
    }
}


// You are given the arrival times arr[] and departure times dep[] of all trains that arrive at a railway station on the same day. Your task is to determine the minimum number of platforms required at the station to ensure that no train is kept waiting.
// At any given time, the same platform cannot be used for both the arrival of one train and the departure of another. Therefore, when two trains arrive at the same time, or when one arrives before another departs, additional platforms are required to accommodate both trains.
// Note: Time intervals are in the 24-hour format(HHMM) , where the first two characters represent hour (between 00 to 23 ) and the last two characters represent minutes (this will be <= 59 and >= 0).

// Examples:

// Input: arr[] = [900, 940, 950, 1100, 1500, 1800], dep[] = [910, 1200, 1120, 1130, 1900, 2000]
// Output: 3
// Explanation: There are three trains during the time 9:40 to 12:00. So we need a minimum of 3 platforms.