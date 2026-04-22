// Exercise 3 : Verbing
// Instructions
// Prompt the user for a string. It must be a verb. --> A
// If the length of the string is at least 3 and the string doesn’t end with “ing”, add “ing” to the end of the string. --> B
// If the length of the string is at least 3 and the string ends with “ing” add “ly” to it’s end. --> C
// If the length of the string is less than 3, leave it unchanged.  --> D

let verb = prompt("Enter a verb:"); //A
if (verb.length < 3) { 
    alert(verb); //D
} else if (verb.length >= 3 && verb.endsWith("ing")) {
    alert(verb + "ly") //C
} else if (verb.length >= 3) {

    alert(verb + "ing")
}