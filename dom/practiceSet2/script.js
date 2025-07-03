let body = document.querySelector("body");
let btn = document.createElement("button");
btn.innerText = "click me"; // Fixed typo ("clinck" → "click")
btn.style.backgroundColor = "red";
btn.style.color = "white";
body.prepend(btn); // Changed from append() to prepend() to add it FIRST

let para = document.querySelector("p");
para.classList.add("para2");