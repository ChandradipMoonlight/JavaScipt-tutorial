// prototype of array

const numbers = [1, 2, 3, 4];

console.log(Object.getPrototypeOf(numbers)); 
// here we will get all properties and functions of array

/**
 * but as we know that prototype is Object and it is belongs to only functions but array is Object
 * then how we are getting the array prototype
 * because internally when we create array it uses new Array() to create array object and 
 * Arrays prototype is Array not Object
 */

const nums1 = new Array(1, 2, 3);
console.log(Array.prototype); // will get the same as line 6, 
console.log(Array.isArray(Array.prototype)); // true

// we can change the prototype of function
function myFunc() {
    console.log("testing change of type of prototype");
}

console.log(myFunc.prototype); // object
myFunc.prototype = [];
console.log(myFunc.prototype); // array
myFunc.prototype.push(1, 2, 4);
console.log(myFunc.prototype); // [1, 2, 4]
