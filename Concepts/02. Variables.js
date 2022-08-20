/* Variables in JavaScripts */

let a = 67;
console.log("a = ", a);

a = "Hello" // Change in Runtime
console.log("a = ", a);

var b = 78;
console.log("b = ", b);

b = "World"; // Change in Runtime
console.log("b = ", b);

const c = 81;
console.log("c = ", c);

// c = "Ryzen" // Doesn't change in Runtime
// console.log("c = ", c)


/* Difference between 'var' and 'let' */

// var
var d = 45;
var e = "Hello";
var f = null;
var g = undefined;

{
    var b = 'this';
    console.log("Locally declared -> b = ", b); // Prints 'this'
}

console.log("Globally declared -> b = ", b); // Prints 'this'

// let
let h = 45;
let i = "Hello";
let j = null;
let k = undefined;

{
    let i = 'this';
    console.log("Locally declared -> b = ", i); // Prints 'this'
}

console.log("Globally declared -> b = ", i); // Prints 'Hello'