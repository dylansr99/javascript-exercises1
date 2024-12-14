const convertToCelsius = function(temp) {

  let convertedTemp = (temp - 32) / 1.8
    
  
  return Number(convertedTemp.toFixed(1))

};

const convertToFahrenheit = function(temp) {

};


convertToCelsius(32)
convertToCelsius(100)
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
