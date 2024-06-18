/*

Program 7:
Problem Statement: Write a function concatArrays that takes two arrays as input and returns a new array with 
the elements of both arrays concatenated.
Example: concatArrays([1, 2], [3, 4]) should return [1, 2, 3, 4].



*/

console.log("***Array_pr7.js***")

function  concatArrays(num){
     return num.concat([3,4])
}
console.log(concatArrays([1, 2], [3, 4]))


let num1 = [1,2];
let num2 = [3,4];

console.log(num1,num2)
result =num1.concat(num2);
console.log(result);