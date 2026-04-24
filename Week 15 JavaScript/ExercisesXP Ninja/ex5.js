// Exercise 5: Unique Elements
// Instructions
// Write a JS function that takes an array and returns a new array with only unique elements.

// Example list=[1,2,3,3,3,3,4,5] newList = [1,2,3,4,5]
// Example list=[1,2,3,3,3,3,4,5] newList = [1,2,3,4,5]

function uniqueArray(arr) {
    let result = []; //empty array to store unique values

    for (let item of arr) {
        if (!result.includes(item)) { // check: “is this item NOT already in result?” → ! means “not”
            result.push(item); //add item only if it’s not already there
        }
    }

    return result; //return final array with duplicates removed
}

console.log(uniqueArray([1,2,3,3,3,4,5]));