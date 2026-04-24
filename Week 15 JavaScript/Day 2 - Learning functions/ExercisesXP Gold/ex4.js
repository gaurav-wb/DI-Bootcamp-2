// Exercise 4 : Omnipresent value
// Instructions
// Create a function that determines whether an argument is omnipresent for a given array.
// A value is omnipresent if it exists in every subarray inside the main array.
// To illustrate:

// [[3, 4], [8, 3, 2], [3], [9, 3], [5, 3], [4, 3]]
// // 3 exists in every element inside this array, so is omnipresent.
// Examples

function isOmnipresent(arr, value) {
    for (let subArray of arr) {
        if (!subArray.includes(value)) {
            return false;
        }
    }
    return true;
}

// Tests
console.log(isOmnipresent([[1,1],[1,3],[5,1],[6,1]], 1)); 
console.log(isOmnipresent([[1,1],[1,3],[5,1],[6,1]], 6)); 