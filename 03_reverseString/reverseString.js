const reverseString = function(string) {
      let stringArray = string.split('')
      let reversedArray = stringArray.toReversed()
      return reversedArray.join('')
};

reverseString('hello')
reverseString('hello there')
reverseString('123! abc! Hello, Odinite.')
reverseString('')
// Do not edit below this line
module.exports = reverseString;
