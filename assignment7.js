///*Question 7 :
/*Problem Statement*: Write a function includesSubstring that takes two strings as 
input, the main string and a substring, and returns true if the main string includes the substring,
 and false otherwise.
*Example*: includesSubstring("Hello, World!", "World") should return true.*/

let text1 = "hello world!";
console.log(text1)

let text2 = text1.substring(5,13);
console.log(text2)
let text3 = text1.replace("world","earth")
console.log(text3)
if (text1==text2){
    console.log(true)
}
else{
    console.log(false)
}
let length1 = text1.length;
console.log(length1)
