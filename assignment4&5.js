/*Question 4 :
*Problem Statement*: Write a function padStringStart that takes a string, a target length, and a pad string as input, and returns the original string padded at the beginning with the pad string until it reaches the target length.
*Example*: padStringStart("123", 5, "0") should return "00123".
*/
//padstart
let str1 = '9021';

str1  =  str1.padStart(12, 0);


console.log(str1)
// padend
let str2 = "9021";
str2 = str2.padEnd(12,0);
console.log(str2)

let str3 = "9021";
str3 = str3.padEnd(12,3);
console.log(str3)