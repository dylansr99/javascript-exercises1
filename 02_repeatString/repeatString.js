const repeatString = function(string, num){
    let repeatedString = ''
    if (num < 0) {repeatedString = 'ERROR'}
    while (num > 0) {
        repeatedString += string
        num--
    }

    return repeatedString
}
const number = Math.floor(Math.random() * 1000)

repeatString('hi', 3)
repeatString('hello', 10)
repeatString('h1', 1)
repeatString('hi', 0)
repeatString('goodbye', -1)
repeatString('odin', number)
repeatString('', 10)
// Do not edit below this line
module.exports = repeatString;

