const sumAll = function(firstValue, lastValue) {
 
    let sumArray = []

       for (i = firstValue; i <= lastValue; i++) {
        
       sumArray.push(i);

       }

    const initialValue = 0;
    
      const sumOfArray = sumArray.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue)

        return sumOfArray

};

sumAll(1, 4)

// Do not edit below this line
module.exports = sumAll;
