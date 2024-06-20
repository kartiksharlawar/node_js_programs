/*Problem 13:
Problem Statement: Write a function countOccurrences that takes an array as input and returns an object with the count of each element in the array.
Example: countOccurrences([1, 2, 2, 3, 3, 3]) should return {1: 1, 2: 2, 3: 3}.


*/

function countOccurrences(arr) {
    let countMap = {}; 
    
   
    arr.forEach(element => {
        if (countMap[element]) {
            countMap[element]++; 
        } else {
            countMap[element] = 1; }
    });
    
    return countMap;
}
console.log(countOccurrences([1, 2, 2, 3, 3, 3]))

