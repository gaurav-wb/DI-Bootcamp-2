// Exercise 2: Capitalized letters
// Instructions
// Create a function that takes a string as an argument.
// Have the function return:
// The string but all letters in even indexes should be capitalized.
// The string but all letters in odd indexes should be capitalized.
// Note:

// Index 0 will be considered even.
// The argument of the function should be a lowercase string with no spaces.
// For example,

// capitalize("abcdef") will return ['AbCdEf', 'aBcDeF']

function capitalize(str) {
    let even = "";
    let odd = "";

    for (let i = 0; i < str.length; i++) {
        if (i % 2 === 0) {
            even += str[i].toUpperCase();
            odd += str[i].toLowerCase();
        } else {
            even += str[i].toLowerCase();
            odd += str[i].toUpperCase();
        }
    }

    return [even, odd];
}

console.log(capitalize("abcdef"));