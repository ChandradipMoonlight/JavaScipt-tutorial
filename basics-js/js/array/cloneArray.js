/**
 * we can clone array by three ways
 * 1. slice(startIndex, endIndex); 
 * 2. [].concat(array);
 * 3. [...array]; spread operator
 */

const arr1 = ['Mango', 'Grapes', 'Banana'];
const arr2 = arr1.slice(0); // ['Mango', 'Grapes', 'Banana']
const arr3 = [].concat(arr1); // ['Mango', 'Grapes', 'Banana']
const arr4 = [...arr1, 'Papaya']; // ['Mango', 'Grapes', 'Banana', 'Papaya']
const arr5 = arr1.slice(0).concat(['Apple', 'Papaya']); // ['Mango', 'Grapes', 'Banana', 'Apple', 'Papaya']


/** Note
 * Array is non primitive data type,
 * it is stored in heap memory and its pointer in stack memory.
 * ex. const arr1 = ['Mango', 'Grapes', 'Banana'];
 *     const arr2 = arr1;
 *     arr1===arr2 // true
 * arr1 and arr2 are pointing to same address of heap memory.
 */