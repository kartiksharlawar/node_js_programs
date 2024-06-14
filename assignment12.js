/*Question 12 :
*Problem Statement*: Write a function trimWhitespace that takes a string as input and returns the string with whitespace removed from both the beginning and end.
*Example*: trimWhitespace(" Hello, World! ") should return "Hello, World!".*/

let text1 = "      Hello World!      ";
console.log(text1)
//trim
let text2 = text1.trim();
console.log(text2)
//trimstart
let text3 = text1.trimStart();
console.log(text3)
//trimend
let text4 = text1.trimEnd();
console.log(text4)