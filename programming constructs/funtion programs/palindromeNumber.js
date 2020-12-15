var readline = require("readline-sync");

function checkPalindrome(inputNum) {
    let num = inputNum;
    let reverseNum = 0;
    while (num !== 0) {
        let remainder = num % 10;
        reverseNum = reverseNum * 10 + remainder;
        num = Math.floor(num / 10);
    }
    if (inputNum === reverseNum) {
        console.log(inputNum + " is a palindrome number.");
    } else {
        console.log(inputNum + " is not a palindrome number.");
    }
}

let inputNum = readline.question("Enter number to check palindrome or not: ");
checkPalindrome(parseInt(inputNum));