function arithmaticOperation(a, b, c) {
    let option1 = a + b * c;
    console.log("a + b * c = " + option1);
    let option2 = (a % b) + c;
    console.log("a % b + c = " + option2);
    let option3 = c + a / b;
    console.log("c + a / b = " + option3);
    let option4 = a * b + c;
    console.log("a * b + c = " + option4);

    optionArray = [option1, option2, option3, option4];
    min = optionArray[0];
    max = optionArray[0];

    for (array of optionArray) {
        if (array < min) {
            min = array;
        }
    }

    for (array of optionArray) {
        if (array > max) {
            max = array;
        }
    }

    console.log("maximum number: " + max);
    console.log("minimum number: " + min);
}

var readline = require("readline-sync");
let a = readline.question("Enter the first number : ");
let b = readline.question("Enter the second number : ");
let c = readline.question("Enter the third number : ");
arithmaticOperation(parseInt(a), parseInt(b), parseInt(c));