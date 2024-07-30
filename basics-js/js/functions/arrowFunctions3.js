const greet = function() {
    console.log("Hello");
}

// const isEven = function(num) {
//     return num % 2 === 0;
// }

const isEven = num => num % 2 === 0;

const getFirstChar = (str) => {
    return str[0];
}


const convertStringIntoArrayOfCharacters = (str) => {
    let arr = [];
    arr = str.split("");
    return arr;
}

console.log("Convert String into Array of Characters");
console.log(convertStringIntoArrayOfCharacters("Chandradip")); // O/p => ['C', 'h', 'a', 'n', 'd', 'r', 'a', 'd', 'i', 'p']

const convertStringIntoArrayOfCharUsingSpreadOperator = str => [...str];
console.log(convertStringIntoArrayOfCharUsingSpreadOperator("Chandradip")); // O/P => ['C', 'h', 'a', 'n', 'd', 'r', 'a', 'd', 'i', 'p']
console.log(isEven(5)); // false