function isNumber(value) {
    // Check if the value is of type 'number' and is not NaN
    return typeof value === 'number' && !isNaN(value);
}console.log(isNumber("kkk"));