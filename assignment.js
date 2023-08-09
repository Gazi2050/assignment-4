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
console.log(result);

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

// problem-3
function sortMaker(arr) {
    if (arr.length !== 2) {
        return "Please input less than three elements";
    }
    else if (arr[0] < 0 || arr[1] < 0) {
        return "Invalid input. Please input positive number";
    }
    else if (typeof arr[0] != "number" || typeof arr[1] != "number") {
        return "Invalid input. Please input number";
    }
    else if (arr[0] === arr[1]) {
        return "equal";
    }
    else if (arr[1] > arr[0]) {
        return [arr[1], arr[0]]
    }
    else if (arr[0] > arr[1]) {
        return [arr[0], arr[1]]
    }

    return arr;
}
const sort = sortMaker([5, 10]);
console.log(sort);

// problem-4
function findAddress(obj) {
    const address = obj.address || {};
    const street = address.street || '__';
    const house = address.house || '__';
    const society = address.society || '__';
    return `${street}, ${house}, ${society}`;
}
const person = {
    address: {
        street: '10',
        house: '15A',
        society: 'Earth perfect',
    }
};
const find = findAddress(person);
console.log(find);

// problem-5
function canPay(changeArray, totalDue) {
    if (changeArray.length === 0) {
        return "Please input number";
    }
    let totalNotes = 0;
    for (let i = 0; i < changeArray.length; i++) {
        totalNotes += changeArray[i];
        if (totalNotes >= totalDue) {
            return true;
        }
    }
    return false;
}
const change = [2, 3, 6];
const chipsPrice = 10;
const pay = canPay(change, chipsPrice);
console.log(pay);

