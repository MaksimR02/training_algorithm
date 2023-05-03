// https://leetcode.com/problems/find-the-difference-of-two-arrays/description/
var findDifference = function (nums1, nums2) {
    let answer0 = new Set(nums1);
    nums2.forEach(element => {
        answer0.delete(element)
    });
    let answer1 = new Set(nums2);
    nums1.forEach(element=>{
        answer1.delete(element)
    });
    return [[...answer0],[...answer1]];

};
