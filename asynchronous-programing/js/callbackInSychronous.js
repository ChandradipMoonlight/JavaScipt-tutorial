// callback function

// function getTowNumAndAdd(num1, num2, callback) {
//     if (typeof num1 === "number" && typeof num2 === "number") {
//         return callback(num1, num2);
//     } else {
//         return "wrong data type.";
//     }
// }

// let addTwoNumber = (num1, num2) => num1 + num2;

// console.log(getTowNumAndAdd(5, 15, addTwoNumber));


function getTowNumAndAdd(num1, num2, onSuccess, onError) {
    if (typeof num1 === "number" && typeof num2 === "number") {
        return onSuccess(num1, num2);
    } else {
        return onError();
    }
}

// const result = getTowNumAndAdd(8, 5,
//     (num1, num2) => num1 + num2,
//     () => "wrong data type, Please pass the numbers only."
// );

let addTwoNumber = (num1, num2) => num1 + num2;

let onFail = () => "Provided Wrong dataType.\n Please Provide the Numbers only.";

const result = getTowNumAndAdd(3, 5, addTwoNumber, onFail);
console.log(result);