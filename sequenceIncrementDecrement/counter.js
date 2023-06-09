//https://leetcode.com/problems/counter-ii/description/

var createCounter = function (init) {
    let sequence = init;
    return {
        increment: function () {
            sequence++;
            return sequence;
        },
        decrement: function () {
            sequence--;
            return sequence;
        },
        reset: function () {
            sequence = init;
            return sequence;
        }
    }

};