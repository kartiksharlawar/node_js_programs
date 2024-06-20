/*Problem 11 :
Problem Statement: Write a function checkTriangleType that takes three side lengths as input and prints 
"Equilateral" if all sides are equal, "Isosceles" if two sides are equal, 
and "Scalene" if all sides are different.
Example: checkTriangleType(3, 3, 3) should print "Equilateral"..
.
*/
/*var readlineSync = require('readline-sync');
let side1 = readlineSync.questionInt("Enter side1:");
let side2 = readlineSync.questionInt("Enter side2:");
let side3 = readlineSync.questionInt("Enter side3:");

if ( side1==side2 && side2==side3 ){
    return "Equilateral";
} else if ( side1==side2||side2==side3||side3==side1 ){
    return "Isosceles";
}
return "Scalene";   */

function checkTriangleType(side1,side2,side3){
    if ( side1==side2 && side2==side3 ){
        return "Equilateral";
    } else if ( side1==side2||side2==side3||side3==side1 ){
        return "Isosceles";
    }
    return "Scalene";

}
console.log(checkTriangleType(3, 3, 3))
