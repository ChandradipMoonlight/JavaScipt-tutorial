/**
 * Basics of AJAX
 * ----------------
 * AJAX => Asynchronous JavaScript and XML
 * it is set of web development technique.
 * using any technologies on the client side.
 * to create of the asynchronous web application.
 * 
 * With Ajax, web application send and request data from server asynchrously (in the background)
 * without interfering with the display and behaviour of the existing page
 * 
 * HTTP Request.
 * 
 * we do not use data in xml formate anymore we use json now.
 * 
 * we have 3 most common ways to create and send request to the server.
 * 1. xmlHTTPRequest (old may of doing),
 * 2. fetch API (new may of doing),
 * 3. axios (this is third party library).
 */


const url = "https://jsonplaceholder.typicode.com/posts";
const xhr = new XMLHttpRequest();

console.log("before opened : " + xhr.readyState);


xhr.open("GET", url);

// console.log("After Opened : " + xhr.readyState)

// xhr.onreadystatechange = () => {
//     if (xhr.readyState === 4) {
// console.log(xhr.response);
//         const responseData = xhr.response;
//         const jsObj = JSON.parse(responseData);
//         console.log(jsObj);

//     }
// }

xhr.onload = () => {
    if (xhr.status >= 200 && xhr.status < 300) {
        let response = JSON.parse(xhr.response);
        console.log(response);
        console.log(response[1]);
    }
}



xhr.send();