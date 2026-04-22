// Exercise 7 : Secret Group
// Instructions
// const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
// A group of friends have decided to start a secret society. The society’s name will be the first letter of each of their names sorted in alphabetical order.
// Hint: a string is an array of letters
// Console.log the name of their secret society. The output should be “ABJKPS”

const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
names.sort()
// console.log(names) ---> uncomment to check sorting

let secretSocietyName = "" //empty string --> this will store the final result 
for (let i=0; i< names.length; i++) {
    secretSocietyName += names[i][0]
}

console.log(secretSocietyName)