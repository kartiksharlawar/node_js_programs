/*Question 14 :
*Problem Statement*: Write a function endsWithSubstring that takes a main string and a substring as input, and returns true if the main string ends with the substring, and false otherwise.
*Example*: endsWithSubstring("Hello, World!", "World!") should return true.
 */
var readlineSync = require('readline-sync');
let str = "Hello, World!, World!";
console.log(str)
var number = readlineSync.questionInt("Enter a number: ")

let part = str.substring(0, number);
console.log(part)
