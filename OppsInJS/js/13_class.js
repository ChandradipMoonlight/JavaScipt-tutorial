class User {

    constructor(firstName, lastName, email, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.age = age;
    }

    about() {
       return `${this.firstName} ${this.lastName} is ${this.age} years old.`; 
    }

    is18() {
        return this.age>=18;
    }


    addition(a, b) {
        return a+b;
    }
}

const user1 = new User("Chandradip", "S", "chandradip@gmail.com", 24);

const use2 = new User();

console.log(user1.about());
console.log(user1.is18());
console.log(user1.email);

console.log(Object.getPrototypeOf(user1));
console.log(user1.addition(2, 5));
console.log(use2.addition(2, 3));
