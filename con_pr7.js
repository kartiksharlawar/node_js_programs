/*Problem 7 :
Problem Statement: Write a function checkVowelConsonant that takes a character as input and 
prints "Vowel" if the character is a vowel (a, e, i, o, u) and "Consonant" otherwise.
Example: checkVowelConsonant('a') should print "Vowel".

.
*/

function checkVowelConsonant(char){
   
    if(char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u' ){
        return 'character is a vowel';
    }
    return 'constant';
}
console.log(checkVowelConsonant('z'))

