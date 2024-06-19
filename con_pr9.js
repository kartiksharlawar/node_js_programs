/*Problem 9 :
Problem Statement: Write a function checkDivisibility that takes a number as input and 
prints "Divisible by both 5 and 11" if the number is divisible by both, "Divisible by 5" 
if it is only divisible by 5, "Divisible by 11" if it is only divisible by 11, and "Not divisible by 5 or 11" 
otherwise.
Example: checkDivisibility(55) should print "Divisible by both 5 and 11".
.
*/
var readlineSync = require('readline-sync');
function checkDivisibility(num){
   
    if( num % 5 == 0 && num % 11 == 0 ){
        return 'Divisible by both 5 and 11';
    } else if( num % 5 == 0 ){
        return 'Divisible by 5';
    } else if( num % 11 == 0 ){
        return 'Divisible by 11';
    }
    return 'Not divisible by 5 or 11' 
}

console.log(checkDivisibility(readlineSync.questionInt("Enter number:")))

