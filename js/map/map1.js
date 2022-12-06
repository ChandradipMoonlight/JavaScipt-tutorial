/**
 * Map
 * map is an iterable
 * stored data in order manner
 * stores key and value pairs like object
 * duplicate keys are not allowed like Objects
 * Key can be any data type, like array, numbers, String, 
 * but object key can have only string and symbol
 */

//Map declaration

const person = new Map();

person.set(1, "one");
person.set("firstName", "Chandradip");
person.set(true, 1);
person.set([1, 2, 3, 4], "numbersArr");

console.log(person.get("firstName")); // get() is used to access value using key
console.log(person.keys()); //return all keys

console.log("___ Type of keys ________")

for (let key of person.keys()) {
    console.log(typeof key);
}

console.log("________ print all keys _________")
for (let key of person.keys()) {
    console.log(key);
}

console.log("_______ get all values using keys and Values ___")
console.log("Key  :   Value")
for (let key of person.keys()) {
    console.log(key + " : " + person.get(key));
}

console.log("****getting keys and values using forEach function***")
person.forEach((k, v) => console.log(k + " : " + v));

//for of  for loop gives key and value in array form

console.log("Getting key and values of map in the form of array using for of for loop.")
for (let kv of person) {
    console.log("is array : " + Array.isArray(kv));
    console.log(kv); // gives array of key and values
}

//destructuring of array of key and values
for (let [key, value] of person) {
    console.log(key, value);
}
console.log(person);

//we can sorted array of keys and values in the map
const person1 = new Map([
    ["one", 1],
    ["two", 2],
    ['three', 3]
]);
console.log(person1)

//stored object as key and object as values in map

const user1 = {
    firstName: "Chandradip",
    lastName: "Shivankar",
}

const user2 = {
    firstName: "Nivruttee",
    lastName: "Shivankar",
}

const user3 = {
    firstName: "Bhushan",
    lastName: "Kulkarni",
}

const userMap = new Map();
userMap.set(user1, { age: 23, gender: "male" });
userMap.set(user2, { age: 24, gender: "Male" });
userMap.set(user3, { age: 12, gender: "Male" });

console.log(userMap);
console.log("user1 age : " + userMap.get(user1).age);