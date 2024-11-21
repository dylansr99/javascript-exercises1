const reverseString = function(string) {
      let stringArray = string.split('')
      let reversedArray = stringArray.toReversed()
      return reversedArray.join('')
};

reverseString('hello')
// Do not edit below this line
module.exports = reverseString;
