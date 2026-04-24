// Exercise 4 : Biggest Number
// Instructions
// Create a function called biggestNumberInArray(arrayNumber) that takes an array as a parameter and returns the biggest number.
// Note : This function should work with any array;
// Example:

// const array = [-1,0,3,100, 99, 2, 99] ;// should return 100 
// const array2 = ['a', 3, 4, 2]; // should return 4 
// const array3 = []; // should return 0

function biggestNumberInArray(arrayNumber) {
    if (arrayNumber.length === 0) return 0;

    let max = -Infinity;

    for (let item of arrayNumber) {
        if (typeof item === "number" && item > max) {
            max = item;
        }
    }

    return max;
}
// empty array → return 0
// max = -Infinity → ensures any number is bigger
// loop through items
// typeof item === "number" → ignore non-numbers
// update max if bigger found
// return max
// Tests
console.log(biggestNumberInArray([-1,0,3,100,99,2,99]));
console.log(biggestNumberInArray(['a',3,4,2]));
console.log(biggestNumberInArray([]));
