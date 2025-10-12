/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if (nums.length === 0) return 0;
    if (nums.length === 1) return nums[0];
    if (nums.length === 2) return Math.max(nums[0], nums[1]);

    const robberHelper = (rob) => {
        if (rob.length === 0) return 0;
        if (rob.length === 1) return rob[0];
        if (rob.length === 2) return Math.max(rob[0], rob[1]);

        const dp = [];
        dp[0] = rob[0];
        dp[1] = Math.max(rob[0], rob[1]);

        for (let i = 2; i < rob.length; i++) {
            dp[i] = Math.max(rob[i] + dp[i - 2], dp[i - 1]);
        }

        return dp[dp.length - 1];
    };

    // ✅ Fix: properly slice arrays for circular logic
    const withFirstHouse = nums.slice(0, nums.length - 1); // exclude last
    const withLastHouse = nums.slice(1); // exclude first

    const firstHo = robberHelper(withFirstHouse);
    const secondHo = robberHelper(withLastHouse);

    return Math.max(firstHo, secondHo);
};


// You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed. All houses at this place are arranged in a circle. That means the first house is the neighbor of the last one. Meanwhile, adjacent houses have a security system connected, and it will automatically contact the police if two adjacent houses were broken into on the same night.

// Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.

 

// Example 1:

// Input: nums = [2,3,2]
// Output: 3
// Explanation: You cannot rob house 1 (money = 2) and then rob house 3 (money = 2), because they are adjacent houses.