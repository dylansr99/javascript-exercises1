const removeFromArray = function(array, ...args) {

   return array.filter((arr) => arr != [args])
   
};                 

removeFromArray([1, 2, 3, 4], 3);
removeFromArray([1, 2, 3, 4], 3, 2 );
// Do not edit below this line
module.exports = removeFromArray;


