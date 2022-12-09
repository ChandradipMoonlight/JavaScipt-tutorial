//Prototype in java

// JavaScript function ==> function || object
/**
 * in javascript function is function and also it is object 
 * we can provide properties to the functions like objects
 * it has some properties like name => provides name of object
 * function provides more useful properties.
 * functions provides free space {} called prototype 
 */

function helle() {
    console.log("hello JS");

}

console.log("Get Function name :")
console.log(helle.name); //

// we can add own property to the function because it is consider as object as well

helle.myProperty = "Function can act as Object";
console.log(helle.myProperty);


//Function provides free space called as prototype
//Only functions provides  prototype property
console.log("Function provides free space called as prototype");

console.log(helle.prototype);

helle.prototype.key1 = "value1";
helle.prototype.singFunc = function() {
    return "lallalalala";
}

console.log(helle.prototype);

//Use of Prototype