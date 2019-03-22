const grid = [["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]];

const Queue = require('../structures/Queue');


function bfs(grid, n, m) {
  const root = {n, m};
  const queue = new Queue();
  queue.enqueue(root);
  while (!queue.isEmpty()) {
    const node = queue.dequeue();
    if (grid[node.n][node.m] === '1') {
      grid[node.n][node.m] = '0';

      if (node.n - 1 >= 0 && grid[node.n - 1][node.m] === '1') {
        queue.enqueue({n: node.n - 1, m: node.m});
      }
      if (node.n + 1 < grid.length && grid[node.n + 1][node.m] === '1') {
        queue.enqueue({n: node.n + 1, m: node.m});
      }
      if (node.m - 1 >= 0 && grid[node.n][node.m - 1] === '1') {
        queue.enqueue({n: node.n, m: node.m - 1});
      }
      if (node.m + 1 < grid[node.n].length && grid[node.n][node.m + 1] === '1') {
        queue.enqueue({n: node.n, m: node.m + 1});
      }
    }
  }
}

/**
 * @param {String[][]} grid
 * @return {number}
 */
const numIslands = function(grid) {
  let islands = 0;

  if (!grid.length) {
    return islands;
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === '1') {
        bfs(grid, i, j);
        islands++;
      }
    }
  }

  return islands;
};

console.log(numIslands(grid));