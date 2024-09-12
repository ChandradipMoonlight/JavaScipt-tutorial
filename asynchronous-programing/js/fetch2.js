
// ceate data => post api 

const POST_URL = "https://jsonplaceholder.typicode.com/posts";

fetch(POST_URL, {
    method : "POST",
    body : JSON.stringify({
        title : "test title",
        body : "testing create data [POST API] sending request body",
        userId : 12334567
    }),
    headers : {
        "content-type" : "application/json"
    },
})
.then(response => {
    if(response.ok) {
        return response.json();
    } else {
        throw new Error("Somthig went Wrong");
    }
}).then(
    success => console.log(success),
    error => console.error(error)
);