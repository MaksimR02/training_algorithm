// https://leetcode.com/problems/chunk-array/description/

/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array[]}
 */
var chunk = function (arr, size) {
  let result = [];
  let tempArr = [];

  for (let i = 0; i < arr.length; i++) {
    tempArr.push(arr[i]);

    if (tempArr.length === size) {
      result.push(tempArr);
      tempArr = [];
    }
  }

  if (tempArr.length > 0) {
    result.push(tempArr);
  }
  return result;
};
