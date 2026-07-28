class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        /**
         * two pointers- one start at start, next starts at i+1
         * and iterates through array until we hit a duplicate
         * then i moves forward one and 2nd pointer is reset
         * need a set, and remove characters on duplicate found
         */
        let p1 = 0;
        let p2 = 1;
        const set = new Set() // x, y
        if (s.length <= 1) {
            return s.length
        }
        let maxSoFar = 0;
        while (p1 < s.length) {
            if (p2 >= s.length) {
                p1++
                // probably need to handle checking maxSoFar here
                continue
            }
            set.add(s.charAt(p1)) // duplicated work but whatever
            set.add(s.charAt(p2))
            if (set.size < p2 - p1 + 1) {
                // Found duplicate
                maxSoFar = Math.max(maxSoFar, set.size)
                p1++;
                p2 = p1 + 1
                set.clear()
            } else {
                maxSoFar = Math.max(maxSoFar, set.size)
                p2++;
            }
        }
        if (p1 === 0 && p2 === s.length) {
            // no duplicates found, second pointer went straight through
            // so return length of string
            maxSoFar = s.length
        }
        return maxSoFar
    }
}
