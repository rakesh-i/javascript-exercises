const add = function(a, b) {
	return a+b;
};

const subtract = function(a, b) {
	return a-b;
};

const sum = function(a) {
	let sum = 0;
  for(let i=0; i<a.length; i++){
    sum+=a[i];
  }
  return sum;
};

const multiply = function(a) {
  let sum = 1;
  for(let i=0; i<a.length; i++){
    sum*=a[i];
  }
  return sum;

};

const power = function(a, b) {
	let x = a;
  let sum=1;
  for(let i=0; i<b; i++){
    sum*=x;
  }
  return sum;
};

const factorial = function(a) {
  let x = a;
  let sum = 1;
  for(let i=x; i>0; i--){
    sum*=i;
  }
  return sum;
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
