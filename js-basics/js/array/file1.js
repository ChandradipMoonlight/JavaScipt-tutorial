let firstName = " Chandradip ";

console.log(firstName);
//to check length of the string

console.log(firstName.length);

firstName = firstName.toLocaleLowerCase();
console.log(firstName);

firstName = firstName.toUpperCase();

console.log(firstName);

firstName = firstName.slice(1, 3); // it will  give us substring from including index 1 upto index 3 excluding
console.log(firstName);

firstName = firstName[1];
console.log(firstName);
console.log(typeof firstName);