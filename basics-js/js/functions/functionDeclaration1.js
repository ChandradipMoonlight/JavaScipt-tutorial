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

// function findIndexOfElementInArray(array, target) {
//     let index = -1;
//     for (let elements in array) {
//         if (array[elements] === target) {
//             return index = elements;

//         }
//     }
//     return index;
// }

function findIndexOfElementInArray(arr, target) {
    for(index in arr) {
        if(arr[index]==target) {
            return index;
        }
    }
    return -1;
}
const arr = [1, 2, 4];
console.log(findIndexOfElementInArray(arr, 6));  // -1
console.log(findIndexOfElementInArray(arr, 2)); // 1

