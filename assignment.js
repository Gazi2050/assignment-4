// problem-1
function cubeNumber(number) {
    if (typeof number != 'number') {
        return "Please provide a  number";
    }
    else if (number <= 0) {
        return "Please provide a positive number";
    }
    const cube = number * number * number;
    return cube;
}
const inputNumber = 5;
const result = cubeNumber(inputNumber);
console.log(`The cube of the number ${inputNumber} is:`, result);

// problem-2
function matchFinder(string1, string2) {
    if (typeof string1 != 'string') {
        return "Please provide a  string in string1";
    }
    else if (typeof string2 != 'string') {
        return "Please provide a  string in string2";
    }
    for (let i = 0; i <= string1.length - string2.length; i++) {
        if (string1.slice(i, i + string2.length) === string2) {
            return true;
        }
    }
    return false;
}
const firstString = "John Doe";
const secondString = "ohn";
const result1 = matchFinder(firstString, secondString);
console.log(result1);
