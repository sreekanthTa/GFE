/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    nums.sort((a, b) => a - b);

    const result = [];
    const used = new Array(nums.length).fill(false);

    const backTrack = (subset) => {
        if (subset.length === nums.length) {
            result.push([...subset]);
            return;
        }

        for (let i = 0; i < nums.length; i++) {
            if (used[i]) continue;
            if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) continue;

            subset.push(nums[i]);
            used[i] = true;

            backTrack(subset);

            subset.pop();
            used[i] = false; // <-- fix here
        }
    };

    backTrack([]);
    return result; // <-- fix here
};
