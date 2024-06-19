/*Problem 2 :
Problem Statement: Write a function checkEvenOdd that takes a number as input and prints "Even" 
if the number is even and "Odd" if the number is odd.
Example: checkEvenOdd(7) should print "Odd".*/
var readlineSync = require('readline-sync');
let number = readlineSync.questionInt("Enter number:")

if (number % 2 == 0 ){
    console.log("the number is even");
} else {
    console.log("the number is odd")
}



