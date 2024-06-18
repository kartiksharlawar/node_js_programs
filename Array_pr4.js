/*
Program 4:
Problem Statement: Write a function unshiftValue that takes an array and a value as input, adds the value 
to the beginning of the array, and returns the new length of the array.
Example: unshiftValue([1, 2, 3], 0) should return 4.


*/

console.log("***Array_pr4.js***")

function  unshiftValue(num){
     return num.unshift([])
}
console.log(unshiftValue([1, 2, 3], 0))


let num = [1,2,3]
console.log(num)
num.unshift(0)
console.log(num)