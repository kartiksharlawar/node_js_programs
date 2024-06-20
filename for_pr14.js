/*Problem 14:
Problem Statement: Write a function multiplicationTable that takes a number n as input and prints the 
multiplication table for numbers from 1 to n.
Example: multiplicationTable(3) should print:
1 x 1 = 1
1 x 2 = 2
1 x 3 = 3
2 x 1 = 2
2 x 2 = 4
2 x 3 = 6
3 x 1 = 3
3 x 2 = 6
3 x 3 = 9
Find Second Largest Number in an Array:

*/

/*function multiplicationTable(n) {
    for (i=1; i<=n; i++){
        for(j=1; j<=n; j++){
           console.log('${i}*${j} = ${i*j}')
        }
        }
    }
    */

console.log(multiplicationTable(3))

function multiplicationTable(n) {
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            console.log(`${i} x ${j} = ${i * j}`);
        }
    }
}

// Example usage:
console.log("Multiplication Table for n = 3:");
multiplicationTable(5);
