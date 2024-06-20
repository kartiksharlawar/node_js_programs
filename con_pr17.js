/*Problem 16 :
Problem Statement: Write a function isPalindrome that takes a string as input and prints "Palindrome" 
if the string reads the same backward as forward, and "Not a palindrome" otherwise.
Example: isPalindrome("racecar") should print "Palindrome".

.
*/

function isPalindrome(Str) {
    let Value =Str.split('');
    console.log(Value);
    let reverseValue=Value.reverse();
    console.log(Value.reverse());
    let reverseStr =  reverseValue.join('')
    console.log(reverseValue.join(''))
    if (Str == reverseStr){
        return "Palindrome";
    } else {
        return "Not a palindrome"
    }
}

console.log(isPalindrome("racecar"));   

