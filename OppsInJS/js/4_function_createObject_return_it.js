// if we want to create 10k objects we can create fuction that will create Object and return it as follows

function createUser(firstName, lastName, email, age) {
    const user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age =age;
    user.about = function() {
        return `${this.firstName} is ${this.age} older`;
    }
    user.is18 = function() {
        return this.age>=18;
    }
    return user;
}

const user1 = createUser("Ram", "Suryavanshi", "ram@gmail.com", 25);

console.log(user1.about()); //Ram is 25 older
console.log(user1.is18()); //true
