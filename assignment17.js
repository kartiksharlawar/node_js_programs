/*Question 17 :
*Problem Statement*: Write a function matchPatternGlobally that takes a string and a regular expression as input, and returns an array of all matches of the regular expression in the string, matched globally and case-insensitively.
*Example*: matchPatternGlobally("Hello, World! HELLO, world!", /hello/gi) should return ["Hello", "HELLO"].*/

function matchPatternGlobally(statement, regex)
{
    let arrList = statement.split(/[,;!]/);

    let result = [];

    arrList.forEach(element => {
        let status = element.search(regex);

        // Check with regex
        if(status > -1)
            result.push(element)
    });

    return result;
}

result = matchPatternGlobally("Hello, World! HELLO, world!", /hello/gi)

// Final Output
console.log("result :",result)