/*Problem 12 :
Problem Statement: Write a function containsSubstring that takes two strings as input and prints 
"Contains substring" if the second string is a substring of the first, and "Does not contain substring" otherwise.
Example: containsSubstring("Hello world", "world") should print "Contains substring".
.
*/

function containsSubstring(str1, str2) {
    if (str1.includes(str2)) {
        return "Contains substring";
    } else {
        return "Does not contain substring";
    }
}
console.log(containsSubstring("Hello world", "world"))