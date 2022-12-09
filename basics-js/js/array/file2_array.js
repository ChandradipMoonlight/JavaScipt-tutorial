//how to clone array

let arr1 = ["item1", "item2"];

// let arr2 = arr1.slice(0);  //1. by slice method

//let arr2 = [].concat(arr1); // 2. by using concat method

//let arr2 = [...arr1];        // 3. by using spread method

let arr2 = arr1.slice(0).concat(['1', '2']);
console.log(arr1 === arr2)

arr1.push("item3");

console.log(arr2)