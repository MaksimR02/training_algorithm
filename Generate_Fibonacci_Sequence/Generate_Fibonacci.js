//https://leetcode.com/problems/generate-fibonacci-sequence/description/

var fibGenerator = function* () {
    let a = 0;
    let b = 1;
    while (true) {
        yield a;
        [a, b] = [b, a + b];
    }
};