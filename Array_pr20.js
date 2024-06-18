/*
Program 20:
Problem Statement: Write a function chunkArray that takes an array and a size as input, and returns 
a new array with the original array split into groups of the given size.
Example: chunkArray([1, 2, 3, 4, 5, 6], 2) should return [[1, 2], [3, 4], [5, 6]].

*/

console.log("***Array_pr20.js***")

function  chunkArray(num){
     return num.chunk(2);

}
console.log(chunkArray([1, 2, 3, 4, 5, 6], 2))

let num1 = [1, [2, [3, [4]], 5]];

console.log(num1)
result = num1.flat(x => x > 3);
console.log(result);
