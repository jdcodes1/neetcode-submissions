class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        /*
            Start at end and go backwards. for each element:
            - compute (i + 1) - (i). if last elemnt, this value is 0
            - if value from above is positive, that means you could
            buy on i and sell on i+1 for a profit.
            - then, check to see if the computed value for i+1 is positive.
            if so, then you can add the difference from #1 to the computed
            value for i+1 and htat's the max amount you can make if you bought
            on day i.
            - if the computed value from i+1 is negative, it's better to sell after
            1 day, so don't add that to total (then set the computed total)
        */
        let res = 0
        if (prices.length === 1) {
            return res
        }
        const computed = new Array(prices.length).fill(0)
        for (let i = prices.length - 2; i >= 0; i--) {
            const el = prices[i]
            const nextEl = prices[i + 1]
            let diff = nextEl-el
            const futureComputed = computed[i + 1]
            if (futureComputed > 0) {
                // Add futureComputed to diff
                diff += futureComputed
            }
            res = Math.max(diff, res)
            computed[i] = diff
        }
        return res
    }
}
