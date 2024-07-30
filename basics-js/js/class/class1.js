/**
 * Class are fake in JS.
 * 
 */

class User {
    firstName;
    age;
    email;
    gender = 'Male';
    constructor(firstName, age, email) {
        this.firstName = firstName;
        this.email = email;
        this.age = age;
    }
    is18() {
        return this.age >= 18;
    }

    about() {
        return `${this.firstName} is ${this.age} old.`;
    }
}

const user1 = new User("Chandradip", 23, "info@gmail.com");
console.log(Object.getPrototypeOf(user1)); // constructor, is18, about 


console.log(user1); // it will print object as below

// User {
//     firstName: 'Chandradip',
//     age: 23,
//     email: 'info@gmail.com',
//     gender: 'Male'
//   }

console.log(user1.about()); // Chandradip is 23 old.
