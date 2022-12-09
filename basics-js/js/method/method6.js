//Object.create(argument);

const obj1 = {
    key1: "value1",
    key2: "value2",
}

// const obj2 = {
//     key3: "value3",
// }

const obj2 = Object.create(obj1); // obj2 will store obj2 as [[Prototype]]

obj2.key3 = "value3";

// obj2.key2 = "uniqueValue";

console.log("Printing of object 2 it wil print prototype as well. ")
console.log(obj2);
console.log("Printing of proto of object 2");
console.log(obj2.__proto__) //this will give prototype of obj2 as obj1
obj2.__proto__.key4 = "key4";