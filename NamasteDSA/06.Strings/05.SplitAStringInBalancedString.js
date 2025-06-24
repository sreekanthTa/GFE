let tracker = 0; // tracks the difference between 'R' and 'L'
let counter = 0; // counts how many balanced substrings

for (let i = 0; i < s.length; i++) {
    const val = s[i];

    if (val === 'R') {
        tracker++;
    } else {
        tracker--;
    }

    if (tracker === 0) {
        counter++; // found a balanced chunk
    }
}


// Example 1:

// Input: s = "RLRRLLRLRL"
// Output: 4
// Explanation: s can be split into "RL", "RRLL", "RL", "RL", each substring contains same number of 'L' and 'R'.