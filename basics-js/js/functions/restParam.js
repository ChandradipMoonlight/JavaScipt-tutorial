const addAll = (a, ...c) => {
    console.log(a); //1
    console.log(c); // [2, 3, 4, 5] reset param will store
    let sum = 0;
    for(let val of c) {
        sum = sum + val;
    }
    return sum;
}

console.log(addAll(1, 2,3,4,5));