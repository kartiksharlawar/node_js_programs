/*Problem 8:
Problem Statement: Write a function countVowels that takes a string as input and returns the number of vowels in the string using a loop.
Example: countVowels("hello") should return 2.

*/

function countVowels(str) {
    str = str.toLowerCase();
    let count = 0;
    let vowels = ['a','e','i','o','u'];

    for ( let char of str ){
        if (vowels.includes(char)){
            count++
        }
    }
    return count;
}

console.log(countVowels("hello"))
  

