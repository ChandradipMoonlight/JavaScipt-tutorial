
// we can improve object creation by creating functions in seperate object

const userMethods = {
    is18 : function() {
        return this.age>=18;
    },
    about : function() {
        return `${this.firstName} is ${this.age} older`;
    }
}

function createUser(firstName, lastName, email, age) {
    const user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.about = userMethods.about;
    user.is18 = userMethods.is18;
    return user;
}

const user1 = createUser("Ram", "Raghuvanshi", "ram@gmail.com", 21);
const user2 = createUser("krishna", "Vasudeva", "krishna@gmail.com", 23);
const about1 = user1.about();
const about2 = user2.about();
console.log(about1);
console.log(about2);