const reverseString = function(string) {
    let res = "";
    for (let i = string.length; i >= 0; i--) {
        res += string.charAt(i);
    }
    return res;
};

// Do not edit below this line
module.exports = reverseString;
