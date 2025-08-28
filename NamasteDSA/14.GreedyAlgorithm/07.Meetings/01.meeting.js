/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {boolean}
     */
    canAttendMeetings(intervals) {

        const sortedIntervals = intervals.sort((a,b) => a.start-b.start)

        for(let i = 1 ; i <  sortedIntervals.length; i++){
            const firstInterval = sortedIntervals[i-1]
            const secondInterval = sortedIntervals[i]

            if(firstInterval.end > secondInterval.start){
                return false
            }
        }

        return true
    }
}

// Given an array of meeting time interval objects consisting of start and end times [[start_1,end_1],[start_2,end_2],...] (start_i < end_i), determine if a person could add all meetings to their schedule without any conflicts.

// Example 1:

// Input: intervals = [(0,30),(5,10),(15,20)]

// Output: false
// Explanation:

// (0,30) and (5,10) will conflict
// (0,30) and (15,20) will conflict