// Array Destructuring

const myArray = ["1", "2", "3", "4", '5'];

// let [val1, val2] = myArray; // it will store val1 = 1, val2 = 2

// let [val1, , val3] = myArray; // here val2 will get skip
let [val1, val2, ...remainingElements] = myArray; // it will store all remaining values in remainingElements array.


console.log("val1 : " + val1);
console.log("val3 : " + remainingElements);