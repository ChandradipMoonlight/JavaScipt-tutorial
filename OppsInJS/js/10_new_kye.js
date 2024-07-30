// ! new Keyword

// create empty object this = {}
// return this

function createUser(firstName, age) {
    this.firstName = firstName;
    this.age = age;
}

createUser.prototype.about = function(){
    return `My name is ${this.firstName} and age is ${this.age}.`
}

createUser.prototype.is18 = function() {
    console.log(this.age>=18);
}
const user1 = new createUser("Ram", 45);

console.log(user1.about());
user1.is18();

