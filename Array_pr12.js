/*
Program 12:
Problem Statement: Write a function mapArray that takes an array and a callback function as input, 
and returns a new array with the results of calling the callback function on each element.
Example: mapArray([1, 2, 3, 4], x => x * 2) should return [2, 4, 6, 8].

*/

console.log("***Array_pr12.js***")

function  mapArray(num){
     return num.map(x => x * 2);

}
console.log(mapArray([1, 2, 3, 4], x => x * 2))

/*let num1 = [1,2,3,4];

console.log(num1)
result = num1.filter(x => x > 2)
console.log(result);
*/