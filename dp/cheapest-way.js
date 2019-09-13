var minPathSum = function(grid) {
  const m = grid.length;
  const n = grid[0].length;

  const dp = new Array(m);
  for (let i = 0; i < m; i++) {
    dp[i] = new Array(n).fill(0);
  }

  for (let i = 0; i < n; i++) {
    dp[0][i] = (dp[0][i - 1] || 0) + grid[0][i];
  }

  for (let i = 0; i < m; i++) {
    dp[i][0] = (dp[i - 1] && dp[i - 1][0] || 0) + grid[i][0];
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j];
    }
  }

  return dp[m - 1][n - 1];
};

const grid = [
  [1, 3, 1],
  [1, 5, 1],
  [4, 2, 1]
];

console.log(minPathSum(grid));