

let btn = document.querySelector("#btn1");

let handler1 = (e) => console.log("button was clicked 1");
let handler2 = (e) => console.log("button was clicked 2");

let handler3 = (e) => console.log("button was clicked 3");

btn.addEventListener("click", (event) => {
    console.log(event);
    console.log("Button was clicked")
    console.log("event Type = ", event.type);
    console.log("Event Target = ", event.target);
});

btn.addEventListener("click", handler1);
btn.addEventListener("click", handler2);
btn.addEventListener("click", handler3);

btn.removeEventListener("dblclick", handler1);