const removeFromArray = function(array, arg) {
  let outArray = []
  for (let i in array) {
    if (array[i] === arg) {
      continue;
    }
    outArray.push(array[i]);
  }
  return outArray;W
};

// Do not edit below this line
module.exports = removeFromArray;
