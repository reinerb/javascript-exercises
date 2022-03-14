const reverseString = function (s) {
  let newString = "";

  for (let i = 0; i < s.length; i++) {
    newString = s.slice(i, i + 1) + newString;
  }

  return newString;
};

// Do not edit below this line
module.exports = reverseString;
