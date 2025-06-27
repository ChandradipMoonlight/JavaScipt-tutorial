class Person {
    static info = "This is person class."
    constructor(firstName, lastNme, age) {
        this.firstName = firstName;
        this.lastNme = lastNme;
        this.age = age;
    }
    static getClassInfo() {
        return 'This is static method of class';
    }
    get getFullName() {
        return `${this.firstName} ${this.lastNme}`;
    }
    setName(firstName, lastNme) {
        this.firstName = firstName;
        this.lastNme = lastNme;
    }
    // set method is used to set the value in property this is setter method of class
    set setFullName(fullName) {
        const [firstName, lastNme] = fullName.split(" ");
        this.firstName = firstName;
        this.lastNme = lastNme;
    }

    eat() {
        return `${this.firstName} is eating now.`;
    }
}

const person1 = new Person("Ram", "Raghukul", 44);
console.log(person1.eat());

//accessing static method directly using class.
console.log(Person.getClassInfo());

//accessing static method 
console.log(Person.info)