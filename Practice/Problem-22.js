/* Explore the amount out of the string "Please give Rs/- 1000" */

let str = "Please give Rs/- 1000";

let amount = Number.parseInt(str.slice(17));
console.log(amount);
console.log(typeof amount);