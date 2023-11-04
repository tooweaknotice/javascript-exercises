const convertToCelsius = function(temp) {
  let cTemp = ((temp - 32) * 5/9);
  if (cTemp % 1 != 0){
    return +cTemp.toFixed(1);
  }
  return cTemp;
};

const convertToFahrenheit = function(temp) {
  let fTemp = ((temp * 9/5) + 32);
  if (fTemp % 1 != 0){
    return +fTemp.toFixed(1);
  }
  return fTemp;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
