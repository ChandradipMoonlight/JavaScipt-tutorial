/**
 * Closure
 * 
 * function can return function
 */


function printFullName(firstName, lastName) {
    function printName() {
        console.log(firstName, lastName);
    }
    return printName;
}

const ans = printFullName("Chandradip", "Shivankar");

ans(); // Chandradip Shivankar

function myFunction(power) {
    return function(number) {
        return number ** power;
    }
}

const power = myFunction(2);

console.log(power(3)) // 9

const getKube = power => number => number ** power;

console.log(getKube(3)(2)); // 8
const cube = getKube(3);
console.log(cube(2)); // 8

function func() {
    let count = 0;
    let exe = () => {
        if (count < 1) {
            console.log("Hi, You called me.");
            count++;
        } else {
            console.log("Already called me.");
        }
    }
    return exe;

}

let funcImp = () => {
    let count = 0;
    return () => {
        count < 1 ? console.log("Hi, you called me.") : console.log("Already was called.");
        count++;
    }
}

// const myFunc = func();
// myFunc();
// myFunc();

// const myFunc1 = func();
// myFunc1();

const result = funcImp();
result(); // Hi, you called me.

result(); // Already was called.
