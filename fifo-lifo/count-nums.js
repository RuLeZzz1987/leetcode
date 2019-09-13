var findTargetSumWays = function(nums, S) {
  let result = 0;
  function count(nums, s, i) {
    if (nums.length === i) {
      if (s === 0) {
        result++;
      }
      return;
    }
    const n = nums[i];
    count(nums, s - n, i + 1);
    count(nums, s + n, i + 1);

  }
  count(nums, S, 0);

  return result;

};

console.log(findTargetSumWays([1,1,1,1,1], 3));