//Spread Operator (...)

//1. it is used to clone the array

const arr1 = [1, 2, 3, 4];
const arr2 = [5, 6, 7, 8];
const clonedArr = [...arr1, ...arr2];
console.log(arr1 === clonedArr); //false 
console.log("original array1 : " + arr1); // 1, 2, 3, 4
console.log("Cloned Array : " + clonedArr); // 1,2,3,4,5,6,7,8

//2. to spread the element or data

const name1 = "DIPAK";
const newName = [...name1]; //o/p => ['D', 'I', 'P', 'A', 'K']
console.log(newName); // [ 'D', 'I', 'P', 'A', 'K' ]

//clone of Object

const obj1 = {
    key1: 1,
    key2: 2,

}
const obj2 = {
    key3: 3,
    key4: 4,
    key1: 0,
}


//? when we copy array in object using spread operator key will be its index and value will be element of that index
const newObject = {
    ...obj1,
    ...obj2,
    key12: 12,
    ...arr1,
}
console.log(newObject);
console.log(newObject[0])