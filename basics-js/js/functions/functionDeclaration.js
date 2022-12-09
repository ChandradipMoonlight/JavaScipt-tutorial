function squareOfNumber(num) {
    return Math.sqrt(num);

}

function sumOfTwoNum(a, b) {
    return a + b;
}

const sum = sumOfTwoNum(12, 13);



function isEven(num) {
    return num % 2 === 0;
}

function getFirstChar(str) {
    return str[0];
}

function findElementInArray(array, target) {
    let index = -1;
    for (let elements in array) {
        if (array[elements] === target) {
            return index = elements;

        }
    }
    return index;
}
const arr = [1, 2, 4];
console.log(findElementInArray(arr, 6));