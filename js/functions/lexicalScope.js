//Lexical Scope :

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