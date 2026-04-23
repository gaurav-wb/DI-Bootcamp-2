// Exercise 1 : is_Blank
// Instructions
// Write a program to check whether a string is blank or not.

// console.log(isBlank('')); --> true
// console.log(isBlank('abc')); --> false

function isBlank(str) {
    return str.length === 0;
}

console.log(isBlank(''));     
console.log(isBlank('abc'));  