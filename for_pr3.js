/*Problem 3:
Problem Statement: Write a function factorial that takes a number as input and returns the 
factorial of that number using a loop.
Example: factorial(5) should return 120.

*/
var readlineSync = require('readline-sync');
function factorial(n) {
   if (n === 0 || n === 1) {
       return 1;
   }
   let result = 1;
   for (let i = 2; i <= n; i++) {
       result *= i;
   }
   
   return result;

}
console.log(factorial(readlineSync.questionInt("Enter number:")))
  

