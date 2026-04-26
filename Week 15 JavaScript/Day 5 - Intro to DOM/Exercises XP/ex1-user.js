// Using Javascript:
// Retrieve the div and console.log it
const container = document.getElementById("container")
console.log(container) 
//to view line 3 and 4 → inspect the website
// Change the name “Pete” to “Richard”.
const lists = document.querySelectorAll(".list")
lists[0].children[1].textContent = "Richard"

// Delete the <li> that contains the text node “Sarah”. (It’s the second <li> of the second <ul>)
lists[1].children[1].remove()
// Change each first name of the two <ul>'s to your name. (Hint : use a loop)
for (let ul of lists) {
    ul.firstElementChild.textContent= "Gaurav"
}
// Bonus - Using Javascript:
// Add a class called student_list to both of the <ul>'s.
for (let ul of lists) {
  ul.classList.add("student_list");
}

// Add the classes university and attendance to the first <ul>.
lists[0].classList.add("university", "attendance");