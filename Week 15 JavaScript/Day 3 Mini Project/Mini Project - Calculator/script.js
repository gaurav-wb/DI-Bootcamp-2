// Select display from HTML
let display = document.getElementById("display");

// Stores the full expression (as a string)
let currentInput = "";

// Add number to display
function number(num) {
    currentInput += num;              // append number to string
    display.value = currentInput;     // update screen
}

// Add operator (+, -, *, /)
function operator(op) {
    // Prevent operator as first character
    if (currentInput === "") return;

    // Prevent double operators (e.g. 5++)
    let lastChar = currentInput[currentInput.length - 1];
    if (["+", "-", "*", "/"].includes(lastChar)) return;

    currentInput += op;               // append operator
    display.value = currentInput;     // update screen
}

// Calculate result
function equal() {
    try {
        let result = eval(currentInput);   // evaluate expression
        display.value = result;            // show result
        currentInput = result.toString();  // allow further operations
    } catch (error) {
        display.value = "Error";           // handle invalid input
        currentInput = "";
    }
}

// Remove last character (backspace)
function clearDisplay() {
    currentInput = currentInput.slice(0, -1); // remove last char
    display.value = currentInput;
}

// Reset everything
function resetCalc() {
    currentInput = "";   // clear stored expression
    display.value = "";  // clear display
}