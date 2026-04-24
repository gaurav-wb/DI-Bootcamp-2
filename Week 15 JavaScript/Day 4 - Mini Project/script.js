// Create a hangman game:
// Instructions:
// Create the “Hangman” game. Your game will run in the console.
// You need to guess a hidden word. Each letter you guess will appear in the console. You have 10 chances before you lose the game.

// Check it out here

// Prompt player 1 for a word. The word must have a minimum of 8 letters. Present the word in the console with stars (********).
// At this point continuously prompt player 2 for a letter.
// If the letter is in the word chosen by player 1, display the word in stars again but with the correct letter (*****t**).
// If the letter appears in the word multiple times, make sure it is seen in all the correct places when showing the stars with the correct guesses (***t**t*).
// If player 2 guesses incorrectly 10 times display a message in the console saying YOU LOSE.
// Show a list of all the guesses after each turn. In your code prevent player 2 from guessing the same letter twice.
// If player 1 wins, display a message that says CONGRATS YOU WIN.

let word; // Creates a variable to store the secret word
do {
    word = prompt("Player 1: Enter a word (min 8 letters)").toUpperCase();
} while (!word || word.length < 8);

let hiddenWord = "*".repeat(word.length);
// "*" → a single star
// .repeat(word.length) → repeat it same number of times as letters

let attempts = 0;
let maxAttempts = 10;
let guessedLetters = [] //empty array to store guesses 

while (attempts < maxAttempts && hiddenWord !== word) {
    alert("Word: " + hiddenWord + "\nGuesses: " + guessedLetters.join(", "))
    // \n means print on next line 

    let guess = prompt("Player 2: Guess a letter").toUpperCase();

    if (guessedLetters.includes(guess)) { //checks if letter already exists in array
        alert("You already guessed this letter.");
        continue; //skips rest of loop and asks again
    }
    guessedLetters.push(guess) //adds the new letter to array

    if (word.includes(guess)) { //checks if guessed letter exists in the word
        let newHidden = ""; //empty string to rebuild updated display

        for (let i = 0; i < word.length; i++) { //loop through every position in the word
            if (word[i] === guess || hiddenWord[i] !== "*") {
                newHidden += word[i]; //add the real letter to display
            } else {
                newHidden += "*"; //keep it hidden
            }
        }
        hiddenWord = newHidden; //update the visible word
    } else {
        attempts++; //if letter not in word → increase attempts
            alert("Wrong guess: " + guess + "\nAttempts left: " + (maxAttempts - attempts));
// "Wrong guess: " + guess → shows which letter failed
// (maxAttempts - attempts) → shows remaining chances
    }

}
if (hiddenWord === word) {
    alert("YIPEEEEE YOU WIN! The word was: " + word)

} else {
    alert("YOU LOSE! The word was: " + word)
}