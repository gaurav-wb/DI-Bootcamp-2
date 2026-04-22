// 🌟 Exercise 2 : Your favorite colors
// Instructions
// Create an array called colors where the value is a list of your five favorite colors.
let colors = ["Black", "Dark Green", "Grey", "Navy Blue","White" ]
// Loop through the array and as you loop console.log a string like so: “My #1 choice is blue”, “My #2 choice is red” ect… .
for (let i=0; i < colors.length; i++) {  //i=0 means start at index 0; i<people.length means loop runs while i is less than total
                    //i++ means increase i  by 1 after each loop
    console.log("My #" + (i+1) + " choice is " + (colors[i]) ); //i+1 means i starts at zero but human counts from 1
}


// Bonus: Change it to console.log “My 1st choice”, “My 2nd choice”, “My 3rd choice”, picking the correct suffix for each number.
// Hint : create an array of suffixes to do the Bonus
console.log("Bonus part below:")

let suffix = ["st", "nd", "rd", "th", "th"];
for (let i=0; i < colors.length; i++) {
    console.log("My " + (i+1) + suffix[i] + " choice is " + colors[i]);
}