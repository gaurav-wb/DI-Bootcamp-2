// Exercise 1 : Age difference
// Instruction
// Given the years two people were born, find the date when the younger one is exactly half the age of the older.
// Notes: The dates are given in the format YYYY

//workings:
// let older = y1
//let younger = y2
//age difference = y2 - y1
// at year x: conditon is yoounger = 1/2 older 
//older = x - y1 ---->  equation 1
// younger = x - y2  ----> equation 2 
// so we equate equation for older and younger together : equation 2 = equation 1 
// x - y2 = (x - y1) / 2 
// cut and slice you'll get x=2y2 - y1 

let y1 = 2006;
let y2 = 2007
let x = 2*y2 - 1 
console.log(x)

//self add to see age of the two
let ageOlder = x - y1
let ageYounger = x - y2
console.log(ageOlder)
console.log(ageYounger)