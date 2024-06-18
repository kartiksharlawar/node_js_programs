/*

Program 8:
Problem Statement: Write a function sliceArray that takes an array and two indices as input, 
and returns a new array with the elements between the given indices (start index inclusive, end index exclusive).
Example: sliceArray([1, 2, 3, 4, 5], 1, 3) should return [2, 3].




*/

console.log("***Array_pr8.js***")

function  sliceArray(num){
     return num.slice(1,3)
}
console.log(sliceArray([1, 2, 3, 4, 5], 1, 3))

let num1 = [1,2,3,4,5];

console.log(num1)
result = num1.slice(1,3);
console.log(result);