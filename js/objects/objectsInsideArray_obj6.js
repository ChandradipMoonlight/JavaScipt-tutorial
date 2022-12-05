//Objects inside of array.

//very very useful in real world applications.



const users = [
    { userId: 101, userName: "chandradip", gender: "Male" },
    { userId: 102, userName: "Niv", gender: "Male" },
    { userId: 103, userName: "Pratibha", gender: "Female" },
];

// console.log(users);


//iterating of object using for in loop
for (let user in users) {
    console.log(users[user].userName);
}

//using for of loop
for (let user of users) {
    console.log(user);

}

//Nested Destructuring
console.log("---destructuring of usersObject-----")

const [user1, user2, user3] = users;

console.log(user1);

let { userName: userFirstName, userId } = user1;
console.log(userFirstName);