/*Program 5 :
Problem Statement: Write a function isFiniteNumber that takes a value as input and returns true if the value is a 
finite number, and false otherwise.
Example: isFiniteNumber(123) should return true, isFiniteNumber(Infinity) should return false.*/

console.log("***Num_pr5.js***")

function isFiniteNumber(value){
     return isFinite(value);

}
console.log(isFiniteNumber('12'));