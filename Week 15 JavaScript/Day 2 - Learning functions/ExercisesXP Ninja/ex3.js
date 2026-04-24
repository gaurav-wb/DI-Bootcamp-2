// Exercise 3 : Is palindrome?
// Instructions
// Write a JavaScript function that checks whether a string is a palindrome or not.
// Note A palindrome is a word, phrase or sequence that is spelled the same both backwards and forward, e.g., madam, bob or kayak.

function isPalindrome(str) {
    let reversed = str.split("").reverse().join("");
    return str === reversed;
}

console.log(isPalindrome("madam"));
// .split("") → string → array : "madam" → ["m","a","d","a","m"]
// .reverse() → reverse array → ["m","a","d","a","m"]
// .join("") → back to string : "madam"
// compare original vs reversed
// returns true or false :
// compares original and reversed
// if same → true
// if different → false
