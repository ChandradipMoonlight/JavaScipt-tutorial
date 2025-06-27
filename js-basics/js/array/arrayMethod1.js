
// push, pop, shift, unshift

let fruits = ["Apple", "Mango", "Grapes"];

console.log(fruits);
// push() method => append new element at the end of the array and return new length of the array
console.log(fruits.push("banana")); // 4

console.log(fruits); // =>  ['Apple', 'Mango', 'Grapes', 'banana']

/**
* pop() method =>
* Removes the last element from an array and returns it.
* If the array is empty, undefined is returned and the array is not modified.
*/
console.log(fruits.pop()); // =>  banana

/**
 * shift() => remove the first element of the array and returned it.
 * If the array is empty, undefined is return and array is not modified.
 */
console.log(fruits.shift()); // => Apple
/**
 * unshift() method =>
 * insert and element at the start of an array and return new length of array.
 */
console.log(fruits.unshift('PineApple')); // 3

console.log(fruits); // => ['PineApple', 'Mango', 'Grapes']

