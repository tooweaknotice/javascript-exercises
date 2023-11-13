const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((sum, adder) => sum + adder, 0);
};

const multiply = function(arr) {
  return arr.reduce((product, multiplicant) => product * multiplicant, 1);
};

const power = function(a, b) {
  let out = 1;
	for (let i = 0; i < b; i++) {
    out *= a;
  }
  return out;
};

const factorial = function(a) {
	let out = 1;
  for (let i = 1; i <= a; i++) {
    out = i * out;
  }
  return out;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
