const caesar = function (str, shft) {
  let newStr = "";
  correctedShift = shft < 0 ? 26 + (shft % 26) : shft % 26;

  for (let i = 0; i < str.length; i++) {
    chr = str.slice(i, i + 1);
    if (/[A-Z]/.test(chr)) {
      newChrCode = ((chr.charCodeAt(0) - 65 + correctedShift) % 26) + 65;
      newStr = newStr + String.fromCharCode(newChrCode);
    } else if (/[a-z]/.test(chr)) {
      newChrCode = ((chr.charCodeAt(0) - 97 + correctedShift) % 26) + 97;
      newStr = newStr + String.fromCharCode(newChrCode);
    } else {
      newStr = newStr + chr;
    }
  }

  return newStr;
};

// Do not edit below this line
module.exports = caesar;
