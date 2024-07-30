

function createUser(firstName, lastName, age ) {
    const user = Object.create(createUser.prototype); // this will set createUsers's Prototype Object in userObject proto
    user.firstName = firstName;
    user.lastName = lastName;
    user.age = age;
    return user;
}

// we can set the properties in the prototype of function
createUser.prototype.about = function() {
    return `${this.firstName} is ${this.age} old.`;
};

createUser.prototype.is18 =  function() {
    return this.age>=18;
}


const user1 = createUser("Dipak", "Kumar", 23);
const user2 = createUser("Ram", "Raghuvanshi");
console.log(user2);
console.log(user1);

console.log(user1.about()); // Dipak is 23 old.
console.log(user1.is18()); // true

