const fruits = ["apple", "Mango", "Grapes", "Banana"]
let newFruits = [];
for (let i = 0; i < fruits.length; i++) {
    newFruits.push(fruits[i].toString().toUpperCase());
}

iterateArrayUsingForInForLoop(newFruits);

function iterateArrayUsingWhileLoop(arr) {
    let i = 0;
    while (i < arr.length) {
        console.log(arr[i]);
        i++;
    }
}

function iterateArrayUsingForOfForLoop(arr) {
    for (let element of arr) {
        console.log(element);
    }
}

function iterateArrayUsingForInForLoop(arr) {
    for (let index in arr) {
        // console.log(index); // getting index of element of array
        console.log(arr[index]); // getting elements of array using index
    }
}