/**
 * @param {character[][]} grid
 * @return {number}
 */

const Stack = require('../structures/Stack');

function dfs(grid, n, m) {
  const root = {n, m};
  const stack = new Stack();
  stack.push(root);
  while (!stack.isEmpty()) {
    const node = stack.pop();
    if (grid[node.n][node.m] === '1') {
      grid[node.n][node.m] = '0';
      if (node.n + 1 < grid.length && grid[node.n + 1][node.m] === '1') {
        stack.push({n: node.n + 1, m : node.m});
      }
      if (node.n - 1 >= 0 && grid[node.n - 1][node.m] === '1') {
        stack.push({n: node.n - 1, m : node.m});
      }
      if (node.m + 1 < grid[0].length && grid[node.n][node.m + 1] === '1') {
        stack.push({n: node.n, m : node.m + 1});
      }
      if (node.m - 1 >= 0 && grid[node.n][node.m - 1] === '1') {
        stack.push({n: node.n, m : node.m - 1});
      }
    }
  }
}

var numIslands = function(grid) {
  let islands = 0;

  if (!grid.length) {
    return islands;
  }
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === '1') {
        dfs(grid, i, j);
        islands++;
      }
    }
  }

  return islands;
};

console.log(numIslands([["1","1","1","1","1"],["1","0","1","0","1"],["1","1","1","1","1"]]));