/*
Program 17 :
Problem Statement: Write a function isInteger that takes a number as input and returns true if the number is an 
integer, and false otherwise.
Example: isInteger(123) should return true, isInteger(123.45) should return false.


*/



console.log("***Num_pr17.js***")

function  isInteger(num){
     return Number.isInteger(num)
}
console.log(isInteger(123.5))

