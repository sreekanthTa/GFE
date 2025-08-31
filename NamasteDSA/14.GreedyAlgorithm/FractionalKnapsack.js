/**
 * @param {number[]} val
 * @param {number[]} wt
 * @param {number} capacity
 * @returns {number}
 */

class Solution {
    fractionalKnapsack(val, wt, capacity) {
        const items = [];

        // Step 1: Create list of items with value, weight, and ratio
        for (let i = 0; i < val.length; i++) {
            items.push({
                value: val[i],
                weight: wt[i],
                ratio: val[i] / wt[i]
            });
        }

        // Step 2: Sort items by value/weight ratio in descending order
        const sortedItems = items.sort((a, b) => b.ratio - a.ratio);

        let remainingCapacity = capacity;
        let total = 0;

        // Step 3: Pick items greedily
        for (const item of sortedItems) {
            if (remainingCapacity === 0) break;

            if (item.weight <= remainingCapacity) {
                // Take the whole item
                total += item.value;
                remainingCapacity -= item.weight;
            } else {
                // Take fraction of the item
                total += item.ratio * remainingCapacity;
                remainingCapacity = 0; // knapsack full
            }
        }

        return total;
    }
}

// // Example usage
// const sol = new Solution();
// console.log(sol.fractionalKnapsack([60, 100, 120], [10, 20, 30], 50));
// // ✅ Output: 240


// Given two arrays, val[] and wt[] , representing the values and weights of items, and an integer capacity representing the maximum weight a knapsack can hold, determine the maximum total value that can be achieved by putting items in the knapsack. You are allowed to break items into fractions if necessary.
// Return the maximum value as a double, rounded to 6 decimal places.

// Examples :

// Input: val[] = [60, 100, 120], wt[] = [10, 20, 30], capacity = 50
// Output: 240.000000
// Explanation: By taking items of weight 10 and 20 kg and 2/3 fraction of 30 kg. Hence total price will be 60+100+(2/3)(120) = 240