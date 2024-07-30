// 1. using literal notation

const arrayUsingLiteral = []; // empty array declaration 
const arrayUsingLiteral1 = ["aa", 1, 2, true, false];


// 2. using array constructor

let myArray = new Array();
console.log(myArray); // []

let myArray1 = new Array("John Doe", 24, true);

// When you pass a single digit into an array constructor, it will fill the array with the number of empty values you entered.
// let myArray = new Array(4);
// console.log(myArray); // [,,,]


// But when you pass a single string or any other data type, it works well.
// let myArray = new Array(true);
// console.log(myArray); // [true]


// It is not compulsory to add new, as both Array() and new Array() perform the same task.
// let myArray = Array("John Doe", 24, true);



