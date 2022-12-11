// promise
console.log("Script start.")
const bucket = ['coffee', 'chips', "vegetables", "salt", "rice"];

const result = new Promise((resolve, reject) => {
    if (bucket.includes("rice") && bucket.includes("vegetables") && bucket.includes("salt")) {
        resolve({ value: "friedRice" });
    } else {
        reject(new Error("Can not make rice something is missing."));
    }
});

// result.then(
//     onfulfilled => console.log(onfulfilled, " now you can eat it."),
//     onrejected => console.log(onrejected)
// );
setTimeout(() => console.log("calling from setTimeout."))
result.then(
    onfulfilled => console.log("Ready to eat.", onfulfilled)
).catch(
    onrejected => console.log(onrejected)
);

for (let i = 0; i < 15; i++) {
    console.log(Math.floor(Math.random() * 10 + 1))
}

console.log("Script end.")