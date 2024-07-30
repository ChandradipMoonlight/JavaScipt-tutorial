/**
 * new Keyword =>
 * 1. create empty object => this = {};
 * 2. return this.
 * 3. it will create automatically => Object.create(func.prototype)
 */

// function createUser(firstName, lastName, age, email, address) {
//     const user = Object.create(createUser.prototype);
//     user.firstName = firstName;
//     user.lastName = lastName;
//     user.age = age;
//     user.email = email;
//     user.address = address;

//     return user;
// }
// createUser.prototype.is18 = function() {
//     return this.age >= 18;
// }
// createUser.prototype.about = function() {
//     return `${this.lastName, this.lastName} is ${this.age} old.`;
// }
// const user1 = createUser("Chandradip", "Shivankar", 18, "chandra@gmail.com", "Jalna");

// console.log(user1);
// console.log(user1.is18());
// console.log(user1.about());

// function createUser(firstName, age) {
//     this.age = age;
//     this.firstName = firstName;
// }
// createUser.prototype.about = function() {
//     return `${this.firstName} is ${this.age} year old.`;
// }
// const user1 = new createUser("Chandradip", 23);
// console.log(typeof(user1));
// console.log(user1);

function CreateUser(firstName, lastName, email, age, address) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.email = email;
    this.address = address;
}

CreateUser.prototype.is18 = function() {
    return this.age >= 18;
}

CreateUser.prototype.about = function() {
    return `${this.firstName} ${this.lastName} is ${this.age} old`;
}

const user1 = new CreateUser("Chandradip", "Shivankar", "chandradip@gmail.com", 25, { city: "Jalna", state: "MH", pinCode: 431206 });
// above is same as Object.create(createUser.prototype); means if we use new keyword we don't need to set functions prototype in objects proto 
// it will create that functionality automatically

console.log(user1);

console.log(user1.about());

console.log("print all keys of object including prototype");

for (let key in user1) {
    console.log(key);
}

console.log("___________Printing All keys of Object excluding prototype.");

for (let key in user1) {
    user1.hasOwnProperty(key) ? console.log(key) : "";
}

const numbers = [1, 2, 3, 4, 5];
console.log(numbers, numbers.__proto__);

console.log(Object.getPrototypeOf(user1));