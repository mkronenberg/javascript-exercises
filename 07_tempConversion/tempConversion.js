const convertToCelsius = function(fahrenheit) {
  
  const celsius = ((fahrenheit - 32) * (5 / 9));

  return Number.isInteger(celsius) ? celsius : Number.parseFloat(celsius.toFixed(1));
};

const convertToFahrenheit = function(celsius) {

  const fahrenheit = (celsius * (9 / 5) + 32);

  return Number.isInteger(fahrenheit) ? fahrenheit : Number.parseFloat(fahrenheit.toFixed(1));
};

convertToCelsius(100);

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
