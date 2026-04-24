// Exercise 1 : Play a guessing game
// Instructions
// Create a new folder on your computer.
// Clone or Download the index.html and style.css files from this github link.
// Follow the steps written below



// Steps
// Explanation of the game : the point of the game is to guess the number that the computer has in “mind”.

// First Part
// Create a JS file and link it to the index.html file.

// Take a look at your html file, you should have a button with an “onclick” event. This event is equal to the function playTheGame(). It means that when you will click on the button, the function playTheGame() will be called.
// We will learn more about events next week ;)


// Now let’s create the function:

// In the JS file, create a function called playTheGame() that takes no parameter.
// In the function, start by asking the user if they would like to play the game (Hint: use the built-in confirm() function).

// If the answer is false, alert “No problem, Goodbye”.

// If his answer is true, follow these steps:
// Ask the user to enter a number between 0 and 10 (Hint: use the built-in prompt() function). You then have to check the validity of the user’s number :

// If the user didn’t enter a number (ie. if he entered another data type) alert “Sorry Not a number, Goodbye”.
// If the user didn’t enter a number between 0 and 10 alert “Sorry it’s not a good number, Goodbye”.
// Else (ie. he entered a number between 0 and 10), create a variable named computerNumber where the value is a random number between 0 and 10 (Hint: Use the built-in Math.random() function). Make sure that the number is rounded.


// Second Part
// Outside of the playTheGame() function, create a new function named compareNumbers(userNumber,computerNumber) that takes 2 parameters : userNumber and computerNumber

// The point of this function is to check if the userNumber is the same as the computerNumber:
// If userNumber is equal to computerNumber, alert “WINNER” and stop the game.

// If userNumber is bigger than computerNumber, alert “Your number is bigger then the computer’s, guess again” (Hint: use the built-in prompt() function to ask the user for a new number).

// If userNumber is lower than computerNumber, alert “Your number is smaller then the computer’s, guess again” (Hint: use the built-in prompt() function to ask the user for a new number).

// If the user guessed more than 3 times, alert “out of chances” and exit the function.


// Bonus
// In the First Part, instead of stopping the process if the user didn’t enter a valid number. Continue asking for a number until the user enters a valid number.

function playTheGame() {
    let play = confirm("Do you want to play the game?")

    if (!play) {
        alert("No problem, Goodbye!")
        return; //close if blocked
    }

    let userNumber //declares variable and currently has no value

    do { //start loop
        userNumber = prompt("Enter a number between 0 and 10")
        userNumber = Number(userNumber)

        if (isNaN(userNumber)) {
            alert("Sorry Not a number")
        } else if (userNumber < 0 || userNumber > 10) { //checks if number is outside range 0–10
            alert("Sorry it's not a good number")
        }

    } while (isNaN(userNumber) || userNumber < 0 || userNumber > 10) //loops repeat if not a number OR outside range 

    let computerNumber = Math.floor(Math.random() * 11)
    // `Math.random()` → random decimal (0 to <1)  
    // `* 11` → range becomes 0 to <11  
    // `Math.floor()` → removes decimal  
    // result = integer from 0 to 10  

    compareNumbers(userNumber, computerNumber) //calls the function name(params)
}


function compareNumbers(userNumber, computerNumber) {

    let attempts = 0; //starts at zero

    while (attempts < 3) {

        if (userNumber === computerNumber) { //check if numbers are exactly equal
            alert("WINNER");
            return; //close function properly
        }

        attempts++; //increases attempt by 1 BEFORE next guess check

        if (attempts === 3) {
            alert("out of chances");
            return;
        }

        if (userNumber > computerNumber) { //check if user guess is too high
            userNumber = Number(prompt("Your number is bigger than the computer’s, guess again"));
        } else {
            userNumber = Number(prompt("Your number is smaller than the computer’s, guess again"));
        }

        // validate new input
        if (isNaN(userNumber)) {
            alert("Sorry Not a number");
            continue;
        }
    }

    alert("Out of chances");
}