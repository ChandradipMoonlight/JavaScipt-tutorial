// create function which will return function.

//following approach is not good because it will create the method for every user
//and consume more space.

// function createUser(firstName, lastName, age, email, address) {
//     const user = {};
//     user.firstName = firstName;
//     user.lastName = lastName;
//     user.age = age;
//     user.email = email;
//     user.address = address;
//     user.is18 = function() {
//         return this.age >= 18;
//     };
//     user.about = function() {
//         return `${this.firstName, this.lastName} is ${this.age} years old.`
//     }
//     return user;
// }

/**
 * to avoid above problem we can create separate object of methods and can give
 * reference to the function
 */

// const userMethods = {
//     about: function() {
//         return `${this.firstName, this.lastName} is ${this.age} years old.`;
//     },
//     is18: function() {
//         return this.age >= 18;
//     }
// }

// function createUser(firstName, lastName, age, email, address) {
//     const user = {};
//     user.firstName = firstName;
//     user.lastName = lastName;
//     user.age = age;
//     user.email = email;
//     user.address = address;
//     user.about = userMethods.about;
//     user.is18 = userMethods.is18;
//     return user;
// }

// const user1 = createUser("Chandradip", "Shivankar", 18, "chandra@gmail.com", "Jalna");

// console.log(user1);
// console.log(user1.is18());
// console.log(user1.about());

//we can improve the above one also here by using Object.create() method 
//it will create it as prototype of userMethods

// function createUser(firstName, lastName, age, email, address) {
//     const user = Object.create(userMethods);
//     user.firstName = firstName;
//     user.lastName = lastName;
//     user.age = age;
//     user.email = email;
//     user.address = address;

//     return user;
// }

// const user1 = createUser("Chandradip", "Shivankar", 18, "chandra@gmail.com", "Jalna");

// console.log(user1);
// console.log(user1.is18());
// console.log(user1.about());

/**
 * we can again improve the above one 
 * instead of creating proto of object
 * 
 * proto => proto is reference of object it can be created by using Object.create() method
 * prototype => prototype is free space {} means empty object. it is property of functions
 * 
 * we can set the object in the function Prototype
 */

function createUser(firstName, lastName, age, email, address) {
    const user = Object.create(createUser.prototype);
    user.firstName = firstName;
    user.lastName = lastName;
    user.age = age;
    user.email = email;
    user.address = address;

    return user;
}
createUser.prototype.is18 = function() {
    return this.age >= 18;
}
createUser.prototype.about = function() {
    return `${this.lastName, this.lastName} is ${this.age} old.`;
}
const user1 = createUser("Chandradip", "Shivankar", 18, "chandra@gmail.com", "Jalna");

console.log(user1);
console.log(user1.is18());
console.log(user1.about());