//Lexical Scope :
/*
Lexical scoping in JavaScript
JavaScript uses lexical scoping to resolve the variable names when a function is created 
inside another function. It determines the function's parent scope by looking at where the 
function was created instead of where it was invoked.
*/
function myApp() {
    let myVar = "hello!";

    function myFunc() {}
    const myFun2 = function() {
        console.log(myVar);
    }
    const myFun3 = () => {}
    console.log(myVar);
    myFun2();
}

myApp();