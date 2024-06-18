/*

Program 5:
Problem Statement: Write a function joinArray that takes an array and a delimiter as input, and returns 
a string with the array elements joined by the delimiter.
Example: joinArray([1, 2, 3], "-") should return "1-2-3".



*/

console.log("***Array_pr5.js***")

function  joinArray(num){
     return num.join(["-"])
}
console.log(joinArray([1, 2, 3], "-"))


let num = [1,2,3]
console.log(num)
num.join(["-"])
console.log(num.join(["-"]))