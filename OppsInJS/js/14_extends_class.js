class Animal {
    constructor(animalName, animalAge) {
        console.log("Animal Constructor called!")
        // this.animalType = animalType;
        this.animalName = animalName;
        this.animalAge = animalAge;
    }
    // In JavaScript we can not create multiple constructor.

    // constructor(animalName, animalAge, animalType) {
    //             this.animalType = animalType;
    //             this.animalName = animalName;
    //             this.animalAge = animalAge;
    // }

    getAnimalInfo() {
        return `${this.animalName} is ${this.animalAge}  `
    }
}

class Dog extends Animal{
    constructor(animalName, animalAge, speed) {
        console.log("Dog constructor called!")
        super(animalName, animalAge)
        this.speed = speed;
    }

    getRunningSpeed() {
        return `${this.speed} km/h`;
    }
}

const dog = new Animal("ADog", 10);
const dog1 = new Dog("BDog", 12, 45);

console.log(dog);
console.log(dog1);