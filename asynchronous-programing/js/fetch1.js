// fetch all post


const POST_URL = "https://jsonplaceholder.typicode.com/postss";

fetch(POST_URL)
.then(response => {
    if(response.ok) {
        return response.json()
    } else {
        throw new Error("Somthing went wrong!");
    }
})
// .then(res => res.find(post => post.id ===1))
.then(
    onSuccess => console.log(onSuccess),
    onErrror => console.log(onErrror)
);