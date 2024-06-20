/*Problem 9:
Problem Statement: Write a function fibonacci that takes a number n as input and prints the first n terms of the Fibonacci sequence.
Example: fibonacci(5) should print: 0 1 1 2 3.

*/

function fibonacci(n) {
    let fibSeq = []; // arr initialize to stroe fibseq
    if (n >= 1) {
        fibSeq.push(0);
    }
    if (n >= 2) {
        fibSeq.push(1); 
    }
    for (let i = 2; i < n; i++) {
        fibSeq.push(fibSeq[i-1] + fibSeq[i-2]);
    }
    console.log(fibSeq.join(' '));
}


console.log(fibonacci(5)); 
  

