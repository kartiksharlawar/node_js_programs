/*
Program 17:
Problem Statement: Write a function someElement that takes an array and a callback function as input, 
and returns true if the callback function returns true for at least one element in the array, and false otherwise.
Example: someElement([1, 2, 3, 4], x => x > 3) should return true.

*/

console.log("***Array_pr17.js***")

function  someElement(num){
     return num.some(x => x > 3);

}
console.log(someElement([1, 2, 3, 4], x => x > 3))

let num1 = [1, 2, 3, 4];

console.log(num1)
result = num1.some(x => x > 3);
console.log(result);
