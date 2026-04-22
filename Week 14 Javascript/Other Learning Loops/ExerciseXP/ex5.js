// 🌟 Exercise 5 : Family
// Instructions
// Create an object called family with a few key value pairs.
// Using a for in loop, console.log the keys of the object.
// Using a for in loop, console.log the values of the object.

family = {
    father: "Kishore",
    mother: "Mala",
    son: "Ricky"
}
for (let key in family) {
    console.log(key)
}

for (let key in family) {
    console.log(family[key])
}

//additionally self added; experimenting 
for (let key in family) {
    console.log(key + " : " + family[key])
}