const GET_POST_URL = "https://jsonplaceholder.typicode.com/posts";

const xhr = new XMLHttpRequest();

console.log(xhr.readyState); // 0: UNSENT

// Open a new request
xhr.open("GET", GET_POST_URL);

console.log(xhr.readyState); // 1: OPENED

// Define what happens when the request state changes


// Send the request
xhr.send();

let data;
xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) { 
        console.log(xhr.readyState);
        // 4: DONE and status 200: OK
        const response = xhr.responseText;
        data = JSON.parse(response);
        console.log(data);
    }
};

