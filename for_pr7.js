/*Problem 7:
Problem Statement: Write a function findLargestNumber that takes an array of numbers as 
input and returns the largest number in the array using a loop.
Example: findLargestNumber([1, 2, 3, 4, 5]) should return 5.

*/

function findLargestNumber(arr) {
    if (arr.length === 0) {
        return null;
    }
    let largest = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    return largest; 
}

console.log(findLargestNumber([1, 2, 3, 4, 5]))
  

