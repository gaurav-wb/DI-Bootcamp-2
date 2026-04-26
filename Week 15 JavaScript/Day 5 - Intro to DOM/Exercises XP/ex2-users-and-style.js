// Using Javascript:
// Add a “light blue” background color and some padding to the <div>.
// Do not display the <li> that contains the text node “John”. (the first <li> of the <ul>)
// Add a border to the <li> that contains the text node “Pete”. (the second <li> of the <ul>)
// Change the font size of the whole body.

// Bonus: If the background color of the div is “light blue”, alert “Hello x and y” (x and y are the users in the div).
let div = document.querySelector("div")
let ul = document.querySelector("ul")

//to style the div
div.style.backgroundColor = "lightblue"
div.style.padding = "20px"

ul.children[0].style.display = "none"
ul.children[1].style.border = "2px solid black"
document.body.style.fontsize = "20px"

if (div.style.backgroundColor === "lightblue") {
  const user1 = ul.children[0].textContent;
  const user2 = ul.children[1].textContent;
  alert("Hello " + user1 + " and " + user2);
}