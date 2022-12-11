/**
 * setInterval(callback, time) => 
 *  it is used to call the function after every given time.
 */

console.log("Script start");

const id = setInterval(() => console.log(Math.random() * 10), 1000);

setTimeout(() => clearInterval(id), 2000);

console.log("Script end");