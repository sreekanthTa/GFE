/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
    

        // Sort by end time
        const sortedMeetings = intervals.sort((a, b) => a[1] - b[1])
        
        let count = 1
        let lastMeetingEnd = sortedMeetings[0][1]
        
        // Traverse and select meetings
        for (let i = 1; i < sortedMeetings.length; i++) {
            if (sortedMeetings[i][0] >= lastMeetingEnd) {
                count += 1
                lastMeetingEnd = sortedMeetings[i][1]
            }
        }
        
        return intervals.length - count
};



// Given an array of intervals intervals where intervals[i] = [starti, endi], return the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.

// Note that intervals which only touch at a point are non-overlapping. For example, [1, 2] and [2, 3] are non-overlapping.

 

// Example 1:

// Input: intervals = [[1,2],[2,3],[3,4],[1,3]]
// Output: 1
// Explanation: [1,3] can be removed and the rest of the intervals are non-overlapping.