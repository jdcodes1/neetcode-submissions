class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const mySet = new Set()
        let duplicates = false
        nums.forEach((num) => {
            if (mySet.has(num)) {
                duplicates = true
                return;
            } else {
                mySet.add(num)
            }
        })
        return duplicates;
    }
}
