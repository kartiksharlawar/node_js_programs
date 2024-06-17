/*Program 1:
Problem Statement: Write a function convertToNumber that takes a string as input and returns it as a number. 
If the string cannot be converted, return NaN.
Example: convertToNumber("123") should return 123.*/

console.log("***Num_pr1.js***")
function convertToNumber(str) {
    
    console.log(str)
    // Convert the string to number
    let num = Number(str);

    // check num is NaN or not
    if (isNaN(num)) {
        return NaN;
    }
    
    
    return num;
}
console.log(convertToNumber("9021"))



/*let str = "123";
console.log(str)
let num = Number(str)

if(isNaN(num)){
    return NaN;

}
return num;*/



