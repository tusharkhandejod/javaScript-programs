// 1. Dice Problem

let diceMap = new Map();
let flag = true;

while (flag) {
    //generating random number between 1-6
    let diceValue = (Math.floor((Math.random() * 10) % 6)) + 1;
    console.log("\nDice output = " + diceValue);
    //if the map already has the key increase the count and update the map
    if (diceMap.has(diceValue)) {
        count = diceMap.get(diceValue);
        count++;
        diceMap.set(diceValue, count);
    }
    // else add new key value pair into the map
    else {
        diceMap.set(diceValue, 1);
    }

    //check for all key-value pairs if the value=10 then come out of while loop
    for (let [key, value] of diceMap) {
        if (value == 10) {
            flag = false;
            break;
        }
    }
}

for (let [key, value] of diceMap) {
    //Checking for the maximum occurance 
    if (value == Math.max(...diceMap.values()))
        console.log("\nMaximum occurence: " + key + " occured for " + value + " numer of times.");
    //Checking for the minimum occurance
    if (value == Math.min(...diceMap.values()))
        console.log("Minimum occurence: " + key + " occured for " + value + " numer of times.");
}