/*Question 16 :
*Problem Statement*: Write a function searchPattern that takes a string and a regular expression as input, and returns the index of the first match of the regular expression in the string. If no match is found, return -1.
*Example*: searchPattern("Hello, World!", /World/) should return 7.*/

function testRegex(statement, regex)
{
    let status = statement.search(regex);

    if(status > 0)
    {
        return true;
    } else {
        return false;
    }
}

result = testRegex("Hello, world!", /world/)

// Final Output
console.log(result)