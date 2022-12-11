// promise example2



function getResult(bucket) {
    return new Promise(
        (resolve, reject) => {
            setTimeout(() => {
                if (bucket.find(n => n % 2 == 0)) {
                    resolve(bucket.filter(n => n % 2 === 0));
                } else {
                    reject();
                }
            }, 1000);
        }
    );
}

const bucket = [1, 2, 3, 4, 5];

getResult(bucket).then(onfulfilled => console.log(onfulfilled))
    .catch(() => console.log("even number is not present"));