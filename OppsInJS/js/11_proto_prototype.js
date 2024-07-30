

function CreateUser(firstName, lastName, email, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
}

CreateUser.prototype.about = function() {
    return `${this.firstName} ${this.lastName} is ${this.age} years old.`;
}

CreateUser.prototype.is18 = function() {
    return this.age>=18;
}

const user1 = new CreateUser("Chandradip", "Shivankar", "chandradip@gmail.com", 26);

for(let key in user1) {
    if(user1.hasOwnProperty(key)) console.log(key)
}