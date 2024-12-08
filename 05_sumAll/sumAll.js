const sumAll = function(firstValue, lastValue) {
// loops from lastValue to firstValue, pushing each increment in to sumArray

let sumArray = [];
    
if (firstValue > lastValue) {
  for (i = lastValue; i <= firstValue; i++) {
    sumArray.push(i)
  } }

// loops from firstValue to lastValue, pushing each increment in to sumArray   

  else if (firstValue < lastValue) {
  for (i = firstValue; i <= lastValue; i++) {    
    sumArray.push(i)    
 }
}

          
// accumulator starts at initialValue, current value in sumArray is added to accumulator until lastValue is reached. Returns whole number

    const initialValue = 0;
      const sumOfArray = sumArray.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue)
        return sumOfArray

};

sumAll(1, 4)
sumAll(1, 4000)
sumAll(123, 1)

// Do not edit below this line
module.exports = sumAll;
