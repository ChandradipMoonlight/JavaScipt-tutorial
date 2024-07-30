
//Object.create(oanotherObject);
// * Creates an object that has the specified prototype or that has null prototype.


const obj1 = {
    key1 : "value1",
    key2 : "value2",
}

const obj2 = Object.create(obj1); // this will set obj1 in obj2's prototype
obj2.key3 = "value3";

console.log(obj2);
console.log(obj2.__proto__);


