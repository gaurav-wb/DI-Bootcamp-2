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
    let billAmount = Number(prompt("Enter amount of the bill"));

    let tipAmount = 0;

    if (billAmount < 50) {
        tipAmount = billAmount * 0.2;
    } else if (billAmount >= 50 && billAmount <= 200) {
        tipAmount = billAmount * 0.15;
    } else {
        tipAmount = billAmount * 0.1;
    }

    alert("Tip amount: $" + tipAmount);
    alert("Total Bill: $" + (billAmount + tipAmount))
}
calculateTip();