// Exercise 2 : Zip codes
// Instruction
// Harder exercise
// Hint : This exercise has 2 parts. First, do this exercise without Regular Expressions, then do it using Regular Expressions

// While working in a Post Office you must have the clients’ zip code in order to send them their letters.
// Ask the client for their zip code and console.log “success” or “error” based on the following rules.
// Zip codes consists of 5 numbers
// Must only contain numbers
// Must not contain any whitespace (spaces)
// Must not be greater than 5 digits in length

let zipcode = prompt("Enter your Zip code")
if (
    !isNaN(zipcode) &&
    zipcode.length === 5 && 
    !zipcode.includes(" ")
    ) {
        alert("Success")
    } else {
        alert("Error")
    }