/*

Program 9:
Problem Statement: Write a function spliceArray that takes an array, a start index, a delete count, 
and optionally additional elements as input. The function should remove the specified number of elements 
starting from the start index, insert the additional elements at the start index, and return the array of 
removed elements.
Example: spliceArray([1, 2, 3, 4], 1, 2, 'a', 'b') should return [2, 3] and the original array 
should become [1, 'a', 'b', 4].
*/

console.log("***Array_pr9.js***")

function  spliceArray(num){
     return num.splice(1,2,'a','b')
}
console.log(spliceArray([1, 2, 3, 4], 1, 2, 'a', 'b'))

let num1 = [1,2,3,4];

console.log(num1)
result = num1.splice(1,2,'a','b');
console.log(result);
