// __proto__ or [[prototype]]
// proto => proto is reference of object it can be created by using Object.create() method

const user1 = {
    key1 : "value1"
}

//Object.create() will set user1 prototype of user2
const user2 = Object.create(user1);
user2.key2= "value2";

console.log(user2.key1);  // value1
console.log(user2.key2); // value2

const userMethods = {
    about: function() {
        return `${this.firstName, this.lastName} is ${this.age} years old.`;
    },
    is18: function() {
        return this.age >= 18;
    }
}

function createUser(firstName, lastName, age, email, address) {
    const user = Object.create(userMethods);
    user.firstName = firstName;
    user.lastName = lastName;
    user.age = age;
    user.email = email;
    user.address = address;

    return user;
}

const user3 = createUser("Chandradip", "Shivankar", 18, "chandra@gmail.com", "Jalna");

console.log(user3.__proto__);
console.log(user3.is18());
console.log(user3.about());