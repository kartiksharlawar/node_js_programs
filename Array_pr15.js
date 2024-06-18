/*
Program 15:
Problem Statement: Write a function findElement that takes an array and a callback function as input, 
and returns the first element in the array that satisfies the test implemented by the callback function. 
If no such element is found, return undefined.
Example: findElement([1, 2, 3, 4], x => x > 2) should return 3.

*/

console.log("***Array_pr15.js***")

/*function  findElement(num){
     return num.findElement(x => x > 2);

}
console.log(findElement([1, 2, 3, 4], x => x > 2))
*/
let num1 =[1, 2, 3, 4];

console.log(num1)
result = num1.findIndex(x => x > 2);
console.log(result);
