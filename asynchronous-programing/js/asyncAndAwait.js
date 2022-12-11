const url = "https://jsonplaceholder.typicode.com/posts";

// async function getPosts() {
//     const response = await fetch(url);
//     const data = await response.json();

//     return data;
// }


const getPosts = async() => {
    const response = await fetch(url);
    if (response.ok) {
        return await response.json();
    } else {
        throw new Error("Something went wrong!");
    }
}

getPosts()
    .then(response => console.log(response))
    .catch((err) => console.log(err));