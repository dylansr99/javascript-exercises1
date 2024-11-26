const removeFromArray = function() {
         let filteredArray = arguments[0].filter((arr) => arr != [arguments[1]])
         return filteredArray
     };                 

removeFromArray([1, 2, 3, 4], 3);
// Do not edit below this line
module.exports = removeFromArray;
