// call(this, arg1, arg2, arg...);
// In call method we can pass the this (curent object) in function and number of arguments as per requiremets

function about(hobbies, favSong) {
    console.log(this.firstName, this.age, hobbies, favSong);
}

const person1 = {
    firstName : "Chandradip",
    age : 22
}

const person2 = {
    firstName : "Dipak",
    age : 21
}

about.call(person1, "Reading", "Hare Krishna");

// ! using apply() method
console.log("___________ apply() ______________")

// ? apply() => this is similar to call only the difference is that we can pass the array as an agrument list.

about.apply(person1, ["Play ckricket", "lala la la"]);


// ! using bind() method
// ? bind() method returns new function

const func1 = about.bind(person1, "reading", "123 ka song"); // this will return new fuction.
func1(); // Chandradip 22 reading 123 ka song

// ! this in arrow function
console.log("_____this keyword in arrow function _______");

// this keyward in arrow will take 1 level up
const user1 = {
    firstName : "Sunder",
    age : 32,
    about : () => console.log(this.firstName, this.age) // here this will we window obj
}

user1.about(); // O/P => undefined undefined // because arrow function refer this in one level up object

//shortcut for taking function in in object

const user2 = {
    firstName : "Ram",
    age : 27,
    about() {
        console.log(this.firstName, this.age);
    }
}

user2.about.call(user2); // Ram 27





