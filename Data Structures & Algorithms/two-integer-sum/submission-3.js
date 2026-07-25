class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    /*
        Generate map of [target-value, value index]
        Then search array again and if any elements are in map,
        return index of both
    */
    twoSum(nums, target) {
        const myMap = new Map();
        for (let i = 0; i < nums.length; i++) {
            const result = target - nums[i];
            if (myMap.has(nums[i])) {
                return [i, myMap.get(nums[i])];
            }
            myMap.set(result, i)
        }
    }
}
