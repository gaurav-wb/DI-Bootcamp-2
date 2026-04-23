// 🌟 Exercise 6 : Vacations Costs
// Instructions
// Let’s create functions that calculate your vacation’s costs:

// Define a function called hotelCost().
// It should ask the user for the number of nights they would like to stay in the hotel.
// If the user doesn’t answer or if the answer is not a number, ask again.
// The hotel costs $140 per night. The function should return the total price of the hotel.


// Define a function called planeRideCost().
// It should ask the user for their destination.
// If the user doesn’t answer or if the answer is not a string, ask again.
// The function should return a different price depending on the location.
// “London”: 183$
// “Paris” : 220$
// All other destination : 300$



// Define a function called rentalCarCost().
// It should ask the user for the number of days they would like to rent the car.
// If the user doesn’t answer or if the answer is not a number, ask again.
// Calculate the cost to rent the car. The car costs $40 everyday.
// If the user rents a car for more than 10 days, they get a 5% discount.
// The function should return the total price of the car rental.



// Define a function called totalVacationCost() that returns the total cost of the user’s vacation by calling the 3 functions that you created above.
// Example : The car cost: $x, the hotel cost: $y, the plane tickets cost: $z.
// Hint: You have to call the functions hotelCost(), planeRideCost() and rentalCarCost() inside the function totalVacationCost().




// Call the function totalVacationCost()

// Bonus: Instead of using a prompt inside the 3 first functions, only use a prompt inside the totalVacationCost() function. You need to change the 3 first functions, accordingly.

function hotelCost() {
    let nightStay;

    do {
        nightStay = Number(prompt("How many nights in hotel?"));
    } while (isNaN(nightStay) || nightStay <= 0);

    return nightStay * 140;
}

function planeRideCost() {
    let destination;

    do {
        destination = prompt("Where are you going?");
    } while (!destination);

    destination = destination.toLowerCase();

    if (destination === "london") return 183;
    if (destination === "paris") return 220;
    return 300;
}

function rentalCarCost() {
    let carDays;

    do {
        carDays = Number(prompt("How many days for car rental?"));
    } while (isNaN(carDays) || carDays <= 0);

    let cost = carDays * 40;

    if (carDays > 10) {
        cost *= 0.95;
    }

    return cost;
}

function totalVacationCost() {
    let hotel = hotelCost();
    let car = rentalCarCost();
    let plane = planeRideCost();

    let total = hotel + car + plane;

    alert("Hotel cost: $" + hotel);
    alert("Car cost: $" + car);
    alert("Plane cost: $" + plane);
    alert("Total cost: $" + total);

    return total;
}

totalVacationCost();