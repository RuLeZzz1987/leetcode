var merge = function(nums1, m, nums2, n) {
  if (!n) {
    return;
  }
  if (!m) {
    for (let x = 0; x < n; x++) {
      nums1[x] = nums2[x];
    }
    return;
  }
  m--;
  n--;
  for (let i = nums1.length - 1; i >= 0; i--) {
    if (nums1[m] > nums2[n]) {
      nums1[i] = nums1[m];
      m--;
    } else {
      nums1[i] = nums2[n];
      n--;
    }

    if (m < 0) {
      for (let x = i - 1; x >= 0; x--) {
        nums1[x] = nums2[n];
        n--;
      }
      break;
    }
    if (n < 0) {
      break;
    }
  }
};

const num1 = [2, 0];

merge(num1, 1, [1], 1);

console.log(num1);