const convertToCelsius = function(temp) {
  const c = 5*(temp-32)/9;
  
  return (c%2==0)?c:Number(c.toFixed(1));
};

const convertToFahrenheit = function(temp) {
  const f = 9/5*temp+32;
  return (f%2==0)?f:Number(f.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
