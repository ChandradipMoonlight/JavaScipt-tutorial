// * Methods
// ? Function inside Object we can called it as Methods.

const person = {
    firstName : "Chadradip",
    age : 24,
    about : function() {
        console.log(`My first name is ${this.firstName}, and my age is ${this.age}.`)
    }
}

person.about(); // * O/P => My first name is Chandradip, and my age is 24.

const myInfo = person.about;
console.log(myInfo); 

// * O/P => about : function() {
        //*  console.log(`My first name is ${this.firstName}, and my age is ${this.age}.`)
    //* }
    
myInfo(); // * O/P => My first name is undefined, and my age is undefined. //it is giving us as undefied becuase it will checking in window function 

function personInfo() {
    console.log(`Person name is ${this.firstName} and Age is ${this.age}.`);
}

const personObj1 = {
    firstName : "Ram",
    age : 23,
    about : personInfo
}

const personObj2 = {
    firstName : "Sham",
    age : 21,
    about : personInfo
}

personObj1.about(); // Person name is Ram adn age is 23.