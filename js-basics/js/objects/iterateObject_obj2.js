// How to iterate Objects
// 1. for in loop
// 2. Object.keys

const personalData = {
    firstName: "Chandradip",
    lastName: "Shivankar",
    age: 26,
    "person hobbies": ["Cricket", "Reading of books", "Music"],

}

for (let key in personalData) {
    console.log(key + " : " + personalData[key]);
    // console.log(`${key} : ${personalData[key]}`);
}

const arrayOfKeys = Object.keys(personalData);
console.log("________arrayOfKeys___________")
console.log(arrayOfKeys); //[ 'firstName', 'lastName', 'age', 'person hobbies' ]


console.log("________arrayOfValues___________")
const arrayOfValues = Object.values(personalData);
console.log(arrayOfValues); 
//[
    // 'Chandradip',
    // 'Shivankar',
    // 26,
    // [ 'Cricket', 'Reading of books', 'Music' ]
//   ]

console.log("________ arrayOfEntries ___________")
const arrayOfEntries = Object.entries(personalData);
console.log(arrayOfEntries);

// [
//     [ 'firstName', 'Chandradip' ],
//     [ 'lastName', 'Shivankar' ],
//     [ 'age', 26 ],
//     [ 'person hobbies', [ 'Cricket', 'Reading of books', 'Music' ] ]
//   ]


// Iterating of an Object using for of loop
for (let key of Object.keys(personalData)) {
    console.log(key);
}

