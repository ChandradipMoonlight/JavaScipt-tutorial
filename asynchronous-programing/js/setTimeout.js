// setTimeout()

console.log("Script start.");


const id = setTimeout(() => console.log("Inside setTimeout"), 1000);

for (let i = 0; i < 100; i++) {
    console.log("....");
}
console.log("setTimeout id is : " + id);
console.log("Clearing Timeout");
clearTimeout(id);

console.log("Script End");