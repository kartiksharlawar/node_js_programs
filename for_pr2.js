/*Problem 2:
Problem Statement: Write a function sumOfNaturalNumbers that takes a number n as input and returns the 
sum of the first n natural numbers.
Example: sumOfNaturalNumbers(5) should return 15.

*/
var readlineSync = require('readline-sync');
function sumOfNaturalNumbers(Num) {
   let sum = 0;
   for(let i=1 ; i<=Num ; i++){
    sum += i;
    
   }
   return sum;
}
console.log(sumOfNaturalNumbers(readlineSync.questionInt("Enter number:")))
  

