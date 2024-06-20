/*Problem 18 :
Problem Statement: Write a function convertTemperature that takes a temperature and a unit 
("C" for Celsius or "F" for Fahrenheit) as input and prints the converted temperature in the other unit.
Example: convertTemperature(32, 'F') should print "0 C".

.
*/
function convertTemperature(temp, unit) {
    if (unit === 'C') {
        let fahrenheit = (temp * 9/5) + 32; // Convert Celsius to Fahrenheit
        console.log(`${temp} C = ${fahrenheit.toFixed(1)} F`);
    } else if (unit === 'F') {
        let celsius = (temp - 32) * 5/9;  // Convert Fahrenheit to Celsius
        console.log(`${temp} F = ${celsius.toFixed(1)} C`);
    } else{
        return 'sorry';
    }
}

// Example usage:
console.log(convertTemperature(32, 'F')); 
