
// falsy values =>

// false
// ""
// null
// undefined
// 0

//1. ""

let firstName = ""; // or null, 0, undefined,

if(firstName) {  // false
    console.log(firstName);
} else {
    console.log("first name is empty");
}