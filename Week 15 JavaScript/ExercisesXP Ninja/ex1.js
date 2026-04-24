// Exercise 1: Random Number
// Instructions
// Get a random number between 1 and 100.
// Console.log all even numbers from 0 to the random number.

let randomNum = Math.floor(Math.random() *100) +1
// Math.random() → number between 0–0.999
// * 100 → range 0–99
// Math.floor(...) → removes decimals
// + 1 → shifts to 1–100 

for (let i = 0; i <= randomNum; i++) {
    if (i % 2 === 0) {
        console.log(i)
    }
}

// for loop → counts from 0 to randomNum
// i % 2 === 0 → checks even numbers
// console.log(i) → prints them