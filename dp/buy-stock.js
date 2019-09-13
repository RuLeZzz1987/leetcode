var maxProfit = function(prices) {
  const dp = new Array(prices.length);
  dp[0] = 0;
  for (let i = 0; i < prices.length; i++) {
    let max = dp[i - 1] || 0;
    for (let j = 0; j < i; j++) {
      max = Math.max(max, prices[i] - prices[j]);
    }
    dp[i] = Math.max(dp[i - 1] || 0, max);
  }

  return dp[dp.length - 1];
}


console.log(maxProfit([1, 2]));