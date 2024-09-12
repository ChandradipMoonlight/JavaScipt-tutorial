
// fetch all post using async and await using arrow function 

const POST_URL = "https://jsonplaceholder.typicode.com/posts";

const getAllPost = async url => {
    const result = await fetch(url);
    if(result.ok) {
        return await result.json();
    } else {
        throw new Error("Something went wrong");
    }
}

getAllPost(POST_URL)
.then(response => {
    console.log(response);
})
.catch(error => console.error(error));
