// Exercise 1 : Checking the BMI
// Instructions
// Hint:
// - You must use functions to complete this exercise, to do so take a look at tomorrow’s lesson.

// Create two objects, each object should hold a person’s details. Here are the details:
// FullName
// Mass
// Height

// Each object should also have a key which value is a function (ie. A method), that calculates the Body Mass Index (BMI) of each person

// Outside of the objects, create a JS function that compares the BMI of both objects.

// Display the name of the person who has the largest BMI.

let person1 = { //first person obj
    fullname: "Ramesss",
    mass: 75,
    height: 1.80,

    calculateBMI: function () {
        return this.mass / (this.height * this.height) //this.mass refers to mass inside this same obj
        //return --> sends bmi value back
    }
};

let person2 = {
    fullname: "Rajesss",
    mass: 245,
    height: 1.70,

    calculateBMI: function () {
        return this.mass / (this.height * this.height)
    }
};

function compareBMI(p1, p2) { //take two people as input; p1 and 2 are parametres
    let bmi1 = p1.calculateBMI(); //calls bmi for first person
    let bmi2 = p2.calculateBMI();

    if (bmi1 > bmi2) { //check who has higher
        console.log(p1.fullname + " has the higher BMI")
    } else if (bmi2 > bmi1) {
        console.log(p2.fullname + " has the higher BMI")
    } else {
        console.log("Both have the same BMI")
    }
}

compareBMI(person1, person2) //runs comparison
