/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    
    let i = 0 
    const length = intervals.length
    const result = []

    while(i < length && intervals[i][1] < newInterval[0]){
          result.push(intervals[i])
          i = i + 1
    }

    while(i < length && intervals[i][0] <= newInterval[1]){
         newInterval[0] = Math.min(newInterval[0], intervals[i][0])
         newInterval[1] = Math.max(newInterval[1], intervals[i][1])
         i= i+1
 
    }

    result.push(newInterval)
       
    while (i < length) {
        result.push(intervals[i]);
        i++;
    }

    return result;
};



// You are given an array of non-overlapping intervals intervals where intervals[i] = [starti, endi] represent the start and the end of the ith interval and intervals is sorted in ascending order by starti. You are also given an interval newInterval = [start, end] that represents the start and end of another interval.

// Insert newInterval into intervals such that intervals is still sorted in ascending order by starti and intervals still does not have any overlapping intervals (merge overlapping intervals if necessary).

// Return intervals after the insertion.

// Note that you don't need to modify intervals in-place. You can make a new array and return it.

 

// Example 1:

// Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
// Output: [[1,5],[6,9]]