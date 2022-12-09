//call(), apply() and bind()


const user1 = {
    firstName: "Chandradip",
    age: 23,
    about: function(hobby, music) {
        console.log(this.firstName, this.age, hobby, music);
    }
}

const user2 = {
    firstName: "Mohit",
    age: 22,
}

const about1 = function() {
    console.log(this.firstName, this.age);
}

user1.about();
//call() method is used to call another abject parameters by passing that another object call() method

user1.about.call(user2, "reading", "Mangal"); // outPut => Mohit 22

about1.call(user1);


//apply() _____________

// it is same as the call() method only the difference is that we can pass extra args in the form of array.

user1.about.apply(user2, ["Guitar", "devotional songs"]);

//---------- bind() _____

//bind() method returns functions

const func = user1.about.bind(user1, "playing", "bach");
func();