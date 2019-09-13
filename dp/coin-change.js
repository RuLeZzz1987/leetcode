var coinChange = function(coins, amount) {
  const dp = new Array(amount + 1).fill(Number.MAX_SAFE_INTEGER);
  dp[0] = 0;
  for (const coin of coins) {
    dp[coin] = 1;
  }

  for (let i = 1; i <= amount; i++) {
    for (const coin of coins) {
      if (coin <= i) {
        dp[i] = Math.min(dp[i], dp[i - coin] + 1);
      }
    }
  }

  return dp[amount] === Number.MAX_SAFE_INTEGER ? - 1 : dp[amount];
};

console.log(coinChange([2, 4], 9));