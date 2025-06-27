// this keyword with arrow function


const user1 = {
    firstName: "chandradip",
    age: 23,
    about1: function() { console.log(this) },
    // in arrow function this keyword refers to the one level up means window not user1
    about: () => console.log(this.firstName, this.age, this),
}

user1.about();
user1.about1();

const user2 = {
    firstName: "Ram",
    age: 34,
    about() {
        console.log("this is shortcut way to create the method in object.");
    }
}