/**
 * callback function => we pass one function as input in another function and call it in that function
 * 
 */

function callbackFunction(a) {
    console.log(`Inside callbackFunction.\nMy Name is : ${a}`)
}

function mainFunction(callback) {
    console.log("Inside main function");
    callback("Dipak");
}

//calling mainFunction
mainFunction(callbackFunction);

