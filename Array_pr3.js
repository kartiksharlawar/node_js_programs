/*
Program 3:
Problem Statement: Write a function shiftValue that takes an array as input, removes the first value from the 
array, and returns the removed value.
Example: shiftValue([1, 2, 3, 4]) should return 1.


*/

console.log("***Array_pr3.js***")

function  shiftValue(num){
     return num.shift([])
}
console.log(shiftValue([1, 2, 3, 4]))


let num = [1,2,3,4]
console.log(num)
num.shift()
console.log(num)