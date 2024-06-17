
/*Program 8 :
Problem Statement: Write a function floorNumber that takes a floating-point number as input and returns 
it rounded down to the nearest integer.
Example: floorNumber(123.45) should return 123.*/
var readlineSync = require('readline-sync');
console.log("***Num_pr8.js***")

function floorNumber(value){
     //return Math.floor(value)
     return parseInt(value)
}
console.log(floorNumber(readlineSync.questionInt("Enter the Value :")));
