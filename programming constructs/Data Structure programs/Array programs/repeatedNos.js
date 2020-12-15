// 5.Find repeated digits between 0-100.

let repeatedDigitsArr = [];
for (let i = 1; i < 100; i++) {
    if ((i % 11) == 0) {
        repeatedDigitsArr.push(i);
    }
}
console.log("Repeated digits content:")
console.log(repeatedDigitsArr);