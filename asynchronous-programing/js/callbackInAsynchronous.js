//callback, callback hell, pyramid of dom
// asynchronous programming.

// console.log("hello World");

// const getElement = document.querySelector(".heading1");

// setTimeout(() => {
//     getElement.textContent = "Heading 1";
//     getElement.style.color = "purple";
// }, 1000);


const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");


function changeElementContent(element, text, color, time, onSuccessCallBack, onFailureCallback) {
    setTimeout(() => {
        if (element) {
            element.textContent = text;
            element.style.color = color;
            if (onSuccessCallBack) {
                onSuccessCallBack();
            }
        } else if (onFailureCallback) {
            onFailureCallback();
        }
    }, time);
}

changeElementContent(heading1, "ONE", "violet", 1000, () =>
    changeElementContent(heading2, "TWO", 'green', 2000, () =>
        changeElementContent(heading3, "THREE", "red", 1000, () =>
            changeElementContent(heading4, "FOUR", "blue", 1000)
        ), () => console.log("Heading2 is not present.")
    ), () => console.log("Heading1 is not present.")
);