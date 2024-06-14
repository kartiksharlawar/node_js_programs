/*Question 15 :
*Problem Statement*: Write a function testRegex that takes a string and a regular expression as input, and returns true if the string matches the regular expression, and false otherwise.
*Example*: testRegex("Hello, World!", /World/) should return true.*/


function testRegex($statement,$regex){
    console.log($statement.search($regex))
    return true;
}
result = testRegex("hello,world",/kartik/);
console.log("output :",result)