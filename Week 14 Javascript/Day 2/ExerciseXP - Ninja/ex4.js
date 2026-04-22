// Exercise 1 : Evaluation
// Instructions
// For each expression, predict what you think the output will be in a comment (//) without first running the command.
// Of course, explain each prediction.
// Then run the expression in the console. Note the actual output in a comment and compare it with your prediction.

// Evaluate the comparisons found below:

// Look at this link for help

//     5 >= 1
//     0 === 1
//     4 <= 1
//     1 != 1
//     "A" > "B"
//     "B" < "C"
//     "a" > "A"
//     "b" < "A"
//     true === false
//     true != true

console.log(0 ===1) //Prediction: false (strict equality, values differ)
console.log(4 <= 1) //Prediction: false (4 is not less or equal to 1)
console.log(5 >= 1) //Prediction: true (5 is greater than 1)
console.log( 1 != 1) //Prediction: false (both are equal)
console.log("A" > "B") //Prediction: false (A comes before B in ASCII/Unicode)
console.log("B" < "C") //Prediction: true (B comes before C)
console.log("a" > "A") // Prediction: true (lowercase has higher ASCII value than uppercase)
console.log("b" < "A") // Prediction: false (lowercase letters are "greater" than uppercase)
console.log(true === false) //Prediction: false (different boolean values)
console.log(true != true) //Prediction: false (same values)