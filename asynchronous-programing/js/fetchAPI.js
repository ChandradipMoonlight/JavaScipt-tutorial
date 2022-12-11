//fetch api

const url = "https://jsonplaceholder.typicode.com/posts";

fetch(url)
    .then(res => {
        if (res.ok) {
            return res.json();
        } else
            throw new Error("Something went wrong");
    })
    .then((response) => console.log(response))
    .catch((error) => console.log(error));