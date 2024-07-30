// In JavaScript function is combination of function and Object
// ex

// const greet = function() {
//     return "hello";
// }

//OR

function greet() {
    return "hello";
}

console.log(greet.name); // geet

// as we know that function in JavaScript is combination of function and Object
// hence we can set the properties in in it.

greet.myOwnProperty = "Very unique value";
greet.isCorrect = true;

console.log(greet.myOwnProperty); // Very unique value

// Function provides more use-full properties

console.log(typeof greet.prototype); // object 

//! prototype

// prototype is object which is of function. we can add the properties in that function
//Only function provides prototype

