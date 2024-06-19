/*Problem 1 :
Problem Statement: Write a function checkNumber that takes a number as input and prints "Positive" if the number 
is positive, "Negative" if the number is negative, and "Zero" if the number is zero.
Example: checkNumber(10) should print "Positive".*/
var readlineSync = require('readline-sync');
let number = readlineSync.questionInt("Enter number:")

if (number > 0){
    console.log("number is positive");
} else if (number == 0){
    console.log("number is zero");
} else {
    console.log("number is negative")
}

