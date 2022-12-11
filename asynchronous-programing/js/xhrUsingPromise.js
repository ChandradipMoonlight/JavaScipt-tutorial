const url = "https://jsonplaceholder.typicode.com/posts";
const getByIdURI = "https://jsonplaceholder.typicode.com/comments?postId=1"
const xhr = new XMLHttpRequest();

function sedRequest(method, url) {

    return new Promise((resolve, reject) => {
        xhr.open(method, url);
        xhr.onload = () => {
            if (xhr.status >= 200 && xhr.status < 300) {
                let response = JSON.parse(xhr.response);
                resolve(response);
            } else {
                reject(new Error("Something went wrong"));
            }
        }
        xhr.onerror = () => console.log("Error in getting data.")
        xhr.send();
    });
}

sedRequest("GET", url)
    .then(onfulfilled => onfulfilled)
    // .then(onfulfilled => console.log(onfulfilled))
    .then(onfulfilled => onfulfilled[1].id)
    .then(id => sedRequest("GET", `${url}/${id}`))
    .then(response => console.log(response))
    .catch(onrejected => console.log(onrejected));