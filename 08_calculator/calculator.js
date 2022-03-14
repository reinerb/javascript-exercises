const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  let total = 0;

  for (let i = 0; i < arr.length; i++) {
    total = total + arr[i];
  }

  return total;
};

const multiply = function (arr) {
  if (arr.length === 0) {
    return 0;
  }

  let product = 1;

  for (let i = 0; i < arr.length; i++) {
    product = product * arr[i];
  }

  return product;
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (n) {
  let nFactorial = 1;
  for (let i = 2; i <= n; i++) {
    nFactorial *= i;
  }

  return nFactorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
