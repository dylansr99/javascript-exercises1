const sumAll = function(firstValue, lastValue) {

if (Number.isInteger(firstValue) == false) {return 'ERROR'}  
else if (Number.isInteger(lastValue) == false) {return 'ERROR'}

if (firstValue < 0) {return 'ERROR'}
else if (lastValue < 0) {return 'ERROR'}

if (isNaN(firstValue)) {return 'ERROR'}
else if (isNaN(lastValue)) {return 'ERROR'}

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
sumAll(-10, 4)
sumAll(2.5, 4)

// Do not edit below this line
module.exports = sumAll;
