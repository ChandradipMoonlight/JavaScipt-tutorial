/**
 * Objects are reference type.
 * 2. Arrays are good but not sufficient.
 * 3. Objects are used for real world data.
 * 4. Object stores key and value pair.
 * 5. Objects don't have the index.
 */

// How to crate Object.

const personData = {
    name: "Chandradip",
    age: 22,
    hobbies: ["reading", "music"],
}

// How to add properties in object

personData.address = "test address";
personData["gender"] = "Male";

// get properties of Objects
console.log("Personal Data : " + personData);
console.log(personData);

console.log("get single properties of object using . operator : " + personData.age);
console.log("get property of object using [] operator : " + personData["name"]);

//Difference between dot and bracket notation

personData["person email id"] = ["dipak@gmail.com", "dipak.tech@gmail.com"];

console.log(personData["person email id"]); //[ 'dipak@gmail.com', 'dipak.tech@gmail.com' ]

const key = "mobile number"; //

personData[key] = "9145388092";
console.log(personData)