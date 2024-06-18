/*
Program 2:
Problem Statement: Write a function popValue that takes an array as input, removes the last value from the array, 
and returns the removed value.
Example: popValue([1, 2, 3, 4]) should return 4.


*/

console.log("***Array_pr2.js***")

function  popValue(num){
     return num.pop([])
}
console.log(popValue([1, 2, 3, 4]))


let array = [1,2,3,4]
console.log(array)
array.pop(3)
console.log(array)