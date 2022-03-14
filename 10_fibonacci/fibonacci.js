const fibonacciRecursive = function (n, secondLast, last) {
  if (n == 0) {
    return last;
  } else {
    return fibonacciRecursive(n - 1, last, last + secondLast);
  }
};

const fibonacci = function (n) {
  if (n <= 0) {
    return "OOPS";
  } else if (n == 1 || n == 2) {
    return 1;
  } else {
    return fibonacciRecursive(n - 2, 1, 1);
  }
};

// Do not edit below this line
module.exports = fibonacci;
