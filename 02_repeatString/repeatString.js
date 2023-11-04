const repeatString = function(string, num) {
  let outString = ''
  for (let i = 0; i < num; i++) {
    outString = outString + string;
  }
  return outString;
};

// Do not edit below this line
module.exports = repeatString;
