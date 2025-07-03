
// const headingObject = document.getElementById("heading");

// console.dir(headingObject);
// console.log(headingObject)
// let privousHeading = headingObject.innerText;
// headingObject.innerText = "Heading changed"


// const documents = document.getElementsByClassName("heading-class");

// console.dir(documents)


// console.log("access elements by tag");

// let paras = document.getElementsByTagName("p");

// console.log(paras);

//! query selector 
//? document.querySelector("#id/.class/tag") => will return first match element
//? document.querySelectorAll(#id/.class/tag) => will retrun all elements as NodeList

let firstParaEle = document.querySelector("p");
console.log(firstParaEle);

let allParaEle = document.querySelectorAll("p");
console.log(allParaEle);

let firstHeadings = document.querySelector(".heading-class");
console.log(firstHeadings);

let allHeadings = document.querySelectorAll(".heading-class");
console.log(allHeadings);


let body = document.querySelector("body");
console.log("called first Para")
console.log(body);