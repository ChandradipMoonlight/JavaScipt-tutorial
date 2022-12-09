//Methods

//functions inside Object called as method


// this keyword => it is used to access object inside object.

const user = {
    firstName: "Chandradip",
    age: 19,
    about: function() {
        console.log(`My name is ${this.firstName} and age is ${this.age}`)
    }
}

user.about();

function userInfo() {
    console.log(`My name is ${this.firstName} and age is ${this.age}`);
}

const user1 = {
    firstName: "Ram",
    age: 53,
    about: userInfo
}

const user2 = {
    firstName: "Sham",
    age: 34,
    about: userInfo
}

user1.about();
user2.about();