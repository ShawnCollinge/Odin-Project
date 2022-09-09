const add = function (...values) {
  let result = 0;
  values.forEach((value) => result += value);
  return result;
};

const subtract = (a, b) => a - b;

const sum = function (numbers) {
  let result = 0;
  numbers.forEach(value => result += value);
  return result;
};

const multiply = function (values) {
  if (values.length === 0) {
    return 0;
  } else {
    let result = 1;
    values.forEach(value => result *= value);
    return result;
  }
};

const power = function (a, b) {
    let result = a;
    for (let i = 1; i < b; i++) {
      result *= a;
    }
    return result;
};

const factorial = function (a) {
  let result = 1;
  for (let i = a; i > 0; i--) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
