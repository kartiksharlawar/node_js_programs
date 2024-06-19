/*Problem 8 :
Problem Statement: Write a function categorizeAge that takes an age as input and prints "Child" 
if age is 0-12, "Teenager" if age is 13-19, "Adult" if age is 20-64, and "Senior" if age is 65 or above.
Example: categorizeAge(25) should print "Adult".

.
*/
var readlineSync = require('readline-sync');
function categorizeAge(age){
   
    if( age<=12 && age>=0 ){
        return 'Child';
    } else if( age<=19 && age>=13 ){
        return 'Teenager';
    } else if( age<=64 && age>=20 ){
        return 'Adult';
    } else if( age>67){
        return 'Senior';
}
}
console.log(categorizeAge(readlineSync.questionInt("Enter number:")))

