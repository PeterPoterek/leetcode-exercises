/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  for (let i = nums1.length - 1; i >= m; i--) {
    nums1[i] = nums2[n - 1];
    n--;
  }

  let swapped;

  for (let j = 0; j < nums1.length; j++) {
    swapped = false;
    for (let k = 0; k < nums1.length - j - 1; k++) {
      if (nums1[k] > nums1[k + 1]) {
        [nums1[k], nums1[k + 1]] = [nums1[k + 1], nums1[k]];
        swapped = true;
      }
    }

    if (!swapped) break;
  }

  console.log(nums1);
};

merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3); //[1,2,2,3,5,6]
