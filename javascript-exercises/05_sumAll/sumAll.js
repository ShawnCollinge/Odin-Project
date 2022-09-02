const sumAll = function(a, b) {
    if (a < 0 || b < 0 || typeof a != 'number' || typeof b != 'number') {
        return 'ERROR'
    }
    let res = 0;
    for (let i = Math.min(a,b); i <= Math.max(a,b); i++) {
        res += i;
    }
    return res;
};

// Do not edit below this line
module.exports = sumAll;
 