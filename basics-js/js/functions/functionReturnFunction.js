// function return function

function myFunc() {
    function greet() {
        return "Hello";
    }
    return greet;
}

const ans = myFunc();
console.log(ans);
console.log(ans());

function myFunc1() {
    return () => "Hare Krishna";
}

const ans1 = myFunc1();
console.log(ans1);
console.log(ans1());