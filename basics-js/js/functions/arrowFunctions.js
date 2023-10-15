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
    arr = str.slice(3);
    return arr;
}

const convertStringIntoArrayOfCharUsingSpreadOperator = str => [...str];
console.log(convertStringIntoArrayOfCharUsingSpreadOperator("Chandradip")); // O/P => ['C', 'h', 'a', 'n', 'd', 'r', 'a', 'd', 'i', 'p']
console.log(isEven(5));