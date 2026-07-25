class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        /**
         * 1. Start with the first word, traverse the rest of the array
         * and find words with same letters.
         * Once done, move on to second word, keeping track of which
         * words are "processed" already
         * 
         * 2. sort each word, then just group words with same letters.
         * would have to worry about messing up the order
         * 
         * 3. hashmap? use the letter occurances as the key and the value is a 
         * list if indexes. then for each word, check if all letters
         * in current word are in a key of the hashmap
         * could also use the sorted word as the key
         */
        const myMap = {}
        for (let i = 0; i < strs.length; i++) {
            const sorted = strs[i].split('').sort().join('')
            if (!myMap[sorted]) {
                myMap[sorted] = []
            }
            myMap[sorted].push(strs[i])
        }
        return Object.values(myMap)
    }
}
