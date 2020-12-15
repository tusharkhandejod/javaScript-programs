function displayUnit(digitPlace) {
    if (digitPlace == 1) console.log("Units");
    else if (digitPlace == 10) console.log("Tens");
    else if (digitPlace == 100) console.log("Hundreds");
    else if (digitPlace == 1000) console.log("Thousands");
    else if (digitPlace == 10000) console.log("Ten Thousands");
    else if (digitPlace == 100000) console.log("Lakhs");
    else if (digitPlace == 1000000) console.log("Ten Lakhs");
    else console.log("Invalid number.");
}
var readline = require("readline-sync");
var digitPlace = readline.question("Enter the decimal place");
displayUnit(parseInt(digitPlace));