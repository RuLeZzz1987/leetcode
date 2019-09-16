/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
function findMedianSortedArrays(nums1, nums2) {
  if (nums1.length > nums2.length) {
    return findMedianSortedArrays(nums2, nums1);
  }

  const xLen = nums1.length;
  const yLen = nums2.length;

  let low = 0;
  let high = xLen;
  while (low <= high) {
    const partitionX = ((high + low) / 2) | 0;
    const partitionY = ((xLen + yLen + 1) / 2 - partitionX) | 0;

    const maxLeftX = partitionX === 0 ? -Infinity : nums1[partitionX - 1];
    const maxLeftY = partitionY === 0 ? -Infinity : nums2[partitionY - 1];

    const minRightX = partitionX >= xLen ? Infinity : nums1[partitionX];
    const minRightY = partitionY >= yLen ? Infinity : nums2[partitionY];

    if (maxLeftX <= minRightY && maxLeftY <= minRightX) {
      if ((xLen + yLen) % 2 === 0) {
        return (
          (
            Math.max(maxLeftX, maxLeftY)
            + Math.min(minRightX, minRightY)
          ) / 2
        ).toFixed(1);
      }

      return Math.max(maxLeftX, maxLeftY).toFixed(1);
    } else if (maxLeftX > minRightY) {
      high = partitionX - 1;
    } else {
      low = partitionX + 1;
    }
  }
};

console.log(findMedianSortedArrays([1, 3], [2]));