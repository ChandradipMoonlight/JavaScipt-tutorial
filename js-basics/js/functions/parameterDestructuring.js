

const personData = {
    firstName : "Chandradip",
    lastName : "Shivankar",
    age : 27
}

function printDetails(object) {
    console.log(object.firstName);
    console.log(object.lastName);
    console.log(object.age);
}

// we can destructure the param like below

function printDetailsUsingDestructuring({firstName, lastName, age}) {
    console.log(firstName);
    console.log(lastName);
    console.log(age);
}


printDetails(personData);
console.log("___using destructuring___");
printDetailsUsingDestructuring(personData);
// o/p of the above two will be same
