
class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    static getClassInfo() {
        return "this is Person class, method we can call it by class name";
    }

    static description = "this is static property and we can call it by using class name";

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    set fullName(fullName) {
        const[firstName, lastName] = fullName.split(" ");
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

const person = new Person("Ram", "Raghu", 30);

console.log(Person.description); // this is static property and we can call it by using class name

console.log(Person.getClassInfo()); // this is Person class, method we can call it by class name

// ! we can not call static properties or static method by using object name because it is belongs to class rather than objecdt.
