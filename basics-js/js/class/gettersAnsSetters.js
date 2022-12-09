// getters and setters

class Person {
    constructor(firstName, lastNme, age) {
        this.firstName = firstName;
        this.lastNme = lastNme;
        this.age = age;
    }
    get getFullName() {
        return `${this.firstName} ${this.lastNme}`;
    }
    setName(firstName, lastNme) {
        this.firstName = firstName;
        this.lastNme = lastNme;
    }
    set setFullName(fullName) {
        const [firstName, lastNme] = fullName.split(" ");
        this.firstName = firstName;
        this.lastNme = lastNme;
    }
}

const person1 = new Person("Chandradip", "Shivankar", 25);

console.log(person1.getFullName)
person1.setName("Nivruttee", "Shivankar");

console.log(person1.getFullName);

person1.setFullName = "Raja Ram";
console.log(person1.firstName);