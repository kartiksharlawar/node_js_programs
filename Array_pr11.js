/*

Program 11:
Problem Statement: Write a function filterArray that takes an array and a callback function as input, 
and returns a new array with the elements that pass the test implemented by the callback function.
Example: filterArray([1, 2, 3, 4], x => x > 2) should return [3, 4].

*/

console.log("***Array_pr11.js***")

function  filterArray(num){
     return num.filter(x => x > 2);

}
console.log(filterArray([1, 2, 3, 4], x => x > 2))

let num1 = [1,2,3,4];

console.log(num1)
result = num1.filter(x => x > 2)
console.log(result);
