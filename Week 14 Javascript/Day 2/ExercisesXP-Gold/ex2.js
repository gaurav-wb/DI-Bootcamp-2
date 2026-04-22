// Exercise 2 : Mixup
// Instructions
// Create 2 variables. The values should be strings. For example:
// let str1 = "mix";
// let str2 = "pod";


// 2. Slice out and swap the first 2 characters of the two strings from part 1.


// 3. Create a third variable where the value is the concatenation of the two strings from the part 1 (separated by a space).


// 4. Finally console.log the new concatenated string.
let str1 = "mix";
let str2 = "pod";
let newstr1 = str2.slice(0,2) + str1.slice(2);
let newstr2 = str1.slice(0,2) + str2.slice(2);
let result = newstr1 + " " + newstr2
console.log(result);