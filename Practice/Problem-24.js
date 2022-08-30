/* Create an Array of numbers and take input from the user to add numbers to this array. */

let arr = [1, 2, 3, 4, 5];

let a = prompt("Enter a number : ");
a = Number.parseInt(a);
arr.push(a);

console.log(arr);