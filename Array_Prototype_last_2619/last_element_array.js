// https://leetcode.com/problems/array-prototype-last/

Array.prototype.last = function () {
  return this.length ? this.at(-1) : -1;
};
