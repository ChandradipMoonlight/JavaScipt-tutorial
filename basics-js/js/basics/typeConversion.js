

// // Data types in javaScript(primitive data types)

// String "Chandradip"
// Number 2, 3
// Booleans true or false
// undefined 
// null
// BigInt
// symbol

let age = 23;
let fistName = "Chandradip";

// type of operator

console.log(typeof(age));
console.log(typeof(fistName));

// convert number to string
age = age +"";
console.log(typeof(age));
    // or

age = String(age);
console.log(typeof(age));


// convert String to number
let myAge = "24"
console.log(typeof myAge);
myAge = +myAge;
console.log(typeof myAge);


//______________________ String concatenation____________

let str1 = "Chandradip";
let str2 = "Shivankar";

let str = str1 + " " + str2;
console.log("Getting full name after concatenation : " + str);

let 