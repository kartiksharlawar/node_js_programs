/*Problem 11:
Problem Statement: Write a function removeDuplicates that takes an array as input 
and returns a new array with duplicate elements removed using a loop.
Example: removeDuplicates([1, 2, 2, 3, 4, 4, 5]) should return [1, 2, 3, 4, 5].

*/

function removeDuplicates(arr) {
   let Array = [];
   for (i=0; i<arr.length; i++){
    if(!Array.includes(arr[i])){
        Array.push(arr[i]);
    }
   }
   return Array;



}



console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); 
  

