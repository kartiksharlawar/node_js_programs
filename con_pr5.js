/*Problem 5 :
Problem Statement: Write a function canVote that takes an age as input and prints "Eligible to vote" 
if the age is 18 or above and "Not eligible to vote" otherwise.
Example: canVote(16) should print "Not eligible to vote".
.
*/
var readlineSync = require('readline-sync');
function canVote(age){
    if( age >= 18){
        return "Eligible to vote";
    } 
    return "Not eligible to vote"
}
console.log(canVote(readlineSync.questionInt("Enter number:")) )

