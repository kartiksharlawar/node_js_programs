/*Problem 19 :
Problem Statement: Write a function determineDay that takes a number (0-6) as input and prints the c
orresponding day of the week (e.g., 0 for Sunday, 1 for Monday, etc.).
Example: determineDay(3) should print "Wednesday".


.
*/
var readlineSync = require('readline-sync');
function determineDay(Num) {
    
    switch (Num) { 
        case 0:
            console.log("Monday");
            break;
        case 1:   
            console.log("Monday");
            break;
        case 2:        
            console.log( "Wednesday");
            break;
        case 3:        
            console.log("Thursday");
        break;
        case 4:        
            console.log("Friday");
        break;
        case 5:        
            console.log("Saturday");
        break;
        case 6:       
            console.log("Sunday");
        break;
        default:
            console.log("invalide")
}
}

console.log(determineDay(readlineSync.questionInt("Enter number:")));   

