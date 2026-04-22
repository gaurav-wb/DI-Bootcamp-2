// Exercise 6 : Rudolf
// Instructions
// const details = {
//   my: 'name',
//   is: 'Rudolf',
//   the: 'reindeer'
// }
// Given the object above and using a for loop, console.log “my name is Rudolf the reindeer”
const details = {
  my: 'name',
  is: 'Rudolf',
  the: 'reindeer'
}
let sentence = ""
for (let key in details) { // for..in gives you keys one by one
    sentence += key + " " + details[key]+ " "  //details[key] gives you the key and the value
} // sentence += ---> Take what is already inside sentence, add something to it, then store it back into sentence
// +=  means add to what already exists 
console.log(sentence);
