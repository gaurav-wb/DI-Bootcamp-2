// 🌟 Exercise 1 : List of people
// Instructions
// const people = ["Greg", "Mary", "Devon", "James"];
const people = ["Greg", "Mary", "Devon", "James"];
//console.log(people) ---> uncomment to check

// Part I - Review about arrays
// Write code to remove “Greg” from the people array.
people.shift()
//console.log(people) ---> uncomment to check

// Write code to replace “James” to “Jason”.
people.splice(2,1,"Jason")
//console.log(people) ---> uncomment to check


// Write code to add your name to the end of the people array.
people.push("Gaurav")
console.log(people)



// Write code that console.logs Mary’s index. take a look at the indexOf method on Google.
console.log(people.indexOf("Mary"))




// Write code to make a copy of the people array using the slice method.
// The copy should NOT include “Mary” or your name.
// Hint: remember that now the people array should look like this const people = ["Mary", "Devon", "Jason", "Yourname"];
// Hint: Check out the documentation for the slice method
let peopleCopy = people.slice(1,3) // 1 is included but 3 is not included 
console.log(peopleCopy)



// Write code that gives the index of “Foo”. Why does it return -1 ?
console.log(people.indexOf("Foo")) //return -1 because the array does not contain "Foo"

// Create a variable called last which value is the last element of the array.
// Hint: What is the relationship between the index of the last element in the array and the length of the array?
let last = people.slice(3)
console.log(last)

// Part II - Loops
// Using a loop, iterate through the people array and console.log each person. 🥲
// Using a loop, iterate through the people array and exit the loop after you console.log “Devon” .
// Hint: take a look at the break statement in the lesson.
for (let i=0; i < people.length; i++) {
    console.log(people[i]) // till now it prints mary,devon,jason,gaurav 
    if (people[i]=== "Devon") {
        break; // now it prints only mary and devon 
    }
    }

