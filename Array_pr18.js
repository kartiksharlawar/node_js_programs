/*
Program 18:
Problem Statement: Write a function flattenArray that takes a nested array as input and returns a 
new array with all sub-array elements concatenated into it recursively up to the specified depth.
Example: flattenArray([1, [2, [3, [4]], 5]]) should return [1, 2, [3, [4]], 5] for depth 1.

*/

console.log("***Array_pr18.js***")

function  flattenArray(num){
     return num.flat(x => x > 3);

}
console.log(flattenArray([1, [2, [3, [4]], 5]]))

let num1 = [1, [2, [3, [4]], 5]];

console.log(num1)
result = num1.flat(x => x > 3);
console.log(result);
