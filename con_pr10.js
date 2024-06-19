/*Problem 10 :
Problem Statement: Write a function isCenturyYear that takes a year as input and prints "Century Year" 
if the year is a century year (ends in 00) and "Not a Century Year" otherwise.
Example: isCenturyYear(1900) should print "Century Year".
.
*/
var readlineSync = require('readline-sync');
function isCenturyYear(year){
   
    if (year % 100 === 0){
        return 'Century Year';
    } 
    return 'Not a Century Year' 
}

console.log(isCenturyYear(readlineSync.questionInt("Enter number:")))

