//defined Array of Object

const users = [
    {userId : 1, firstName : 'Ram', gender : 'male'},
    {userId : 2, firstName : 'Sham', gender : 'male'},
    {userId : 3, firstName : 'Sunder', gender : 'male'},
    {userId : 4, firstName : 'Arun', gender : 'male'}
]

// this will destructure above array and will user first object in user1 and so on ....
const [user1, user2, user3] = users;

console.log(user1); // {userId : 1, firstName : 'Ram', gender : 'male'},

// this fistName will store firstObjects firstName and userId of 4th object.
const[{firstName}, , , {userId}] = users;

console.log(firstName, userId); // o/p ==> ram 4