const sumAll = function(aNum, bNum) {
  args = [...arguments]
  const isNegative = (num) => num < 0;
  const isNonNumber = (num) => typeof num !== 'number';
  if (args.some(isNegative) || args.some(isNonNumber)) {
    return `ERROR`;
  }
  let sum = 0;
  let sumRange = Math.abs(aNum - bNum);
for (let i = 0; i <= sumRange; i++) {
  if (aNum < bNum) {
    sum += (aNum + i);
  }
  else {
    sum += (bNum + i);
  }
}
return sum;
};

// Do not edit below this line
module.exports = sumAll;
