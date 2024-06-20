/*Problem 10:
Problem Statement: Write a function isPrime that takes a number as input and returns true 
if the number is a prime number, and false otherwise.
Example: isPrime(7) should return true.

*/

function isPrime(n) {
    if (n<2){
        return false;
    }
    for( i=2; i<=Math.sqrt(n); i++){
        if (n%i === 0){
            return false;
        }
    }
    return true;



}



console.log(isPrime(7)); 
  

