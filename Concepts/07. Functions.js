/* Functions in JavaScript */

function onePlusAverage(x, y) {
    return Math.round(1 + (x + y) / 2);
}

let a = 1;
let b = 2;
let c = 3;

console.log("One plus average of" + a + " & " + b + " is : ", onePlusAverage(a, b));
console.log("One plus average of" + b + " & " + c + " is : ", onePlusAverage(b, c));
console.log("One plus average of" + a + " & " + c + " is : ", onePlusAverage(a, c));