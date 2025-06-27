
const employees = [
    {"firstName" : "Chandradip", "age" : 27, "salary" : 75000},
    {"firstName" : "Ravin", "age" : 25, "salary" : 85000},
    {"firstName" : "Sachin", "age" : 22, "salary" : 78000},
    {"firstName" : "Ram", "age" : 28, "salary" : 85000},
    {"firstName" : "Krishna", "age" : 23, "salary" : 65000},
    {"firstName" : "Chaitnya", "age" : 24, "salary" : 55000},
]


// for(let employee of employees) {
//     console.log(employee.age);
// }

// for(let index in employees) {
//     console.log(employees[index].salary)
// }

let totalSalary  = employees.map(emp => emp.salary).reduce((accumulator, currentEle) => accumulator+currentEle);
console.log(`Total salary : ${totalSalary}`);

//calculate total salary of those employee whose age is greater than 25

const t_salary = employees.filter(emp => emp.age >= 25).reduce((previousPrice, currentElementPrice) => {
    return previousPrice + Number(currentElementPrice.salary);
}, 0)

console.log(`total salary employees whose age is grater than 25 = ${t_salary}`)

const numArray = [1, 2, 3, 4, 5];

const copy_numArray = numArray.slice(-2);

console.log(copy_numArray);