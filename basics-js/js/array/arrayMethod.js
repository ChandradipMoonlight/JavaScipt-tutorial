// Important Array Methods
const numbers = [1, 2, 3, 4, 5];

const users = [
    { firstName: "Chandradip", age: 23 },
    { firstName: "Mohit", age: 21 },
    { firstName: "Nitesh", age: 24 },
    { firstName: "Nivrutee", age: 20 },
]

// 1. for each

const getResult = (num, index) => console.log(`result : ${num*2} and index : ${index+1}`);

numbers.forEach(getResult);

numbers.forEach((num, index) => console.log(num * 4));
numbers.forEach((ele, i)=>console.log(`number : ${ele*2}, Index : ${i}`));

users.forEach((user) => console.log(user.firstName));

// 2. map()

const squareNumber = numbers.filter(num => num % 2 === 0)
    .map(n => n * 2);

const userNameArray = users.map(user => user.firstName)

// 3. reduce()

const sum = numbers.reduce((accumulator, currentValue, currentIndex) => accumulator + currentValue);
console.log(sum);

const userCart = [
    { productId: 1, productName: "Laptop", productPrice: "41000" },
    { productId: 2, productName: "Mobile", productPrice: "11000" },
    { productId: 1, productName: "TV", productPrice: "21000" },
]

// const totalProductsPrice = userCart.map(price => +price.productPrice)
//     .reduce((previousValue, currentValue) => previousValue + currentValue);

const totalProductsPrice = userCart.reduce(
    (previousPrice, currentPrice) => {
        return previousPrice + Number(currentPrice.productPrice)
    }, 0
);
console.log(totalProductsPrice);

//----------------- sort() -------------------------
console.log("********** sort() method of array *****");

//sort numbers array
const numArr = [289, 19, 12, 99, 4, 1];
numArr.sort(); // this will sort numbers by considering it as string based on ASCII values
console.log("Sorting of numbers based on their ascii values : " + numArr);

//sort array based on numbers values not ascii values
numArr.sort((a, b) => a - b); // gives sorting based in ascending order
numArr.sort((a, b) => b - a); // sort in descending order
console.log("sorting of numbers based on their values : " + numArr)

// sort products low priceToHigh price
userCart.sort((a, b) => Number(a.productPrice) - Number(b.productPrice));
console.log("Sorting of Products based lowToHigh price : ");
console.log(userCart);

//sort products based on their price highToLow
//create clone of array fist using slice() method then sort it so, that it will not change the original array.
console.log("sorting of array in high to low price.")
const sortedProductHighToLow = userCart.slice(0).sort((a, b) => b.productPrice - a.productPrice);
console.log(sortedProductHighToLow);

//------------------ find() -----------------------------------
/**
 * find() method
 * Returns the value of the first element in the array where predicate is true, and undefined otherwise
 */

console.log("*** --------find() method of array--------- ******");

const userData = [
    { userId: 1, userName: "Chandradip" },
    { userId: 2, userName: "Dipak" },
    { userId: 3, userName: "Ram" },
    { userId: 4, userName: "Nivruttee" },
    { userId: 5, userName: "Raghav" },
]

const getUserByName = userData.find(user => user.userName === "Raghav");
const getUserById = userData.find(user => user.userId === 1);
console.log("find user by userId using find() method!")
console.log(getUserById);
console.log("find user data by userName using find() method!");
console.log(getUserByName);

//---------------- every() method ---------------------------------------

/**
 * every() method return true or false
 * 
 * it except callback function (predicate)
 * 
 */

console.log("______________ every() method ______________________");

// it will return true if all product price is greater than 10000 rs else return false.
const checkPrice = userCart.every(e => Number(e.productPrice) > 10000);
console.log("Is all product having price greater than 10000 : " + checkPrice);

//___________________________________ some() method _________________________

console.log("____________________ some() method ____________________")
    /**
     * some() method return true if any one of the element of array satisfied condition 
     * else return false.
     */

const isAnyNumEven = numArr.some(e => e % 2 === 0);
console.log("is any number is even in array : " + isAnyNumEven);

const isAnyProductPriceIsHigherThan50000 = userCart.some(e => e.productPrice > 50000);
console.log(isAnyProductPriceIsHigherThan50000);

//___________________________ fill() method _______________________________
// Changes all array elements from `start` to `end` index to a static `value` and returns the modified array
// this method is used to replace element of array of for given range.
console.log("____________________ fill() method ______________________")

// this will replace element at 2, 3, 4, 5 with -1;
// is modifies the original array

const numbArr = [1, 2, 3, 6, 11, 5, 6];
console.log("Array before fill() method : " + numbArr);
numbArr.fill(-1, 2, 6);
console.log("Array after fill() method()")
console.log(numbArr);

//_______________________ splice() method ___________________________

// slice method is used to to delete and insert element in an array.

// startIndex, delete, insert

const num = [1, 2, 3, 4, 5];
num.splice(1, 2, "item1", "item2", "item3"); // => 1, 2, "item1", "item2", "item3", 4, 5
console.log(num);


function totalVotes(arr) {
    return arr.filter(a=>a.voted).length;
 }
 
 var voters = [
     {name:'Bob' , age: 30, voted: true},
     {name:'Jake' , age: 32, voted: true},
     {name:'Kate' , age: 25, voted: false},
     {name:'Sam' , age: 20, voted: false},
     {name:'Phil' , age: 21, voted: true},
     {name:'Ed' , age:55, voted:true},
     {name:'Tami' , age: 54, voted:true},
     {name: 'Mary', age: 31, voted: false},
     {name: 'Becky', age: 43, voted: false},
     {name: 'Joey', age: 41, voted: true},
     {name: 'Jeff', age: 30, voted: true},
     {name: 'Zack', age: 19, voted: false}
 ];
 console.log(totalVotes(voters)); // 7