const removeFromArray = function(arr, ...args) {
    let res = [];
    arr.forEach(element => {
       if (args.indexOf(element) === -1) {
            res.push(element)
       }
    });
    return res;
}; 

// Do not edit below this line
module.exports = removeFromArray;
