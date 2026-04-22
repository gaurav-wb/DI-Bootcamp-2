// 🌟 Exercise 2 : Tips
// Instructions
// John created a simple tip calculator to help calculate how much to tip when he and his family go to restaurants.

// Create a function named calculateTip() that takes no parameter.

// Inside the function, use prompt to ask John for the amount of the bill.

// Here are the rules
// If the bill is less than $50, tip 20%.
// If the bill is between $50 and $200, tip 15%.
// If the bill is more than $200, tip 10%.

// Console.log the tip amount and the final bill (bill + tip).

// Call the calculateTip() function.

function calculateTip() {
    let bill = Number(prompt("Enter bill amount:"));

    let tip = 0;

    if (bill < 50) {
        tip = bill * 0.2;
    } else if (bill >= 50 && bill <= 200) {
        tip = bill * 0.15;
    } else {
        tip = bill * 0.1;
    }

    console.log("Tip: $" + tip);
    console.log("Total bill: $" + (bill + tip));
}