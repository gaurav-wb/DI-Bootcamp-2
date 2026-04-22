// Exercise 3 : Secret word
// Instruction
// Harder exercise
// Hint : Use Regular Expressions

// Prompt the user for a word and save it to a variable.
// Delete all the vowels of the word and console.log the result.
// Bonus: Replace the vowels with another character and console.log the result

let word = prompt("Enter a word:")
let result = word.replace(/[aeiou]/gi, "");
alert(result);

// explanation 
// .replace() --> This function replaces parts of a string. --> Syntax: --> string.replace(pattern, replacement)
// /[aeiou]/gi --> [aeiou match any vowel from the list]; [ g is global meanss replace all, not just first] 
//                      i means case-insensitive A=a 

/// now for the bonus part

let word2 = prompt("Enter another Word");
let result2 = word2
    .replace(/a/gi, "1")
    .replace(/i/gi, "2")
    .replace(/e/gi, "3")
    .replace(/o/gi, "4")
    .replace(/u/gi, "5");
alert(result2)

