let bottles = Number(prompt("Enter number of bottles to start:"));

let step = 1;
// tracks how many bottles to remove each round
// starts at 1, then increases (1 → 2 → 3 → ...)

while (bottles > 0) { //runs as long bottles remain and stops when bottle is 0

    alert(
        bottles + " bottle" + (bottles > 1 ? "s" : "") + " of beer on the wall\n" +
        bottles + " bottle" + (bottles > 1 ? "s" : "") + " of beer\n" +
        "Take " + step + " down, pass " + (step > 1 ? "them" : "it") + " around"
    );
// bottles + " bottle" + (bottles > 1 ? "s" : "")
// adds "s" only if plural
// example:
// 2 → "bottles"
// 1 → "bottle"

// (step > 1 ? "them" : "it")
// grammar fix:
// 1 → "it"
// more → "them"

    bottles -= step; //decreases bottle

    if (bottles < 0) bottles = 0; //stops numbers going below 0

    alert(
        bottles + " bottle" + (bottles !== 1 ? "s" : "") + " of beer on the wall"
    );
//     shows updated number
// grammar adjusted again

    step++; //next round removes more bottles
}

alert("No more bottles of beer on the wall");