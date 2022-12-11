// Promise.resolve();
// note => then() method always return promise.
// hence we can create promise chaining
Promise.resolve("Ram")
    .then(onfulfilled => {
        console.log(onfulfilled);
        return "Sita " + onfulfilled;
    })
    .then(onfulfilled => console.log(onfulfilled));