const convertToCelsius = function(temp) {

  let convertedTemp = (temp - 32) / 1.8;
    
  
  return Number(convertedTemp.toFixed(1));

};

const convertToFahrenheit = function(temp) {

  let convertedTemp = temp * 1.8 + 32;

  return Number(convertedTemp.toFixed(1))

};


convertToCelsius(32)
convertToCelsius(100)
convertToCelsius(-100)
convertToFahrenheit(0)

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
