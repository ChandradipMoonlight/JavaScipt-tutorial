
const addToNum = (a, b) => a +b;

console.log(addToNum(2)); // will give O/p => NaN

// earlier approch to handle undefined parameter

const addTwoNumber = (a, b) => {
    // if(typeof b === "undefined") {
    //     b=0;
    // }
    // OR
    if(!b) {
        b = 0;
    }
    return a+b;
}

console.log(addTwoNumber(2)) // o/p => 2

// handle using default parameter
const addTwoNumbersUsingDefaultNumbers = (a=0, b=0) => a+b;

console.log(addTwoNumbersUsingDefaultNumbers(11)); // o/p 11