const convertToCelsius = function(temperature) {
  let FahrenheitToCelsius= ((temperature-32)*5/9)
  FahrenheitToCelsius=Math.round(FahrenheitToCelsius*10)/10;
  return FahrenheitToCelsius;
};

const convertToFahrenheit = function(temperatureCelsius) {
let CelsiusToFahrenheit=(temperatureCelsius * 9/5 + 32);
CelsiusToFahrenheit=Math.round(CelsiusToFahrenheit*10)/10;
return CelsiusToFahrenheit;
};


// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
