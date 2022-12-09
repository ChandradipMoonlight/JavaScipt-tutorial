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

console.log(user1);

console.log(user1.about());