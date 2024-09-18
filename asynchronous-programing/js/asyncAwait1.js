
// aysnc return promise

// fetch all post using async and await using function declaration


const POST_URL = "https://jsonplaceholder.typicode.com/postss";


async function getAllPost(url) {
    const response = await fetch(url);
    if(response.ok) {
        return await response.json();
    } else {
        throw new Error("Somthing went wrong")
    }
}

getAllPost()
.then(response => console.log(response))
.catch(error => console.log(error));
