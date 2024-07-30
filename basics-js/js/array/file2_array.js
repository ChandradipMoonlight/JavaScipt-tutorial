//how to clone array

let arr1 = ["item1", "item2"];

let arr2 = arr1.slice(0);  //1. by slice method

let arr3 = [].concat(arr1); // 2. by using concat method

let arr4 = [...arr1];        // 3. by using spread method

let arr5 = arr1.slice(0).concat(['1', '2']);
console.log(arr5); // ['item1', 'item2', '1', '2'] 
console.log(arr1 === arr2) // false

arr1.push("item3");

console.log(arr5); // ['item1', 'item2', '1', '2'] 

console.log(arr2) // ['item1', 'item2']