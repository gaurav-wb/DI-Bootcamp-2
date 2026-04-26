// Exercise 4 : My Book List
// Instructions
// Take a look at this link for help.

// The point of this challenge is to display a list of two books on your browser.

// In the body of the HTML page, create an empty div:
// <div class="listBooks"></div>
// In the js file, create an array called allBooks. This is an array of objects. Each object is a book that has 4 keys (ie. 4 properties) :
// title,
// author,
// image : a url,
// alreadyRead : which is a boolean (true or false).

// Initiate the array with 2 books of your choice (ie. Add manually 2 books objects in the array)
// Requirements : All the instructions below need to be coded in the js file:
// Using the DOM, render the books inside an HTML table (the HTML table must be added to the <div> created in part 1).
// For each book :
// You have to display the book’s title and the book’s author.
// Example: HarryPotter written by JKRolling.
// The width of the image has to be set to 100px.
// If the book is already read. Set the color of the book’s details to red.


const allBooks = [
  {
    title: "Atomic Habits",
    author: "James Clear",
    image: "https://m.media-amazon.com/images/I/91bYsX41DVL.jpg",
    alreadyRead: true
  },
  {
    title: "Rich Dad Poor Dad",
    author: "Robert Kiyosaki",
    image: "https://m.media-amazon.com/images/I/81bsw6fnUiL.jpg",
    alreadyRead: false
  }
];

const div = document.querySelector(".listBooks");

// Create table
const table = document.createElement("table");

allBooks.forEach(book => {
  const row = document.createElement("tr");

  const details = document.createElement("td");
  details.textContent = `${book.title} written by ${book.author}`;

  const imgCell = document.createElement("td");
  const img = document.createElement("img");
  img.src = book.image;
  img.style.width = "100px";

  imgCell.appendChild(img);

  // If already read → red
  if (book.alreadyRead) {
    details.style.color = "red";
  }

  row.appendChild(details);
  row.appendChild(imgCell);
  table.appendChild(row);
});

div.appendChild(table);