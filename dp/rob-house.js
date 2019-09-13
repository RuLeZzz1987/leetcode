var rob = function(nums) {
  if (!nums.length) return 0;
  if (nums.length < 3) return Math.max(nums[0], nums[1] || 0)

  const dp = [];
  dp[0] = nums[0];
  dp[1] = Math.max(nums[0], nums[1]);

  for (let i = 2; i < nums.length; i++) {
    const b = dp[i - 1];
    const a = dp[i - 2] + nums[i];
    dp[i] = Math.max(a,b);
  }

  return Math.max(dp[dp.length - 1], dp[dp.length - 2]);
};


console.log(rob([2,7,9,3,1]));