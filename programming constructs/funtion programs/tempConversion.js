var readline = require("readline-sync");
const CELSIUS_TO_FAHRENHEIT = 1;
const FAHRENHEIT_TO_CELCSIOUS = 2;

let temp = readline.question("Enter temperature: ");
let choiceInput = readline.question("Convert temperature into 1.Fahrenheit 2.Celsius: ");
let temperature = parseInt(temp); // converting string input into integer
let choice = parseInt(choiceInput);

function getDegreeFahrenheit(temperature) {
    console.log(temperature + " C = " + ((temperature * 9) / 5 + 32).toFixed(2) + " F");
}

function getDegreeCelsius(temperature) {
    console.log(temperature + " F = " + (((temperature - 32) * 5) / 9).toFixed(2) + " C");
}

switch (choice) {
    case CELSIUS_TO_FAHRENHEIT:
        if (temperature >= 0 && temperature <= 100) {
            getDegreeFahrenheit(temperature);
        } else {
            console.log("Temperature should be within 0-100 C.");
        }

        break;
    case FAHRENHEIT_TO_CELCSIOUS:
        if (temperature >= 32 && temperature <= 212) {
            getDegreeCelsius(temperature);
        } else {
            console.log("Temperature should be within 32-212 F.");
        }
        break;
    default:
        console.log("Please provide valid input.");
}