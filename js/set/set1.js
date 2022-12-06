// sets 
/**
 * set is iterable
 * stored dta
 * set also has ite own methods
 * No index based access
 * order is not guaranteed
 * stores unique items only (duplicates are not allowed.)
 */

//declaration

const numbers = new Set(); // empty set 
//or 
// const numbers = new Set([1, 2, 3, 4, 5]); //we can set any iterable like string array
// const numbers = new Set([2, 2, 3, 4, 3]);  // o/p => unique and unordered numbers 

numbers.add(1); // add() method will add element in set
numbers.add("item1");
numbers.add("item1"); // this will not get stored because of duplicate element

numbers.add(["item1, item2"]);
numbers.add(["item1", "item2"]); // both array will get stored because they have different 
// address in memory.

console.log(numbers)

const isElementPresent = numbers.has(1); // has() method return true if element is present else return false
console.log("isElementPresent : " + isElementPresent);

// for (let num of numbers) {
//     if (Array.isArray(num)) {
//         num.forEach(e => console.log(e));
//     } else {
//         console.log(num);
//     }
// }

console.log("_____ Iterating set using forEach! __________")
numbers.forEach(e => console.log(e));

//set don't have length property

//calculate set length

let getLength = (set) => {
    let length = 0;
    set.forEach(e => length++);
    return length;
}
console.log("Length Of Numbers set : " + getLength(numbers));