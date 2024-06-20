/*Problem 13 :
Problem Statement: Write a function calculateBill that takes the number of units consumed as input and 
calculates the electricity bill based on the following criteria:
For the first 50 units: $0.50 per unit
For the next 100 units: $0.75 per unit
For the next 100 units: $1.20 per unit
For units above 250: $1.50 per unit
Print the total bill amount.
Example: calculateBill(275) should print the calculated bill amount.
.
*/
var readlineSync = require('readline-sync');
function calculateBill(unit){
    let bill = 0 ;
   
    if (unit <= 50){        //For the first 50 units: $0.50 per unit
        return bill = unit*0.50;
    } else if (unit <= 150){    //For the next 100 units: $0.75 per unit
        return bill = 50*0.50+(unit-50)*0.75;
    } else if (unit <= 250){        //For the next 100 units: $1.20 per unit
        return bill = 50*0.50 + 100*0.75 + (unit-150)*1.20;
    } else {                //For units above 250: $1.50 per unit
        return bill = 50*0.50 + 100*0.75 + 100*1.20 + (unit-250)*1.50;
    }////Print the total bill amount.
     
}

console.log(calculateBill(readlineSync.questionInt("Enter number:")))

