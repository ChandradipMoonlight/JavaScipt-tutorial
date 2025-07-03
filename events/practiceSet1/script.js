

let btn = document.querySelector("button");

let body = document.querySelector("body");

let id = "dark"

let buttonText = "Switch to Dark Light Mode";

btn.addEventListener("click", ()=> {
    body.setAttribute("id", id);
    btn.innerText = buttonText;
    if(id == "dark") {
        id = "light";
        buttonText = "Switch to Dark Dark Mode";
    } else {
        id = "dark";
        buttonText = "Switch to Dark Light Mode";
    }
})