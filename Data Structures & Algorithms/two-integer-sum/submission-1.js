class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const myMap = new Map();
        for (let i = 0; i < nums.length; i++) {
            const result = target - nums[i];
            myMap.set(result, i)
        }
        for (let j = 0; j < nums.length; j++) {
            if (myMap.has(nums[j]) && j !== myMap.get(nums[j])) {
                return [j, myMap.get(nums[j])];
            }
        }
    }
}
