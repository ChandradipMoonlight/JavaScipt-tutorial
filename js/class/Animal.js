class Animal {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getAnimalDetails() {
        return `${this.name} is ${this.age} old.`;
    }

}

class Dog extends Animal {

    speed;
    constructor(name, age, speed) {
        super(name, age);
        this.speed = speed;
    }

    getAnimalDetails() {
        return `${this.name} is ${this.age} old. And he can run at ${this.speed} speed.`
    }
}

const dog = new Dog("Tommy", 7, 45);
console.log(dog.getAnimalDetails());