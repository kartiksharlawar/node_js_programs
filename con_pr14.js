/*Problem 14 :
Problem Statement: Write a function validateEmail that takes a string as input and prints "Valid email" 
if the string matches a basic email pattern (e.g., contains "@" and "."), and "Invalid email" otherwise.
Example: validateEmail("test@example.com") should print "Valid email".
.
*/

function validateEmail(Email){
    let contains=  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   
    if (contains.test(Email) ){       
        return  "Valid email";
    } else{
        return "Invalid email";
    }
     
}
console.log(validateEmail("test@example.com"))

