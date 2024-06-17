/*
Program 18 :
Problem Statement: Write a function generateRandomInteger that takes two numbers as input, min and max, and returns a random integer between the two values (inclusive).
Example: generateRandomInteger(1, 10) might return 7.


*/



console.log("***Num_pr18.js***")

function  generateRandomInteger(num){
     return Math.floor(Math.random()*100)
}
console.log(generateRandomInteger(1, 10))

