const removeFromArray = function () {
  let currentArray = Array.from(arguments[0]);
  let newArray = Array();
  let valuesToRemove = Array.from(arguments).slice(1);

  for (let i = 0; i < currentArray.length; i++) {
    if (valuesToRemove.indexOf(currentArray[i]) === -1) {
      newArray.push(currentArray[i]);
    }
  }

  return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
