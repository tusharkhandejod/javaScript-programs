// 1.Get 10 random 3 digits number and print 2nd largest and 2nd smallest of them.

let numArray = new Array(10);
for (let i = 0; i < numArray.length; i++) {
    numArray[i] = Math.floor(Math.random() * 900) + 100;
}
console.log(numArray);
//using bubble sort to sort the array into ascending order
for (let i = 0; i < numArray.length; i++) {
    for (let j = 0; j < numArray.length - 1; j++) {
        if (numArray[j] > numArray[j + 1]) {
            let temp = numArray[j];
            numArray[j] = numArray[j + 1];
            numArray[j + 1] = temp;
        }
    }
}
console.log(numArray);
console.log("2nd largest element: " + numArray[(numArray.length - 2)] + "\n2nd smallest element: " + numArray[1]);