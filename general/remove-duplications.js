var removeDuplicates = function(nums) {
  if (nums.length === 1) {
    return 1;
  }

  let idx = 1;
  while (idx < nums.length) {
    if (nums[idx] === nums[idx - 1]) {
      for (let i = idx; i < nums.length ; i++) {
        nums[i] = nums[i + 1];
      }
      nums.pop();
    } else {
      idx++;
    }
  }

  return nums.length
};

console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));