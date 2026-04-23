// Exercise 2 : Abbrev_name
// Instructions
// Write a JavaScript function to convert a string into an abbreviated form.

// console.log(abbrevName("Robin Singh")); --> "Robin S."

function abbrevName(name) {
    let parts = name.split(" ");
    return parts[0] + " " + parts[1][0] + ".";
}  //parts[1][0] means takes first letter of last name 


console.log(abbrevName("Robin Singh")); 