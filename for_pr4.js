/*Problem 4:
Problem Statement: Write a function printEvenNumbers that takes a number n as input and 
prints all even numbers from 1 to n.
Example: printEvenNumbers(10) should print: 2 4 6 8 10.

*/
var readlineSync = require('readline-sync');
function printEvenNumbers(n) {
    for (let i = 2; i <= n; i += 2) {
        console.log(i);
    }
}


console.log(printEvenNumbers(readlineSync.questionInt("Enter number:")))
  

