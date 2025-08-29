// User function Template for javascript

/**
 * @param {number[]} start
 * @param {number[]} end
 * @returns {number}
 */

class Solution {
    // Function to find the maximum number of meetings that can
    // be performed in a meeting room.
    maxMeetings(start, end) {
        const meetings = []
        
        // Pair start & end
        for (let i = 0; i < start.length; i++) {
            meetings.push([start[i], end[i]])
        }
        
        // Sort by end time
        const sortedMeetings = meetings.sort((a, b) => a[1] - b[1])
        
        let count = 1
        let lastMeetingEnd = sortedMeetings[0][1]
        
        // Traverse and select meetings
        for (let i = 1; i < sortedMeetings.length; i++) {
            if (sortedMeetings[i][0] > lastMeetingEnd) {
                count += 1
                lastMeetingEnd = sortedMeetings[i][1]
            }
        }
        
        return count
    }
}


// You are given timings of n meetings in the form of (start[i], end[i]) where start[i] is the start time of meeting i and end[i] is the finish time of meeting i. Return the maximum number of meetings that can be accommodated in a single meeting room, when only one meeting can be held in the meeting room at a particular time. 

// Note: The start time of one chosen meeting can't be equal to the end time of the other chosen meeting.

// Examples :

// Input: start[] = [1, 3, 0, 5, 8, 5], end[] =  [2, 4, 6, 7, 9, 9]
// Output: 4
// Explanation: Maximum four meetings can be held with given start and end timings. The meetings are - (1, 2), (3, 4), (5,7) and (8,9)