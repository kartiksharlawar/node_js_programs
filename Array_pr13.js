/*
Program 13:
Problem Statement: Write a function reduceArray that takes an array, a callback function, 
and an initial value as input, and returns a single value obtained by applying the 
callback function on each element, starting with the initial value.
Example: reduceArray([1, 2, 3, 4], (acc, x) => acc + x, 0) should return 10.

*/

console.log("***Array_pr13.js***")

function  reduceArray(num){
     return num.reduce((acc, x) => acc + x, 0);

}
console.log(reduceArray([1, 2, 3, 4], (acc, x) => acc + x, 0))

let num1 = [1,2,3,4];

console.log(num1)
result = num1.reduce((acc, x) => acc + x,0)
console.log(result);
