/*Problem 15 :
Problem Statement: Write a function simpleCalculator that takes two numbers and an operator (+, -, *, /) 
as input and prints the result of the operation. Handle division by zero appropriately.
Example: simpleCalculator(10, 2, '/') should print "5".

.
*/

function simpleCalculator(num1, num2, operator) {
    let result;


    switch (operator) { // addition 
        case "+":
            result = num1 + num2;
            break;
        case "-":     // substraction 
            result = num1 - num2;
            break;
        case "*":        //multiplication
            result = num1 * num2;
            break;
        case "/":        // division
            if (num2 !== 0) {
                result = num1 / num2;
            }        
    return console.log(result);
}
}
console.log(simpleCalculator(10, 2, '/'));   

