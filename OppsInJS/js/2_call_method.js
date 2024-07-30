// call() method => it is used to replace the value of this inside the function.

const user1 = {
    firstName : "Chandradip",
    age : 21,
    about : function() {
        console.log(this.firstName, this.age);
    }
}

const user2 = {
    firstName : "Dipak",
    age : 22
}

user1.about(); // Chandradip 21

//     * Calls a method of an object, substituting another object for the current object.
//     * we can also pass number of args in call() method

user1.about.call(); // undefined undefined => because we are not passing any this object in call
user1.about.call(user1); // chandradip 21
user1.about.call(user2); // Dipak 22

