// // Using a DOM property, retrieve the h1 and console.log it.
// let h1 = document.querySelector("h1")
// console.log(h1)
// // Using DOM methods, remove the last paragraph in the <article> tag.
// let article = document.querySelector("article")
// article.lastElementChild.remove()
// // Add a event listener which will change the background color of the h2 to red, when it’s clicked on.
// let h2 = document.querySelector("h2")
// h2.addEventListener("click", function(){
//     h2.style.backgroundColor = "red"
// })

// // Add an event listener which will hide the h3 when it’s clicked on (use the display:none property).
// let h3 = document.querySelector("h3")
// h3.addEventListener("click", function(){
//     h3.style.display = "none"
// })

// // Add a <button> to the HTML file, that when clicked on, should make the text of all the paragraphs, bold.
// let button = document.createElement("button")
// button.textContent = "Make paragraphs bold"
// //now we add the button using append
// document.body.appendChild(button)
// button.addEventListener("click", function(){
//     let paragraphs = document.querySelectorAll("p")
//     for (let i=0; i <paragraphs.length; i++) {
//         paragraphs[i].style.fontWeight = "bold"
//     }
// })

// // BONUS : When you hover on the h1, set the font size to a random pixel size between 0 to 100.(Check out this documentation)
// h1.addEventListener("mouseover", function() {

//   // Generate random number between 0 and 100
//   const randomSize = Math.floor(Math.random() * 101);

//   // Apply as font size in px
//   h1.style.fontSize = randomSize + "px";
// });

// // BONUS : When you hover on the 2nd paragraph, it should fade out (Check out “fade css animation” on Google)
// const allParagraphs = document.querySelectorAll("p");

// if (allParagraphs.length > 1) {
//   const secondPara = allParagraphs[1];

//   secondPara.addEventListener("mouseover", function() {
//     secondPara.style.transition = "opacity 0.5s";
//     secondPara.style.opacity = "0";
//   });
// }

const h1 = document.querySelector("h1");
console.log(h1);

const article = document.querySelector("article");
if (article && article.lastElementChild) {
  article.lastElementChild.remove();
}

const h2 = document.querySelector("h2");
if (h2) {
  h2.addEventListener("click", function () {
    h2.style.backgroundColor = "red";
  });
}

const h3 = document.querySelector("h3");
if (h3) {
  h3.addEventListener("click", function () {
    h3.style.display = "none";
  });
}

// Button
const button = document.createElement("button");
button.textContent = "Make paragraphs bold";
document.body.appendChild(button);

button.addEventListener("click", function () {
  const paragraphs = document.querySelectorAll("p");
  for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.fontWeight = "bold";
  }
});

// Hover h1
if (h1) {
  h1.addEventListener("mouseover", function () {
    const randomSize = Math.floor(Math.random() * 101);
    h1.style.fontSize = randomSize + "px";
  });
}

// Fade 2nd paragraph safely
const allParagraphs = document.querySelectorAll("p");
if (allParagraphs.length > 1) {
  const secondPara = allParagraphs[1];

  secondPara.addEventListener("mouseover", function () {
    secondPara.style.transition = "opacity 0.5s";
    secondPara.style.opacity = "0";
  });
}