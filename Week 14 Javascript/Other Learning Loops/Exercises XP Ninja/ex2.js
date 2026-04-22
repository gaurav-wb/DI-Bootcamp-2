// Exercise 2 : Grade Average
// Instructions
// Hint:
// - This Exercise is trickier then the others. You have to think about its structure before you start coding.
// - You must use functions to complete this exercise, to do so take a look at tomorrow’s lesson.

// In this exercise we will be creating a function which takes an array of grades as an argument and will console.log the average.

// Create a function called findAvg(gradesList) that takes an argument called gradesList.

// Your function must calculate and console.log the average.

// If the average is above 65 let the user know they passed

// If the average is below 65 let the user know they failed and must repeat the course.
// Bonus Try and split parts 1,2 and 3,4 of this exercise to two separate functions.
// Hint One function must call the other.
function calculateAverage(gradesList) { //takes array of grades
  let sum = 0; //stores total

  for (let i = 0; i < gradesList.length; i++) {
    sum = sum + gradesList[i]; // Adds each grade to total
  }

  return sum / gradesList.length;  //Calculates average and sends result back
}

function findAvg(gradesList) { 
  let average = calculateAverage(gradesList); // calls fisrt function and stores result

  console.log("Average:", average); //shows avg

  if (average > 65) {
    console.log("You passed");
  } else {
    console.log("You failed and must repeat the course");
  }
}

// test
findAvg([70, 80, 90, 60]);