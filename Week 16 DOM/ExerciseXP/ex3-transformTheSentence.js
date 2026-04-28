// In the JS file:

// Declare a global variable named allBoldItems.

// Create a function called getBoldItems() that takes no parameter. This function should collect all the bold items inside the paragraph and assign them to the allBoldItems variable.

// Create a function called highlight() that changes the color of all the bold text to blue.

// Create a function called returnItemsToDefault() that changes the color of all the bold text back to black.

// Call the function highlight() on mouseover (ie. when the mouse pointer is moved onto the paragraph), and the function returnItemsToDefault() on mouseout (ie. when the mouse pointer is moved out of the paragraph). Look at this example





// Declare global variable to store all <strong> elements
let allBoldItems;

// ==========================
// Collect bold items
// ==========================
function getBoldItems() {
  // Select all <strong> inside <p>
  allBoldItems = document.querySelectorAll("p strong");
}

// ==========================
// Highlight bold text (blue)
// ==========================
function highlight() {
  for (let i = 0; i < allBoldItems.length; i++) {
    
    allBoldItems[i].style.color = "blue";
  }
}

// ==========================
// Reset bold text (black)
// ==========================
function returnItemsToDefault() {
  for (let i = 0; i < allBoldItems.length; i++) {
    allBoldItems[i].style.color = "black";
  }
}

// ==========================
// Attach events
// ==========================
const paragraph = document.querySelector("p");

// IMPORTANT: collect bold items BEFORE using them
getBoldItems();

// Mouse over → highlight
paragraph.addEventListener("mouseover", highlight);

// Mouse out → reset
paragraph.addEventListener("mouseout", returnItemsToDefault);