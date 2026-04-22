// <<<<<<<
// Exercise 1: Your favorite food
// Instructions
// Store your favorite food into a variable.

// Store your favorite meal of the day into a variable (ie. breakfast, lunch or dinner)

// Console.log I eat <favorite food> at every <favorite meal>

// For example

// If your favorite food is "chocolate", 
// and your favorite meal of the day is "dinner", 
// you will console.log 
// I eat chocolate at every dinner


let favoriteFood = "Chocolate"
let favoriteMealTime = "Dinner"
console.log("I eat" + " " + favoriteFood + " at every " + favoriteMealTime)

//  Exercise 2 : Series
// Instructions
// Part I
// Using this array : const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];

// Create a variable named myWatchedSeriesLength that is equal to the number of series in the myWatchedSeries array.

// Create a variable named myWatchedSeriesSentence, that is equal to a sentence describing the series you watched
// For example : black mirror, money heist, and the big bang theory

// Console.log a sentence using both of the variables created above
// For example : I watched 3 series : black mirror, money heist, and the big bang theory


// Part II
// Change the series “the big bang theory” to “friends”. Hint : You will need to use the index of “the big bang theory” series.
// Add, at the end of the array, the name of another series you watched.
// Add, at the beginning of the array, the name of your favorite series.
// Delete the series “black mirror”.
// Console.log the third letter of the series “money heist”.
// Finally, console.log the myWatchedSeries array, to see all the modifications you’ve made.
const myWatchedSeries = ["black mirror","money heist", "the big bang theory"];
const myWatchedSeriesLength = myWatchedSeries.length;
const myWatchedSeriesSentence =  myWatchedSeries.join(", ").replace(", the", ", and the");
console.log("I watched " + myWatchedSeriesLength + " series : " + myWatchedSeriesSentence )

// part II
myWatchedSeries[2] = "friends" ;
myWatchedSeries.push("Breaking Bad");
myWatchedSeries.unshift("Dexter");
myWatchedSeries.splice(myWatchedSeries.indexOf("black mirror"),1)
console.log(myWatchedSeries[myWatchedSeries.indexOf("money heist")][2])
console.log(myWatchedSeries)


// Exercise 3 : The temperature converter
// Instructions
// Store a celsius temperature into a variable.

// Convert it to fahrenheit and console.log <temperature>°C is <temperature>°F.
// Hint : Should you create another variable to hold the temperature in fahrenheit? (ie. point 2)
// Hint: To convert a temperature from celsius to fahrenheit : Divide it by 5, then multiply it by 9, then add 32
let tempcel = 20; 
let tempfah = (tempcel * 9/5) + 32; 
console.log(tempcel + "°C is " + tempfah + "°F");

// Exercise 4 : Guess the answers #1
// Instructions
// For each expression, predict what you think the output will be in a comment (//) without first running the command.
// Of course, explain each prediction.
// Then run the expression in the console. Note the actual output in a comment and compare it with your prediction.



// For example

// console.log(2+3)
// Prediction: It will output 5, because 2 and 3 are numbers
// Actual: 5

let c;
let a = 34;
let b = 21;
console.log(a+b)
//prediction: 55 
//actual: 55

a=2;
console.log(a+b)
//prediction: 23
//actual: 23
// c is undefined

console.log(3 + 4 + '5');
//3+4=7 then the number will be with the string5 and it becomes 75


// Exercise 5 : Guess the answers #2
// Instructions
// For each expression, in a Javascript file in VS CODE, predict what you think the output will be in a comment (//) without first running the command.
// Of course, explain each prediction.

// Then run the expression in the console of your browser (NOT IN VS CODE).

// Note the actual output in a comment and compare it with your prediction.



// For example

typeof("potato")
// Prediction: Vegetable
// Actual: String


// What is the output of each of the expressions below?


typeof(15)
// Prediction: number   
// Actual: number

typeof(5.5)
// Prediction: number
// Actual:number

typeof(NaN)
// Prediction: not a number
// Actual: number because  it is a numeric type

typeof("hello")
// Prediction: string
// Actual: string

typeof(true)
// Prediction: boolean
// Actual: boolean

typeof(1 != 2)
// Prediction: true
// Actual: boolean; it asked for type and not answer

"hamburger" + "s"
// Prediction: hamburgers
// Actual:hamburgers

"hamburgers" - "s"
// Prediction: NaN
// Actual: NaN

"1" + "3"
// Prediction: 13
// Actual:13

"1" - "3"
// Prediction: -2
// Actual: -2

"johnny" + 5
// Prediction: johnny5
// Actual: johnny5

"johnny" - 5
// Prediction: NaN
// Actual: NaN

99 * "hello"
// Prediction: NaN
// Actual: NaN

1 != 1
// Prediction: false
// Actual: false

1 == "1"
// Prediction: true
// Actual: true

1 === "1"
// Prediction: false
// Actual: false


// Exercise 6 : Guess the answers #3
// Instructions
// For each expression, in a Javascript file in VS CODE, predict what you think the output will be in a comment (//) without first running the command.
// Of course, explain each prediction.

// Then run the expression in the console of your browser (NOT IN VS CODE).

// Note the actual output in a comment and compare it with your prediction.

5 + "34"
// Prediction: 534
// Actual:

5 - "4"
// Prediction: 1
// Actual: 1

10 % 5
// Prediction: 0
// Actual:0
//since remainder is 0 when 10/5

5 % 10
// Prediction:5
// Actual:5

" " + " "
// Prediction:  
// Actual:  //two spaces together

" " + 0
// Prediction: 0
// Actual: 0 //space+0

true + true
// Prediction: 2 because true is 1 
// Actual: 2

true + false
// Prediction: 1 because true is 1 and false is 0
// Actual: 1

false + true
// Prediction: 1
// Actual:1

false - true 
// Prediction: -1
// Actual:-1

!true
// Prediction:false
// Actual:flase

3 - 4
// Prediction:-1
// Actual:-1
// =======
// Exercise 1: Your favorite food
// Instructions
// Store your favorite food into a variable.

// Store your favorite meal of the day into a variable (ie. breakfast, lunch or dinner)

// Console.log I eat <favorite food> at every <favorite meal>

// For example

// If your favorite food is "chocolate", 
// and your favorite meal of the day is "dinner", 
// you will console.log 
// I eat chocolate at every dinner


