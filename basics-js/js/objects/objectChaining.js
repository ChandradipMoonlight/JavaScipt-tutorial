// optional chaining we can check it by ?
"use strict"
const user = {
    firstName: "Chandradip",
    address: { city: "Pune", state: "MH" },
}

console.log(user?.address['city']);