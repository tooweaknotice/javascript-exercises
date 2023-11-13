const palindromes = function (string) {
  const arrString = [...string];
  const filteredString = arrString.filter(isAlphanumberic);
  const cleanString = filteredString.join().toLowerCase();
  const reverseString = filteredString.reverse().join().toLowerCase();
  return (cleanString === reverseString);
};

function isAlphanumberic(char){
  return ((char >= `A` && char <= `Z`) || 
  (char >= `a` && char <= `z`) ||
  (char >= `0` && char <= `9`));
}

// Do not edit below this line
module.exports = palindromes;
