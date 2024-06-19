/*Problem 3 :
Problem Statement: Write a function gradeEvaluation that takes a number (0-100) as input and 
prints the grade based on the score: "A" for 90-100, "B" for 80-89, "C" for 70-79, "D" for 60-69, 
and "F" for 0-59.
Example: gradeEvaluation(85) should print "B".*/
var readlineSync = require('readline-sync');
function gradeEvaluation(mark){
    if( mark<=100 && mark >=90){
        return "you got A";
    } else if ( mark <= 89 && mark >=80){
        return "you got B";
    } else if ( mark <= 79 && mark >= 70){
        return "you got C";
    } else if ( mark <=69 && mark >= 60){
        return "you got D"
    } else if ( mark <=59 && mark >= 0){
        return "you got F";
    }
}
console.log(gradeEvaluation(readlineSync.questionInt("Enter number:")) )

