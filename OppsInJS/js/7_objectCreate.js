// we can set object which in proto of another object

const userMethods = {
    about : function() {
        return `${this.firstName} is ${this.age} old.`;
    },
    is18 : function() {
        return this.age>=18;
    }
}

function createUser(firstName, lastName, age ) {
    const user = Object.create(userMethods); // this will set userMethod Object in userObject proto
    user.firstName = firstName;
    user.lastName = lastName;
    user.age = age;
    return user;
}

const user1 = createUser("Dipak", "Kumar", 23);
console.log(user1);

console.log(user1.about()); // Dipak is 23 old.
console.log(user1.is18()); // true

