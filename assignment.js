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
