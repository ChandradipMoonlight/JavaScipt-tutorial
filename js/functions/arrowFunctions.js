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
    2.2

}
console.log(isEven(5));