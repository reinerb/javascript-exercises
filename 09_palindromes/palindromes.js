const alphabet = "abcdefghijklmnopqrstuvwxyz";

const alphaOnly = function (s) {
  let newString = "";

  for (let i = 0; i < s.length; i++) {
    if (alphabet.indexOf(s.slice(i, i + 1).toLowerCase()) !== -1) {
      newString = newString + s.slice(i, i + 1);
    }
  }

  return newString;
};

const reverse = function (s) {
  let reversed = "";

  for (let i = 0; i < s.length; i++) {
    reversed = s.slice(i, i + 1) + reversed;
  }

  return reversed;
};

const palindromes = function (s) {
  let lettersOnly = alphaOnly(s).toLowerCase();
  return lettersOnly === reverse(lettersOnly);
};

// Do not edit below this line
module.exports = palindromes;
