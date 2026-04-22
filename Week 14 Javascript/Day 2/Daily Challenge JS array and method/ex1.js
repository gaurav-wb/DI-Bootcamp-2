// Exercise 1:
// Using this array :

// const fruits = ["Banana", "Apples", "Oranges", "Blueberries"];
// Remove Banana from the array.
// Sort the array in alphabetical order.
// Add “Kiwi” to the end of the array.
// Remove “Apples” from the array. Don’t use the same method as in part 1.
// Sort the array in reverse order. (Not alphabetical, but reverse the current Array i.e. [‘a’, ‘c’, ‘b’] becomes [‘b’, ‘c’, ‘a’])
// At the end you should see this outcome:
// ["Kiwi", "Oranges", "Blueberries"]

const fruits = ["Banana", "Apples", "Oranges", "Blueberries"];
console.log(fruits)

console.log(fruits.shift()) 
console.log(fruits) //banana removed

console.log(fruits.sort())

fruits.push("Kiwi")
console.log(fruits) //kiwi added

fruits.splice(0,1) //removed apple
console.log(fruits)

fruits.reverse()
console.log(fruits)

