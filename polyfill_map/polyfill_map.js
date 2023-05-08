//https://leetcode.com/problems/apply-transform-over-each-element-in-array/description/
var map = function (arr, fn) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(fn(arr[i], i));
    }
    return result;
};