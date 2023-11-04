const removeFromArray = function(array, ...args) {
  for (let i = 0; i < array.length; i++) {
    let match = false;
    for (let j in args) {
      if (array[i] === args[j]) {
        match = true;
        break;
      }
    }
    if (match) {
      array.splice(i, 1);
      i--;
      continue;
    }
  }
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
