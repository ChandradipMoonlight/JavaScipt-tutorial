// undefined , null, BigInt

// undefined
let firstName;
console.log(typeof(firstName)); // undefined

if(!firstName) { // true
    console.log("undefined");
}

// null

let myName = null;

console.log(typeof(myName), myName); // object null

// BigInt
let myBigIntNum = BigInt(1234); //this is bigint
let myBigIntNumSame = 3545n; // this is also bigInt
console.log(myBigIntNum + myBigIntNumSame); // ==> 4779n

