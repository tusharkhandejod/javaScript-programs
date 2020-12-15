// 2.Sort the array.

let numArray = new Array(10);
for (let i = 0; i < numArray.length; i++) {
    numArray[i] = Math.floor(Math.random() * 900) + 100;
}
console.log("\nOriginal array = ");
console.log(numArray);
let sortedArray = numArray.sort();
console.log("\nSorted array = ");
console.log(sortedArray);
console.log("\nUsing sorting\n2nd largest element = " + sortedArray[(sortedArray.length - 2)] + "\n2nd smallest element = " + sortedArray[1]);