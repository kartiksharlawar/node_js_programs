/*
Program 14:
Problem Statement: Write a function sortArray that takes an array as input and returns a new array with the 
elements sorted in ascending order.
Example: sortArray([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]) should return [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9].

*/

console.log("***Array_pr14.js***")

function  sortArray(num){
     return num.sort();

}
console.log(sortArray([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]))

let num1 = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];

console.log(num1)
result = num1.sort()
console.log(result);
