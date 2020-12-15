var readline = require("readline-sync");

function checkPrime(inputNum) {
    let temp;
    var isPrime = true;
    for (let i = 2; i <= inputNum / 2; i++) {
        temp = inputNum % i;
        if (temp == 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(inputNum + " is a Prime Number");
    } else {
        console.log(inputNum + " is not a Prime Number");
    }
}

function checkPalindrome(inputNum) {
    let num = inputNum;
    let reverseNum = 0;
    while (num !== 0) {
        let remainder = num % 10;
        reverseNum = reverseNum * 10 + remainder;
        num = Math.floor(num / 10);
    }
    if (inputNum == reverseNum) {
        checkPrime(reverseNum);
        console.log(inputNum + " is a palindrome number.");
    } else {
        console.log(inputNum + " is not a palindrome number.");
    }
}

let inputNum = readline.question("Enter the number :");
if (parseInt(inputNum) === 1) {
    console.log("1 is not prime number");
} else {
    checkPalindrome(parseInt(inputNum));
}