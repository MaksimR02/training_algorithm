//https://leetcode.com/problems/array-reduce-transformation/description/

var reduce = function (nums, fn, init) {
    let result = init;

    for (let i = 0; i < nums.length; i++) {
        
        if (nums.length != 0) {
            result = fn(result, nums[i])
        } else return init;
    }
    return result;
};