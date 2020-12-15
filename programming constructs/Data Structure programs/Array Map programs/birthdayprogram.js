// 2.Same birth month for 50 individuals
let birthDayMap = new Map();

//Initializes start date
startDate = new Date("1 Jan 1992");

//Initializes end date
endDate = new Date("31 Dec 1993");

// generate 50 random dates between the above specified dates
for (let i = 0; i < 50; i++) {
    // date.getTime() gives total milliseconds till the date from 1970/01/01
    randomDate = new Date(startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime()));
    birthDayMap.set((i + 1), randomDate);
}

for (let [key, value] of birthDayMap) {
    console.log(key, value);
}

let sameMonthbirthDayMap = new Map();
for (let [key1, value1] of birthDayMap) {
    arr = [];
    month = value1.getMonth();
    for (let [key2, value2] of birthDayMap) {
        //checking if the month value is same and then pushing into array and map
        if (value2.getMonth() == month) {
            arr.push(key2);
            sameMonthbirthDayMap.set(value2.getMonth(), arr);
        }
    }
}

// printing values
for (let [key, value] of sameMonthbirthDayMap) {
    console.log("\nMonth: " + key + ". Person id: " + value);
}