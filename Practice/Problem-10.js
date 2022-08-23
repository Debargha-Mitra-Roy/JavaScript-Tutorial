/* Program to find sum of n natural numbers */

let sum = 0;
let n = prompt("Enter the value of n : ");
n = Number.parseInt(n);

for (let i = 0; i <= n; i++) {
    sum += i;
}

console.log("Sum of the first " + n + " natural numebrs is : " + sum);