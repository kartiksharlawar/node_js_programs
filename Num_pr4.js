/*Program 4 :
Problem Statement: Write a function parseInteger that takes a string as input and returns it as an integer. 
If the string cannot be converted, return NaN.
Example: parseInteger("123.45") should return 123.*/

console.log("***Num_pr4.js***")

function parseInteger(str){
     return parseInt(str);
}
console.log(parseInteger("9021.55"))