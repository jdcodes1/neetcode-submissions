class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        /**
         * Start with 2 pointers, the shorter of the two move inwards until they touch
         * compute max area along the way
         */

        let res = 0;
        let i = 0;
        let j = heights.length - 1;

        while (i <= j) {
            const area = Math.min(heights[i], heights[j]) * (j - i)
            res = Math.max(res, area)
            if (heights[i] <= heights[j]) {
                i++;
            } else {
                j--;
            }
        }
        return res;
    }
}
