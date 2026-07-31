class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        /**
         * BFS: keep a visited grid and a queue of nodes to visit
         * a main double for loop which loops through all elements.
         * for each element, add to queue, then while
         * queue is not empty, pop element, add it's neighbors to the
         * queue, and mark this node as visited.
         * once we run out of neighbors to visit, increment the 
         * number of islands. can keep track of visited array separately
         * or mutate grid in place (with 0)
         */
        let res = 0
        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[i].length; j++) {
                if (grid[i][j] === '1') {
                    this.helper(grid, i, j)
                    res++
                }
            }
        }
        return res
    }

    helper(grid, i, j) {
        let queue = []
        queue.push([i, j])
        while (queue.length !== 0) {
            const [row, col] = queue.shift()
            if (row < grid.length && row >= 0 && col < grid[0].length && col >= 0 && grid[row][col] === '1') {
                grid[row][col] = "0"
                // Add this element's neighbors
                queue.push([row-1,col])
                queue.push([row+1,col])
                queue.push([row,col-1])
                queue.push([row,col+1])
            }
        }
    }
}
