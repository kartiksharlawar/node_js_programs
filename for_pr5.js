/*Problem 5:
Problem Statement: Write a function reverseString that takes a string as input and returns 
the reversed string using a loop.
Example: reverseString("hello") should return "olleh".


*/
var readlineSync = require('readline-sync');
function reverseString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i]
    }
    return reversed
}


console.log(reverseString("hello"))
  

