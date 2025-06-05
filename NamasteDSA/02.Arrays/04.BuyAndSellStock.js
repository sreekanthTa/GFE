/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    
    let max_profit = 0
    let min_cost = prices[0]

    for(let i =1; i < prices.length ; i++){
        const profit = prices[i] - min_cost

        max_profit = Math.max(profit, max_profit)

        min_cost = Math.min(min_cost, prices[i])
    }

    return max_profit

};

// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

const prices= [7,1,5,3,6,4]
console.log(maxProfit(prices)) //500000000000000000000000000000000000000000