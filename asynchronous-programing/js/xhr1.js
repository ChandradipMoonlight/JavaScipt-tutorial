const BASE_URL = "https://jsonplaceholder.typicode.com";

const FETCH_ALL_POST_URL = `${BASE_URL}/posts`;

const xhr = new XMLHttpRequest();
xhr.open("GET", FETCH_ALL_POST_URL);

xhr.onload = () => {
    if(xhr.status>=200 && xhr.status<300) {
        const data = JSON.parse(xhr.response);
        console.log(data);
    }
}

xhr.onerror = () => {
    console.log(new Error("Somting went wrong!"));
}

xhr.send();

