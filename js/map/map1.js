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

const employeeMap = new Map();
const emp1 = { empId: 1, empName: 'Chandradip', empSalary: 50000 };
const emp2 = { empId: 2, empName: 'Sajan', empSalary: 40000 };
const emp3 = { empId: 3, empName: 'Nivruttee', empSalary: 56000 };
const emp4 = { empId: 4, empName: 'Kapil', empSalary: 41000 };

employeeMap.set(emp1.empId, emp1);
employeeMap.set(emp2.empId, emp2);
employeeMap.set(emp3.empId, emp3);
employeeMap.set(emp4.empId, emp4);

console.log("entires of Map")

console.log(employeeMap);

employeeMap.forEach((k, v) => k.empSalary >= 45000 ? console.log(k) : "");

const empArr = [...employeeMap.values()];
console.log(empArr);

let likeQuery = (userName) => {
    for (let i of userName) {
        if (i === 'a') {
            return true;
        }
    }
}
console.log("Get employee details whose name contains a");
empArr.filter(e => likeQuery(e.empName)).forEach(ele => console.log(ele));

const str1 = "Chandradip";
console.log(str1.split("").some(e => e == 'a'));

empArr.filter(e => e.empName.split("").some(ch => ch === 'a'))
    .forEach(emp => console.log(emp));