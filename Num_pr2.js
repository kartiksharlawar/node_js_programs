/*Problem Statement: Write a function isNumber that takes a value as input and returns true 
if the value is a number, and false otherwise.
Example: isNumber("123") should return false, isNumber(123) should return true.*/
var readlineSync = require('readline-sync');

console.log("***Num_pr2.js***")
function isNumber(value) {
    // Check if the value is of type 'number' and is not NaN
    if (value ==='number'&& !isNaN(value)){
        return true;
    }
    return typeof value === 'number' ;
}console.log(isNumber(readlineSync.questionInt("Enter the Value :")));