/*Problem 20 :
Problem Statement: Write a function calculateBMI that takes weight (in kilograms) and height (in meters) as input and prints the BMI category based on the calculated BMI: "Underweight" (BMI < 18.5), "Normal weight" (18.5 ≤ BMI < 24.9), "Overweight" (25 ≤ BMI < 29.9), "Obesity" (BMI ≥ 30).
Example: calculateBMI(70, 1.75) should print "Normal weight".


.
*/
function calculateBMI(weight, height) {     // Calculate BMI
    let bmi = weight /(height * height);
    if (bmi < 18.5) {     // Determine BMI category based on calculated BMI
        console.log("Underweight");
    } else if (bmi >= 18.5 && bmi < 25) {
        console.log("Normal weight");
    } else if (bmi >= 25 && bmi < 30) {
        console.log("Overweight");
    } else {
        console.log("Obesity");
    }
}
console.log(calculateBMI(70, 1.75)); 

