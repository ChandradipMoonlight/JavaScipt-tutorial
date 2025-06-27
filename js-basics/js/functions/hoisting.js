// Hoisting

/**
 * 
 */

hello(); // hello // this is because of hoisting it will work only in function declaration

function hello() {
    console.log("Hello");
}

console.log(greet); // undefined

var greet = "Hello World";


console.log(f_name); // uncautch type error    Cannot access 'f_name' before initialization
let f_name = "Chandradip";