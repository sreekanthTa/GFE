/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function(s) {
    const vowels = { 'a': true, 'e': true, 'i': true, 'o': true, 'u': true };

    let vowelsCount = 0;
    let constCount = 0;

    const vowels_ = {};
    const constants_ = {};

    for (let i = 0; i < s.length; i++) {
        const char = s[i].toLowerCase();
        if (!/[a-z]/.test(char)) continue; // skip non-letters

        if (vowels[char]) {
            vowels_[char] = (vowels_[char] || 0) + 1;
            vowelsCount = Math.max(vowelsCount, vowels_[char]);
        } else {
            constants_[char] = (constants_[char] || 0) + 1;
            constCount = Math.max(constCount, constants_[char]);
        }
    }

    return vowelsCount + constCount;
};


// Example 1:

// Input: s = "successes"

// Output: 6

// Explanation:

// The vowels are: 'u' (frequency 1), 'e' (frequency 2). The maximum frequency is 2.
// The consonants are: 's' (frequency 4), 'c' (frequency 2). The maximum frequency is 4.
// The output is 2 + 4 = 6.