
// Retrieve the form and console.log it.
let form = document.querySelector("form")
console.log(form)

// Retrieve the inputs by their id and console.log them.
let fname = document.getElementById("fname")
let lname = document.getElementById("lname")
console.log(fname, lname)

// Retrieve the inputs by their name attribute and console.log them.
let firstNameInput = document.getElementsByName("firstname")[0] //[0] to access first element of first name
let lastNameInput = document.getElementsByName("lastname")[0] //[0] to access first element of last name
console.log(firstNameInput, lastNameInput)


// When the user submits the form (ie. submit event listener)
// use event.preventDefault(), why ?
// get the values of the input tags,
// make sure that they are not empty,
// create an li per input value,
// then append them to a the <ul class="usersAnswer"></ul>, below the form.
// The output should be :

// <ul class="usersAnswer">
//     <li>first name of the user</li>
//     <li>last name of the user</li>
// </ul

form.addEventListener("submit", function () {
    event.preventDefault() //prevent page refresh and data from disappering
    //get values by user
    let firstNameValue = fname.value.trim()
    let lastNameValue = lname.value.trim()
  // Validate inputs (no empty strings)
  if (firstNameValue === "" || lastNameValue === "") {
    alert("Please fill in both fields");
    return; // stop execution
  }

  let ul = document.querySelector(".usersAnswer")
  let list1 = document.createElement("li")
  list1.textContent = firstNameValue
  let list2 = document.createElement("li")
  list2.textContent = lastNameValue
ul.appendChild(list1)
ul.appendChild(list2)

})



