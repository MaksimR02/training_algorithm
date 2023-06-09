//https://leetcode.com/problems/allow-one-function-call/description/

var once = function (fn) {
    let call = 0;

    return function (...args) {
        call += 1;
        if (call === 1) {
            return fn(...args);
        }
        return undefined;
    }
};