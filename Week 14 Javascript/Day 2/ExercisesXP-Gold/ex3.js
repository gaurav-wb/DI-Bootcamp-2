// Exercise 3 : Calculator
// Instructions
// Make a Calculator. Follow the instructions:

// Prompt the user for the first number.
// Store the first number in a variable called num1.
// Hint : console.log the type of the variable num1. What should you do to convert it to a number ?
// Prompt the user for the second number.
// Store the second number in a variable called num2.
// Create an Alert where the value is the SUM of num1 and num2.
// BONUS: Make a program that can subtract, multiply, and also divide!

let num1 = prompt("Enter a Number");
console.log(typeof num1)

num1 = Number(num1)

let num2 = prompt("Enter a second number")
num2 = Number(num2)

alert("Sum: " + (num1 + num2));
alert("Difference: " + (num1 - num2));
alert("Product: " + (num1 * num2));
alert("Division: " + (num1 / num2));