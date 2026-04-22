// 🌟 Exercise 3 : Repeat the question
// Instructions
// Prompt the user for a number.
// Hint : Check the data type you receive from the prompt (ie. Use the typeof method)

// While the number is smaller than 10 continue asking the user for a new number.
// Tip : Which while loop is more relevant for this situation?
let num = prompt("Enter a number: ");

while (typeof num != "number" || num < 10 || isNaN(num)) { // ||means or 
    num = Number(prompt("Enter a valid number"))
    console.log(typeof num)
}
