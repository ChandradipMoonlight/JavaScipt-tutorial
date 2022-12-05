// function inside functions

function app() {
    const greet = function() {
        console.log("hello!");
    }
    const findSum = (a, b) => a + b;
    const isEven = a => a % 2 === 0;
    console.log("inside Of App!");
    greet();
    console.log(findSum(23, 21));
}
app();