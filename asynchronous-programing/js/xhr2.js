
const BASE_URL = "https://jsonplaceholder.typicode.com";

const FETCH_ALL_POST_URL = `${BASE_URL}/posts`;

function apiManager(apiMethod, url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(apiMethod, url);
        xhr.onload = () => {if(xhr.status>=200 && xhr.status<300) {
            resolve(JSON.parse(xhr.response));
            } else {
            reject(new Error("Somthing Went Wrong"));
            }
        }
        xhr.onerror = () => {
            resolve(new Error("Somthing went wrong"));
        }
        xhr.send();
    });
}

const fetchAllApi = apiManager("GET", FETCH_ALL_POST_URL);

fetchAllApi
    .then(response => {
            console.log("Response of Fetch All Post : ")
            console.log(response);
            return response[0].id;
    })
    .then(id => {
        console.log("post id "+id);
        const FETCH_BY_ID_URL = `${FETCH_ALL_POST_URL}/${id}`;
        console.log("Fetch by id url : "+ FETCH_BY_ID_URL);
        return apiManager("GET", FETCH_BY_ID_URL);
    })
    .then(response => {
        console.log("Fetch By Id resposne : ")
        console.log(response);
    })
    .catch(onError => console.log(onError));