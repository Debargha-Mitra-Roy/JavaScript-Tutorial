/* Print "You can Drive" or "You can not Drive" based on age being greater than 18 using ternary operator. */

const age = prompt("Enter your age : ")

const isDrive = age >= 18 ? "You can Drive" : "You can not Drive";

console.log(isDrive);