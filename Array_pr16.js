


/*
Program 16:
Problem Statement: Write a function everyElement that takes an array and a callback function as input, 
and returns true if the callback function returns true for every element in the array, and false otherwise.
Example: everyElement([1, 2, 3, 4], x => x > 0) should return true.

*/

console.log("***Array_pr16.js***")

function  everyElement(num){
     return num.every(x => x > 0);

}
console.log(everyElement([1, 2, 3, 4], x => x > 0))

let num1 = [1, 2, 3, 4];

console.log(num1)
result = num1.every(x => x > 0);
console.log(result);
