const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");

// write program to change text after 1 sec and color
function changeElement(element, text, color, time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (element) {
                element.textContent = text;
                element.style.color = color;
                resolve("Element Content : " + element.textContent);
            } else {
                reject("Can not find the element.");
            }
        }, time);
    });
}

const jadu = function() {
    changeElement(heading1, "ONE", "red", 1000)
        .then(() => changeElement(heading2, "TWO", "blue", 1000))
        .then(() => changeElement(heading3, "THREE", "green", 1000))
        .then(() => changeElement(heading4, "FOUR", "purple", 1000))
        .then(() => changeElement(heading5, "FIVE", "chocolate", 1000))
        .then(() => changeElement(heading6, "SIX", "purple", 1000))
        .then(() => changeElement(heading7, "SEVEN", "red", 1000))
        .catch((onrejected => prompt(onrejected)));
}