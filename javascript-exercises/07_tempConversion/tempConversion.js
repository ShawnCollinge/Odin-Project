const ftoc = function(val) {
  return Math.round(((val - 32) * 5/ 9) * 10) / 10;
};

const ctof = function(val) {
  return Math.round((val * 9 / 5 + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
