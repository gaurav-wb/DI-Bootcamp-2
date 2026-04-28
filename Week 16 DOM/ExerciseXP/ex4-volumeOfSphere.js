// ==========================
// 1. SELECT THE FORM
// ==========================

// We select the form using its ID "MyForm"
// This allows us to listen for when the user clicks "Calculate"
const form = document.getElementById("MyForm");


// ==========================
// 2. ADD SUBMIT EVENT
// ==========================

// We attach an event listener to the form
// "submit" happens when user clicks the submit button OR presses Enter
form.addEventListener("submit", function(event) {

  // ==========================
  // 3. STOP PAGE RELOAD
  // ==========================

  // By default, submitting a form reloads the page
  // We prevent that so we can handle everything in JavaScript
  event.preventDefault();


  // ==========================
  // 4. GET INPUT VALUE (RADIUS)
  // ==========================

  // We select the input field where user types radius
  const radiusInput = document.getElementById("radius");

  // The value from an input is ALWAYS a string
  // Example: "5" not 5
  const radius = parseFloat(radiusInput.value);
  // parseFloat converts string → number (including decimals)


  // ==========================
  // 5. VALIDATION (CHECK INPUT)
  // ==========================

  // We check if input is NOT a number or is invalid
  // isNaN = "is Not a Number"
  if (isNaN(radius) || radius <= 0) {

    // If invalid, show alert to user
    alert("Please enter a valid positive number");

    // Stop execution here
    return;
  }


  // ==========================
  // 6. CALCULATE VOLUME
  // ==========================

  // Formula: V = (4/3) × π × r³
  const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
  // Math.PI = value of π (3.14159...)
  // Math.pow(radius, 3) = radius³ (radius * radius * radius)


  // ==========================
  // 7. DISPLAY RESULT
  // ==========================

  // Select the output input field
  const volumeInput = document.getElementById("volume");

  // Set the calculated value inside the input box
  // toFixed(2) = round result to 2 decimal places
// Select output paragraph
const result = document.getElementById("result");

// Display the calculated volume inside the page
result.textContent = "Volume of sphere: " + volume.toFixed(2);
});