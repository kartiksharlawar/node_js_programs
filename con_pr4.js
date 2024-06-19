/*Problem 4 :
Problem Statement: Write a function isLeapYear that takes a year as input and prints "Leap Year" if the year is a leap year and "Not a Leap Year" otherwise.
Example: isLeapYear(2020) should print "Leap Year".
*/
var readlineSync = require('readline-sync');
function isLeapYear(year){
    if ( year % 100 === 0 ? year % 400 === 0 : year % 4 === 0 ){
        return "Leap Year"
    } else 
        return "Not Leap Year"
   
}
console.log(isLeapYear(readlineSync.questionInt("Enter number:")) )

