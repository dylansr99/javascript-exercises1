const removeFromArray = function(array, value) {
         let filteredArray = array.filter((arr) => arr != value)
         return filteredArray
     };                 

removeFromArray([1, 2, 3, 4], 3);
// Do not edit below this line
module.exports = removeFromArray;
