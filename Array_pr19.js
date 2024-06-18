/*
Program 19:
Problem Statement: Write a function removeDuplicates that takes an array as input and returns a 
new array with duplicate elements removed.
Example: removeDuplicates([1, 2, 2, 3, 4, 4, 5]) should return [1, 2, 3, 4, 5].

*/

console.log("***Array_pr19.js***")

function  removeDuplicates(num){
     return num.remove(1);

}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]))

let num1 = [1, [2, [3, [4]], 5]];

console.log(num1)
result = num1.flat(x => x > 3);
console.log(result);


]]