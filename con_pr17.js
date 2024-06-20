/*Problem 17 :
Problem Statement: Write a function isArmstrongNumber that takes a number as input and prints "Armstrong number" 
if the sum of its own digits each raised to the power of the number of digits is equal to the number itself, 
and "Not an Armstrong number" otherwise.
Example: isArmstrongNumber(153) should print "Armstrong number".

.
*/
var readlineSync = require('readline-sync');
function isArmstrongNumber(number) {
    let strNumber = number.toString();
    let n = strNumber.length;
    let sum = 0;




    for (let digit of strNumber) {
        sum += Math.pow(parseInt(digit), n);
    }


    if (sum === number) {
        console.log("Armstrong number");
    } else {
        console.log("Not an Armstrong number");
    }
}

console.log(isArmstrongNumber(readlineSync.questionInt("Enter number:")));
