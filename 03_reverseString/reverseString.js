const reverseString = function(string) {
  let reverseString = ``;
  let arString = string.split(``);
  for (let i = string.length - 1; i >= 0; i--) {
    reverseString = reverseString + arString[i];
  }
  return reverseString;
};

// Do not edit below this line
module.exports = reverseString;
