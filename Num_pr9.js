/*Program 9 :
Problem Statement: Write a function generateRandomNumber that returns
a random number between 0 (inclusive) and 1 (exclusive).
Example: generateRandomNumber() might return 0.123456789.*/


console.log("***Num_pr9.js***")

function generateRandomNumber(num){
     return Math.random(num)
}
console.log(generateRandomNumber())