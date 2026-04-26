
let navdiv = document.getElementById("navBar");

// Change id
navdiv.setAttribute("id", "socialNetworkNavigation");

// Create new <li> and text
let newlist = document.createElement("li");
let text = document.createTextNode("Logout");

// Append text to <li>
newlist.appendChild(text);

// Get the <ul> (still works because navdiv reference is already stored)
let ul = navdiv.querySelector("ul");

// Append new <li> to <ul>
ul.appendChild(newlist);

// Get first and last <li>
const firstLi = ul.firstElementChild;
const lastLi = ul.lastElementChild;

// Log the actual link text (FIXED: target <a>, not <li>)
console.log(firstLi.firstElementChild.textContent);
console.log(lastLi.firstElementChild.textContent);