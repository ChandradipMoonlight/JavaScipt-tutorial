//small warnings


const user1 = {
    firstName: 'Chandradip',
    age: 21,
    about: function() {
        console.log(this.firstName, this.age);
    }
}

//don't do this mistakes
const func = user1.about;
func() // will give  => undefined undefined

//do this instead

const funct = user1.about.bind(user1);
funct();